import { User } from 'generated/graphql';
import { decode, sign } from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { ACCESS_TOKEN_EXPIRES, ACCESS_TOKEN_SECRET, REFRESH_TOKEN_EXPIRES } from './config';

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
    const token = sign({ userId: user.id }, ACCESS_TOKEN_SECRET, {
        expiresIn: parseInt(ACCESS_TOKEN_EXPIRES as string),
    });
    return token;
};

export const generateRefreshToken = async (): Promise<RefreshToken> => {
    const token = uuidv4();
    const toMilliseconds = (REFRESH_TOKEN_EXPIRES as number) * 1000;
    const exp = new Date(Date.now() + toMilliseconds).getTime().toString();
    console.log('🛎 exp: => ', exp);

    // const salt = await genSalt(10);
    // const token = await hash(refreshToken, salt);

    return { token, exp };
};

export const decodeToken = (token: string) => {
    return decode(token);
};
