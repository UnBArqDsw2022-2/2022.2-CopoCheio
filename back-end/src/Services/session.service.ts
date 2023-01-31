import prisma from '../prismaConection';
import { is } from 'superstruct';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { BadRequestException, UnauthorizedRequestException } from '../Middlewares/httpExceptions';
import { LoginDto, LoginDtoType } from '../Dto/login.dto';
import { Users } from '../Models/users.model';
import { Roles } from '../Models/roles.model';
import authConfig from '../Config/auth';

const users = new Users(prisma.user);
const roles = new Roles(prisma.role);

export default class SessionService {

    static async loginAdmin(login: LoginDtoType): Promise<Object> {
        const user = await users.findByEmail(login.email, true);

        if (!user) {
            throw new BadRequestException("Usuário não encontrado");
        }

        let role = null;
        if (user.roleId)
            role = await roles.findOne(user.roleId);

        if (role!.name !== 'Admin')
            throw new UnauthorizedRequestException('Usuário não permitido');

        const isSame = await SessionService.checkPassword(login.password, user.password!);
        if (!isSame) {
            throw new BadRequestException("Email ou senha invalidos");
        }

        const tokenUser = jwt.sign({ id: user.id!, role: role!.name }, authConfig.secret!, {
            expiresIn: authConfig.expiresIn
        });

        return {
            token: tokenUser,
            id: user.id
        }
    }

    static async login(login: LoginDtoType): Promise<Object> {
        const user = await users.findByEmail(login.email, true);

        if (!user) {
            throw new BadRequestException("Usuário não encontrado");
        }

        const isSame = await SessionService.checkPassword(login.password, user.password!);
        if (!isSame) {
            throw new BadRequestException("Email ou senha invalidos");
        }

        let role = null;
        if (user.roleId)
            role = await roles.findOne(user.roleId);

        const tokenUser = jwt.sign({ id: user.id!, role }, authConfig.secret!, {
            expiresIn: authConfig.expiresIn
        });

        return {
            token: tokenUser,
            id: user.id
        }
    }

    private static async checkPassword(password: string, passwordHash: string): Promise<boolean> {
        return bcrypt.compare(password, passwordHash)
    }
}
