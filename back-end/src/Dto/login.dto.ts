import { refine, string, object, size } from 'superstruct';
import isEmail from 'isemail';
import { Prisma } from '@prisma/client';

export const LoginDto = object({
    email: refine(string(), 'email', (v) => isEmail.validate(v)),
    password: size(string(), 8, 40)
});

export type LoginDtoType = Omit<Prisma.UserCreateArgs['data'], 'id' | 'nameComplete' | 'birhtDate' | 'createdDate' | 'active'>
