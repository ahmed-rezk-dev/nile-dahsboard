import { objectType, queryType, mutationType, makeSchema, stringArg, nonNull } from '@nexus/schema';
import { nexusPrisma } from 'nexus-plugin-prisma';
import path from 'path';
import { compare, compareSync } from 'bcryptjs';
import { Decode, decodeToken, generateAccessToken, generateRefreshToken } from 'utils/generateToken';
import { BASE_URL, REFRESH_TOKEN_EXPIRES } from 'utils/config';

const User = objectType({
    name: 'User',
    definition(t) {
        t.model.id();
        t.model.email();
        t.model.firstname();
        t.model.lastname();
        t.model.password();
        t.model.phone();
        t.model.role();
        t.model.auth();
        t.model.createdAt();
        t.model.updatedAt();
    },
});

const Auth = objectType({
    name: 'Auth',
    definition(t) {
        t.model.id();
        t.model.refreshToken();
        t.model.tokenExpiry();
        t.model.userId();
    },
});

export const AuthPayload = objectType({
    name: 'AuthPayload',
    definition(t) {
        t.nonNull.string('token');
        t.field('user', {
            type: 'User',
        });
    },
});

const REFRESH_TOKEN_COOKIE_OPTIONS: any = {
    // Get part after // and before : (in case port number in URL)
    domain: BASE_URL.split('//')[1].split(':')[0],
    httpOnly: true,
    path: '/',
    sameSite: true,
    secure: !!BASE_URL.includes('https'),
};

const baseUrl = BASE_URL.split('//')[1].split(':')[0];
const secure = !!BASE_URL.includes('https') ? 'secure' : '';

const setCookieHeaderOptions: any = `domain=${baseUrl};httpOnly;path=/;sameSite;${secure}`;

const Query = queryType({
    definition(t) {
        t.list.field('allUsers', {
            type: 'User',
            resolve(_parent, _args, ctx) {
                return ctx.prisma.user.findMany({});
            },
        });

        t.crud.user();
        t.crud.users();
    },
});

const Mutation = mutationType({
    definition(t) {
        t.crud.createOneUser();
        t.crud.deleteOneUser();
        t.crud.deleteManyUser();
        t.crud.updateOneUser();
        t.crud.updateManyUser();

        // Login: JWT
        t.nonNull.field('login', {
            type: 'AuthPayload',
            args: { email: nonNull(stringArg()), password: nonNull(stringArg()) },
            resolve: async (_parent, { email, password }, { prisma, res }) => {
                // 1- Check if userJavaScript is exist
                const user = await prisma.user.findFirst({ where: { email } });
                if (!user) {
                    throw new Error('User is not exist!');
                }

                // 2- Check if password is correct
                const isPasswordMatch = compareSync(password, user.password);
                if (!isPasswordMatch) {
                    throw new Error('Password not correct!');
                }

                // 3- Generate token if email/password are correct
                const token = generateAccessToken(user);
                const refreshToken = await generateRefreshToken();

                res?.setHeader('set-cookie', [
                    `refreshToken=${refreshToken.token};Max-Age=${REFRESH_TOKEN_EXPIRES};${setCookieHeaderOptions}`,
                ]);

                await prisma.user.update({
                    where: { id: user.id },
                    data: {
                        auth: { update: { refreshToken: refreshToken.token, tokenExpiry: refreshToken.exp } },
                    },
                });

                return { token, user };
            },
        });

        // Refresh token
        t.nonNull.field('refreshToken', {
            type: 'AuthPayload',
            args: { userId: nonNull(stringArg()) },
            resolve: async (_parent, { userId }, { req, res, prisma }) => {
                const { refreshToken } = req.cookies;
                if (!refreshToken) throw new Error('No refresh token provided');

                const foundUser = await prisma.user.findFirst({ where: { id: userId }, include: { auth: true } });
                if (!foundUser) throw new Error('Invalid user');

                let isRefreshTokenValid = false;
                const { auth } = foundUser;
                console.log('auth:', auth);
                const dateNow = Date.now();
                console.log('dateNow:', dateNow);

                isRefreshTokenValid = auth?.refreshToken === refreshToken;
                const isRefreshTokenExpiryValid = Number(auth?.tokenExpiry)! > Date.now();

                if (isRefreshTokenValid && isRefreshTokenExpiryValid) isRefreshTokenValid = true;
                if (!isRefreshTokenValid) throw new Error('Invalid refresh token');

                // 3- Generate new tokens
                const token = generateAccessToken(foundUser);
                const newRefreshToken = await generateRefreshToken();

                res?.setHeader('set-cookie', [
                    `refreshToken=${newRefreshToken.token};Max-Age=${REFRESH_TOKEN_EXPIRES};${setCookieHeaderOptions}`,
                ]);

                await prisma.user.update({
                    where: { id: userId },
                    data: {
                        auth: {
                            update: {
                                refreshToken: newRefreshToken.token,
                                tokenExpiry: newRefreshToken.exp,
                            },
                        },
                    },
                });

                return { token, user: foundUser };
            },
        });

        // Logout
        t.nonNull.field('logout', {
            type: 'Boolean',
            args: { userId: nonNull(stringArg()) },
            resolve: async (_parent, { userId }, { req, res, prisma }) => {
                const { refreshToken } = req.cookies;
                if (!refreshToken) throw new Error('No refresh token provided');

                const foundUser = await prisma.user.findFirst({
                    where: { id: userId },
                    include: { auth: true },
                });
                if (!foundUser) throw new Error('Invalid user');

                const isRefreshTokenValid = compareSync(refreshToken, foundUser.auth?.refreshToken!) ? true : false;
                if (!isRefreshTokenValid) throw new Error('Invalid refresh token');

                res?.setHeader('set-cookie', [`refreshToken=deleted;Max-Age=${Date.now()};${setCookieHeaderOptions}`]);
                return true;
            },
        });
    },
});

export const schema = makeSchema({
    types: [User, Auth, AuthPayload, Query, Mutation],
    plugins: [nexusPrisma({ experimentalCRUD: true })],
    outputs: {
        typegen: path.join(process.cwd(), 'generated', 'nexus-typegen.ts'),
        schema: path.join(process.cwd(), 'generated', 'schema.graphql'),
    },
    typegenAutoConfig: {
        contextType: 'Context.Context',
        sources: [
            {
                source: '@prisma/client',
                alias: 'prisma',
            },
            {
                source: path.join(process.cwd(), 'graphql', 'context.ts'),
                alias: 'Context',
            },
        ],
    },
});
