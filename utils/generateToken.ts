import { User } from 'generated/graphql';
import { decode, sign } from 'jsonwebtoken';
import { ACCESS_TOKEN_EXPIRES, ACCESS_TOKEN_SECRET, REFRESH_TOKEN_EXPIRES, REFRESH_TOKEN_SECRET } from './config';

export interface Decode {
    userId: string | undefined;
    iat: number;
    exp: number;
}

export const generateAccessToken = (user: User) => {
    const token = sign({ userId: user.id }, ACCESS_TOKEN_SECRET, {
        expiresIn: parseInt(ACCESS_TOKEN_EXPIRES as string),
    });
    return token;
};

export const generateRefreshToken = () => {
    const token = sign({}, REFRESH_TOKEN_SECRET, {
        expiresIn: parseInt(REFRESH_TOKEN_EXPIRES as string),
    });
    return token;
};

export const decodeToken = (token: string) => {
    return decode(token);
};
