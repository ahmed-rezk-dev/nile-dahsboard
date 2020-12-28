import { User } from 'generated/graphql';
import { decode, sign } from 'jsonwebtoken';
import { ACCESS_TOKEN_EXPIRES, ACCESS_TOKEN_SECRET, REFRESH_TOKEN_EXPIRES, REFRESH_TOKEN_SECRET } from './config';

export interface Decode {
    userId: string | undefined;
    iat: number;
    exp: number;
}

export interface RefreshToken {
    token: string;
    exp: string;
}

export const generateAccessToken = (user: User) => {
    const token = sign(user, ACCESS_TOKEN_SECRET, {
        expiresIn: ACCESS_TOKEN_EXPIRES,
    });
    return token;
};

export const generateRefreshToken = (user: User) => {
    const token = sign({ userId: user.id }, REFRESH_TOKEN_SECRET, {
        expiresIn: parseInt(REFRESH_TOKEN_EXPIRES as string),
    });
    return token;
};

export const decodeToken = (token: string) => {
    return decode(token);
};
