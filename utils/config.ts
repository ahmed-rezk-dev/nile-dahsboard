export const BASE_URL = process.env.BASE_URL || '';
export const ACCESS_TOKEN_TYPE = process.env.ACCESS_TOKEN_TYPE || 'HS256';
export const ACCESS_TOKEN_SECRET =
    process.env.ACCESS_TOKEN_SECRET || '3EK6FD+o0+c7tzBNVfjpMkNDi2yARAAKzQlk8O2IKoxQu4nF7EdAh8s3TwpHwrdWT6R';
export const REFRESH_TOKEN_SECRET =
    process.env.REFRESH_TOKEN_SECRET || '3EK6FD+o0+c7tzBNVfjpMkNDi2yARAAKzQlk8O2IKoxQu4nF7EdAh8s3T123adasdaf';
export const REFRESH_TOKEN_EXPIRES = process.env.REFRESH_TOKEN_EXPIRES || 60 * 24 * 30; // expire after 30 days
export const ACCESS_TOKEN_EXPIRES = process.env.ACCESS_TOKEN_EXPIRES || 15; // expire after 15 m
