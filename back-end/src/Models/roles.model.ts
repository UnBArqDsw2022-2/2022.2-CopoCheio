import { PrismaClient, Role } from '@prisma/client';

import { CreateRoleDto } from '../Dto/create-role.dto';
import { UpdateRoleDto } from '../Dto/update-role.dto';

export class Roles {
    constructor(private readonly prismaRole: PrismaClient['role']) { }

    async all(): Promise<Role[]> {
        return this.prismaRole.findMany()
    }

    async create(data: CreateRoleDto): Promise<Role> {
        return this.prismaRole.create({ data })
    }

    async update(data: UpdateRoleDto, roleId: string): Promise<Role> {
        return this.prismaRole.update({
            data,
            where: {
                id: roleId
            }
        })
    }

    async findOne(id: string = ''): Promise<Role | null>  {
        return await this.prismaRole.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                name: true
            }
        });
    }
}