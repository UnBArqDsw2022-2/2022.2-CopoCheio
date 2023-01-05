import { PrismaClient, Role } from '@prisma/client';

import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

export class Roles {
    constructor(private readonly prismaRole: PrismaClient['role']) {}

    async all(): Promise<Role[]> {
        return this.prismaRole.findMany()
    }

    async create(data: CreateRoleDto): Promise<Role> {           
        return this.prismaRole.create({ data })
    }

    async update(data: UpdateRoleDto, roleId: string): Promise<Role> {
        return this.prismaRole.update({ 
            data,
            where:{
                id:roleId
            }
        })
    }
}