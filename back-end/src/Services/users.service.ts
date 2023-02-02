import isEmail from 'isemail';
import bcrypt from 'bcryptjs';
import moment from "moment";
import Prisma from "../prismaConection";

import { Roles } from '../Models/roles.model';
import { BadRequestException } from "../Middlewares/httpExceptions";
import { Users as UserModel } from "../Models/users.model";

import { UpdateUserDto } from "../Dto/update-user.dto";
import { CreateUserDto } from '../Dto/create-user.dto';
import { searchParamsUser } from '../Dto/search-params-user.dto';


export default class UsersService {
    user: UserModel
    private readonly roles = ['Admin', 'Customer']
    constructor() {
        this.user = new UserModel(Prisma.user);
    }

    async findById(id: string): Promise<UpdateUserDto | null> {
        const user = this.user.findById(id, true);
        return user;
    }

    async findByParams(searchParams: searchParamsUser, userId?: string) {
        if (!userId) delete searchParams.show;

        if (searchParams && searchParams.show !== undefined) {
            const user = await this.user.findById(userId!, true)
            if (!user || user.role.name !== 'Admin') {
                delete searchParams.show;
            }
            const validRole = this.roles.find(role => role === searchParams.show)
            if (validRole === undefined) {
                throw new BadRequestException('Parametro show tem que ser \'Admin\' ou \'Customer\'');
            }
        }

        if (!searchParams.page || searchParams.page <= 0) {
            searchParams.page = 1;
        }
        searchParams.page!--;

        if (!searchParams.quantity || searchParams.quantity <= 0) {
            searchParams.quantity = 50;
        }

        return this.user.findByParams(searchParams)
    }

    async create(userData: CreateUserDto): Promise<UpdateUserDto> {
        const { password, name: nameComplete, email, birthDate, isAdmin } = userData;

        const alreadyExists = await this.user.findByEmail(email);
        if (alreadyExists) {
            if (alreadyExists.active === false) {
                const updated = this.update({ ...alreadyExists, active: true }, alreadyExists.id!);
                return updated;
            }
            throw new BadRequestException('Email já registrado');
        }

        const roles = new Roles(Prisma.role);
        const allRoles = await roles.all();
        if (allRoles.length === 0) {
            throw new BadRequestException("Não é possivel criar usuário, cargos não disponiveis");
        }

        if (userData.name.length < 4) {
            throw new BadRequestException("Nome inteiro tem que ter no mínimo 4 caracteres");
        }

        if (userData.password.length < 6) {
            throw new BadRequestException("Senha tem que ter no mínimo 6 caracteres");
        }

        if (!isEmail.validate(userData.email)) {
            throw new BadRequestException("Email não é válido");
        }

        const currentDateMoment = moment();
        const birthDateMoment = moment(userData.birthDate);
        const dateDiff = currentDateMoment.diff(birthDateMoment, 'years');
        if (dateDiff < 18 || dateDiff > 100) {
            throw new BadRequestException('Usuário tem que ter entre 18 e 100 anos de idade');
        }

        const role = allRoles.find(i => (isAdmin ? 'Admin' : 'Customer') === i.name);
        userData.roleId = role?.id || '';

        const user = this.user.create(userData)
        return user;
    }


    async update(userData: UpdateUserDto, userId: string) {

        if (JSON.stringify(userData) === '{}') {
            throw new BadRequestException('Não foi passado dados para fazer o update');
        }

        if (userData.email) {
            const anotherUser = await this.user.findByExistingEmail(userData, userId);


            if (!isEmail.validate(userData.email)) {
                throw new BadRequestException("Email inválido");
            }

            if (anotherUser) {
                throw new BadRequestException('Email já registrado')
            }
        }

        if (userData.name && userData.name.length < 4) {
            throw new BadRequestException("Nome inteiro tem que ter no mínimo 4 caracteres");
        }

        if (userData.password && userData.password.length < 6) {
            throw new BadRequestException("Senha tem que ter no mínimo 6 caracteres");
        }

        if (userData.birthDate) {
            const currentDateMoment = moment();
            const birthDateMoment = moment(userData.birthDate);
            const dateDiff = currentDateMoment.diff(birthDateMoment, 'years');
            if (dateDiff < 18 || dateDiff > 100) {
                throw new BadRequestException('Usuário tem que ter entre 18 e 100 anos de idade');
            }
        }

        let data = userData;

        if (userData.password) {
            data.password = await bcrypt.hash(userData.password, await bcrypt.genSalt());
        }

        const updatedUser = this.user.update(data, userId);

        return updatedUser;
    }

}