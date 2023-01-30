import { Category } from '@prisma/client'

import Prisma from "../prismaConection";
import { Categories as CategoryModel } from "../Models /categories.model";
import { BadRequestException } from "../Middlewares/httpExceptions";

import { CreateCategoryDto } from '../Dto/create-category.dto';

export default class CategoriesService {
    category: CategoryModel
    constructor() {
        this.category = new CategoryModel(Prisma.category);
    }

    async create(categoryData: CreateCategoryDto): Promise<Category> {
        if(!categoryData || !categoryData.name || categoryData.name.length === 0){
            throw new BadRequestException('Category must gave a name');
        }
        return this.category.create(categoryData);
    }

    async find(name?: string): Promise<Category[]>{
        return this.category.findByName(name || '');
    }

    async delete(categoryId: string): Promise<Category> {
        return this.category.delete(categoryId)
    }
}
