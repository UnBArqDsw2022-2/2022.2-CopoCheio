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
    private readonly roles = ['Admin','Customer']
    constructor() {
        this.user = new UserModel(Prisma.user);
    }
    
    async findByParams(searchParams: searchParamsUser, userId?: string) {        
        if (!userId) delete searchParams.show;

        if (searchParams && searchParams.show !== undefined) {
           const user = await this.user.findById(userId!,true)           
           if (!user || user.role.name !== 'Admin') {
            delete searchParams.show;
           }           
           const validRole = this.roles.find(role => role===searchParams.show)
           if (validRole === undefined) {
            throw new BadRequestException('Param show must be \'Admin\' or \'Customer\'');
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
            throw new BadRequestException('Email already registered');
        }

        const roles = new Roles(Prisma.role);
        const allRoles = await roles.all();
        if (allRoles.length === 0) {
            throw new BadRequestException("Can't create user, no roles available");
        }

        if (userData.name.length < 4) {
            throw new BadRequestException("Full name must longer than 4 characters");
        }

        if (userData.password.length < 6) {
            throw new BadRequestException("Password must be longer than 6 characters");
        }

        if (!isEmail.validate(userData.email)) {
            throw new BadRequestException("Email is not valid");
        }

        const currentDateMoment = moment();
        const birthDateMoment = moment(userData.birthDate);
        const dateDiff = currentDateMoment.diff(birthDateMoment, 'years');
        if (dateDiff < 18 || dateDiff > 100) {
            throw new BadRequestException('User must be between 18 and 100 years old');
        }

        const role = allRoles.find(i => (isAdmin ? 'Admin' : 'Customer') === i.name);
        userData.roleId = role?.id

        const user = this.user.create(userData)
        return user;
    }


    async update(userData: UpdateUserDto, userId: string) {

        if (JSON.stringify(userData) === '{}') {
            throw new BadRequestException('No data provided for update');
        }

        if (userData.email) {
            const anotherUser = await this.user.findByExistingEmail(userData, userId);


            if (!isEmail.validate(userData.email)) {
                throw new BadRequestException("Email is not valid");
            }

            if (anotherUser) {
                throw new BadRequestException('Email already in use')
            }
        }

        if (userData.name && userData.name.length < 4) {
            throw new BadRequestException("Full name must longer than 4 characters");
        }

        if (userData.password && userData.password.length < 6) {
            throw new BadRequestException("Password must be longer than 6 characters");
        }

        if (userData.birthDate) {
            const currentDateMoment = moment();
            const birthDateMoment = moment(userData.birthDate);
            const dateDiff = currentDateMoment.diff(birthDateMoment, 'years');
            if (dateDiff < 18 || dateDiff > 100) {
                throw new BadRequestException('User must be between 18 and 100 years old');
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