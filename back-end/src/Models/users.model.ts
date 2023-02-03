
import moment from "moment";
import bcrypt from 'bcryptjs';

import Prisma from '../prismaConection';

import { CreateUserDto } from '../Dto/create-user.dto';
import { UpdateUserDto } from '../Dto/update-user.dto';
import { searchParamsUser } from "../Dto/search-params-user.dto";

export class Users {
    constructor(private readonly prismaUser: typeof Prisma['user']) { }

    async all(): Promise<UpdateUserDto[]> {
        return this.prismaUser.findMany({
            select: {
                nameComplete: true,
                email: true,
                birthDate: true,
                role: true,
                id: true
            }
        });
    }

    async findByParams(searchParams: searchParamsUser): Promise<UpdateUserDto[]> {

        return this.prismaUser.findMany({
            where: {
                role: {
                    name: {
                        contains: searchParams.show,
                        mode: 'insensitive'
                    }
                },
                nameComplete: {
                    contains: searchParams?.name,
                    mode: 'insensitive'
                },
                email: {
                    contains: searchParams?.email,
                    mode: 'insensitive'
                },
            },
            select: {
                nameComplete: true,
                email: true,
                birthDate: true,
                role: searchParams?.showRole || false,
                id: true
            },
            skip: Number(searchParams.page! * searchParams.quantity!),
            take: Number(searchParams.quantity!)
        });
    }

    async findById(userId: string, showRole: boolean = false) {
        return await this.prismaUser.findUnique({
            where: {
                id: userId
            },
            select: {
                nameComplete: true,
                email: true,
                birthDate: true,
                role: showRole,
                id: true
            }
        });
    }

    async findByEmail(userEmail: string, showPassord: boolean = false): Promise<UpdateUserDto | null> {
        return this.prismaUser.findUnique({
            where: {
                email: userEmail
            },
            select: {
                nameComplete: true,
                email: true,
                birthDate: true,
                id: true,
                password: showPassord,
                roleId: true,
            }
        });
    }

    async findByExistingEmail(userData: UpdateUserDto, userId: string): Promise<UpdateUserDto | null> {
        return this.prismaUser.findFirst({
            where: {
                email: userData.email,
                id: {
                    not: userId
                }
            }
        });
    }

    async create(userData: CreateUserDto): Promise<UpdateUserDto> {
        const { password, name: nameComplete, email, birthDate, roleId } = userData;

        const user = this.prismaUser.create({
            data: {
                password: await bcrypt.hash(password, await bcrypt.genSalt()),
                active: true,
                nameComplete,
                email,
                birthDate: moment(birthDate).format(),
                role: {
                    connect: {
                        id: roleId
                    }
                }
            },
            select: {
                nameComplete: true,
                email: true,
                birthDate: true,
                id: true
            }
        });
        return user;
    }


    async update(updateData: UpdateUserDto, userId: string) {
        const {role, ...data} = updateData;
        const updatedUser = this.prismaUser.update({
            data,
            where: {
                id: userId
            },
            select: {
                id: true,
                email: true,
                nameComplete: true,
                birthDate: true,
                createdDate: true,
                active: true,
                roleId: true
            }
        });

        return updatedUser;
    }

    async count(searchParams: searchParamsUser) {
        return this.prismaUser.count({
            where: {
                role: {
                    name: {
                        contains: searchParams.show,
                        mode: 'insensitive'
                    }
                }
            },
        })
    }
}