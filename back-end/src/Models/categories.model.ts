import Prisma from '../prismaConection';
import { Category } from '@prisma/client'
import { CreateCategoryDto } from '../Dto/create-category.dto';

export class Categories {
    constructor(private readonly prismaCategory: typeof Prisma['category']) { }

    async all(): Promise<Category[]> {
        return this.prismaCategory.findMany();
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