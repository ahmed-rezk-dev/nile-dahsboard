import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { User } from 'generated/graphql';
import { verify } from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET } from 'utils/config';

const prisma = new PrismaClient({ log: ['query'] });

export interface ReqRes {
    req: Request;
    res: Response;
}
export interface Context extends ReqRes {
    prisma: PrismaClient;
    setCookies: any;
    setHeaders: any;
    user?: User;
}

export function createContext({ req, res }: ReqRes): Context {
    // Header is in form 'Bearer <token>', grabbing the part after ' '
    const token = req?.headers.authorization?.split(' ')[1] || '';

    // Initialize as empty arrays - resolvers will add items if required
    const setCookies: any = [];
    const setHeaders: any = [];

    try {
        const { user }: any = verify(token, ACCESS_TOKEN_SECRET);
        return { req, res, setCookies, setHeaders, user, prisma };
    } catch (error) {
        return { setCookies, setHeaders, req, res, prisma };
    }
}
