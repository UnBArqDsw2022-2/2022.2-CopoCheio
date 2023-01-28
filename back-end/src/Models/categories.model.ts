import { Category } from '@prisma/client'

import Prisma from '../prismaConection';

import { CreateCategoryDto } from '../Dto/create-category.dto';

export class Categories {
    constructor(private readonly prismaCategory: typeof Prisma['category']) { }

    async findByName(name: string): Promise<Category[]> {
        return this.prismaCategory.findMany({
            where: {
                name: {
                    contains: name,
                    mode: 'insensitive'
                }
            }
        });
    }

    async create(categoryData: CreateCategoryDto): Promise<Category> {
        return this.prismaCategory.create({
            data: categoryData
        });
    }

    async delete(categoryId: string): Promise<Category> {
        return this.prismaCategory.delete({
            where: {
                id: categoryId
            }
        })
    }
}