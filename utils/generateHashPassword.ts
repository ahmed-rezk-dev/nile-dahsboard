import { hash } from 'bcrypt';

export const generateHashPassword = (password: String) => {
    if (password.length < 8) {
        throw new Error('Password should be greater then 8 characters');
    }
    return hash(password, 10);
};
