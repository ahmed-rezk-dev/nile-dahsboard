import { User } from 'generated/graphql';
import { sign } from 'jsonwebtoken';

export const generateToken = (user: User) => {
    const token = sign(user, process.env.JWT_SECRET as string, { expiresIn: '7d' });
    return token;
};
