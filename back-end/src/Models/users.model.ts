
import moment from "moment";
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

import { BadRequestException } from '../Middlewares/httpExceptions';
import { Roles } from './roles.model';
import prisma from '../prismaConection';

import { CreateUserDto } from '../Dto/create-user.dto';
import { UpdateUserDto } from '../Dto/update-user.dto';

export class Users {
    constructor(private readonly prismaUser: PrismaClient['user']) {}

    validator = require('validator');

    async all(): Promise<UpdateUserDto[]> {
        return this.prismaUser.findMany({
            select:{
                nameComplete:true,
                email:true,
                birthDate:true,
                id:true
            }
        })
    }

    async findById(userId: string): Promise<UpdateUserDto|null> {
        return this.prismaUser.findUnique({
            where:{
                id:userId
            },
            select:{
                nameComplete:true,
                email:true,
                birthDate:true,
                id:true
            }
        })
    }

    async findByEmail(userEmail: string, showPassord: boolean = false): Promise<UpdateUserDto|null>{
        return this.prismaUser.findUnique({
            where:{
                email:userEmail
            },
            select:{
                nameComplete:true,
                email:true,
                birthDate:true,
                id:true,
                password: showPassord
            }
        })
    }

    async create(userData: CreateUserDto): Promise<UpdateUserDto>{
        const {password, name: nameComplete, email, birthDate, isAdmin} = userData;

        const alreadyExists = await this.findByEmail(email);
        if (alreadyExists){
            if(alreadyExists.active === false) {
            const updated = this.update({...alreadyExists, active:true}, alreadyExists.id!);
            return updated;
            }
            throw new BadRequestException('Email already registered')
        }

        const roles = new Roles(prisma.role)
        const allRoles = await roles.all()
        if (allRoles.length === 0) {
            throw new BadRequestException("Can't create user, no roles available")
        }
        
        if(userData.name.length < 4){
            throw new BadRequestException("Full name must longer than 4 characters")
        }

        if(userData.password.length < 6){
            throw new BadRequestException("Password must be longer than 6 characters")
        }

        if(!this.validator.isEmail(userData.email)){
            throw new BadRequestException("Email is not valid")
        }

        const currentDateMoment = moment()
        const birthDateMoment = moment(userData.birthDate)
        const dateDiff = currentDateMoment.diff(birthDateMoment, 'years')
        if(dateDiff < 18 || dateDiff > 100){
            throw new BadRequestException('User must be between 18 and 100 years old')
        }
        
        const role = allRoles.find(i => (isAdmin ? 'Admin' : 'Customer') === i.name)

        const user = this.prismaUser.create({ 
            data:{
                password: await bcrypt.hash(password, await bcrypt.genSalt()),
                active: true,
                nameComplete,
                email,
                birthDate: moment(birthDate).format(),
                role:{
                    connect:{
                        id: role!.id
                    }
                }
            },
            select:{
                nameComplete:true,
                email:true,
                birthDate:true,
                id:true
            }
        })
        return user;
    }

    async update(userData: UpdateUserDto, userId: string) {
        if (userData.email) {
            const anotherUser  = await this.prismaUser.findFirst({
                where:{
                    email: userData.email,
                    id:{
                        not:userId
                    }
                }
            })
        
            if (anotherUser) {
                throw new BadRequestException('Email already in use')
            }
        }

        if(userData.name && userData.name.length < 4){
            throw new BadRequestException("Full name must longer than 4 characters")
        }

        if(userData.password && userData.password.length < 6){
            throw new BadRequestException("Password must be longer than 6 characters")
        }

        if(userData.email && !this.validator.isEmail(userData.email)){
            throw new BadRequestException("Email is not valid")
        }

        if(userData.birthDate){
            const currentDateMoment = moment()
            const birthDateMoment = moment(userData.birthDate)
            const dateDiff = currentDateMoment.diff(birthDateMoment, 'years')
            if(dateDiff < 18 || dateDiff > 100){
                throw new BadRequestException('User must be between 18 and 100 years old')
            }
        }

        let data = userData;

        if (userData.password) {
            data.password = await bcrypt.hash(userData.password, await bcrypt.genSalt());
        }

        const updatedUser = this.prismaUser.update({
            data,
            where:{
                id: userId
            },
            select:{
                id: true,
                email: true,
                nameComplete: true,
                birthDate: true,
                createdDate: true,
                active: true,
                roleId: true
            }
        })

        return updatedUser;
    }
}