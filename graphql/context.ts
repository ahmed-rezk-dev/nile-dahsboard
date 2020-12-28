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
    user?: User;
}

export function createContext({ req, res }: ReqRes): Context {
    // Header is in form 'Bearer <token>', grabbing the part after ' '
    const token = req?.headers.authorization?.split(' ')[1] || '';

    try {
        const verifyToken: any = verify(token, ACCESS_TOKEN_SECRET);
        return { req, res, user: verifyToken, prisma };
    } catch (error) {
        return { req, res, prisma };
    }
}
