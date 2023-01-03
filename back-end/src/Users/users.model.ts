import { PrismaClient, User } from '@prisma/client';

import { Roles } from '../Roles/roles.model';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export class Users {
    constructor(private readonly prismaUser: PrismaClient['user']) {}

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

    async findByEmail(userEmail: string): Promise<UpdateUserDto|null>{
        return this.prismaUser.findUnique({
            where:{
                email:userEmail
            },
            select:{
                nameComplete:true,
                email:true,
                birthDate:true,
                id:true
            }
        })
    }

    async create(userData: CreateUserDto): Promise<UpdateUserDto>{
        const {password, name: nameComplete, email, birthDate} = userData;

        const alreadyExists = await this.findByEmail(email);
        if (alreadyExists && alreadyExists.active === false) {
            const updated = this.update({...alreadyExists, active:true}, alreadyExists.id!);
            return updated;
        }
        const roles = await Roles.getAll()

        const user = this.prismaUser.create({ 
            data:{
                password,
                active: true,
                nameComplete,
                email,
                birthDate,
                roleId: roles[0].id
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
                //throw error
            }
        }

        let data = {}

        if (userData.password) {
            // hash and stuff
        }

        const updatedUser = this.prismaUser.update({
            data,
            where:{
                id: userId
            }
        })

        return updatedUser;
    }
}