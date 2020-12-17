import { objectType, queryType, mutationType, makeSchema, stringArg, nonNull } from '@nexus/schema';
import { nexusPrisma } from 'nexus-plugin-prisma';
import path from 'path';
import { compare } from 'bcrypt';
import { generateToken } from 'utils/generateToken';

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
        t.model.createdAt();
        t.model.updatedAt();
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
            resolve: async (_parent, { email, password }, ctx) => {
                // 1- Check if user is exist
                const user = await ctx.prisma.user.findFirst({ where: { email } });
                if (!user) {
                    throw new Error('User is not exist!');
                }

                // 2- Check if password is correct
                const isPasswordMatch = await compare(password, user.password);
                if (!isPasswordMatch) {
                    throw new Error('Password not correct!');
                }

                // 3- Generate token if email/password are correct
                const token = generateToken(user);
                return { token, user };
            },
        });
    },
});

export const schema = makeSchema({
    types: [User, AuthPayload, Query, Mutation],
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
