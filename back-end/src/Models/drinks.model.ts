import { Drink, CategoriesOnDrinks, CountriesOnDrinks } from '@prisma/client'

import Prisma from '../prismaConection';

import { CreateDrinkDto } from '../Dto/create-drink.dto';
import { UpdateDrinkDto } from '../Dto/update-drink.dto';
import { searchParamsDrink } from '../Dto/search-params-drink.dto';

export class Drinks {
    constructor(
        private readonly prismaDrink: typeof Prisma['drink'],
        private readonly prismaCategoriesOnDrinks: typeof Prisma['categoriesOnDrinks'],
        private readonly prismaCountriesOnDrinks: typeof Prisma['countriesOnDrinks']
        ) { }

    async findById(drinkId: string): Promise<Drink | null> {
        return this.prismaDrink.findUnique({
            where: {
                id: drinkId
            }
        });
    }

    async findByParams(searchParams:searchParamsDrink) {
        return this.prismaDrink.findMany({
            where:{
                name:{
                    contains: searchParams.name,
                    mode: 'insensitive'
                },
            },
            include:{
                categories:true,
                countries:true,
                createdBy:true
            },
            skip: searchParams.page! * searchParams.quantity!,
            take: searchParams.quantity!
        })
    }

    async countByParams(searchParams:searchParamsDrink) {
        return this.prismaDrink.count({
            where:{
                name:{
                    contains: searchParams.name,
                    mode: 'insensitive'
                },
            }
        })
    }

    async create(userId: string,drinkData: CreateDrinkDto): Promise<UpdateDrinkDto> {
        const { categories, countries, ...createData} = drinkData;
        return this.prismaDrink.create({
            data: {
                ...createData,
                isVerfied: false,
                createdBy:{
                    connect:{
                        id: userId
                    }
                } 
            }
        });
    }

    async update(drinkId: string, drinkData: UpdateDrinkDto) {
        const { categories, countries, ...updateData} = drinkData;
        const updatedUser = this.prismaDrink.update({
            data:updateData,
            where: {
                id: drinkId
            }
        });

        return updatedUser;
    }

    async addCategory(drinkId: string, categoryId: string): Promise<CategoriesOnDrinks> {
        return this.prismaCategoriesOnDrinks.create({
            data:{
                category:{
                    connect:{
                        id: categoryId
                    }
                },
                drink:{
                    connect:{
                        id:drinkId
                    }
                }
            }
        })
    }

    async addCountry(drinkId: string, countryId: string): Promise<CountriesOnDrinks> {
        return this.prismaCountriesOnDrinks.create({
            data:{
                country:{
                    connect:{
                        id: countryId
                    }
                },
                drink:{
                    connect:{
                        id:drinkId
                    }
                }
            }
        })
    }

    async removeCategory(drinkId: string, categoryId: string): Promise<CategoriesOnDrinks> {
        return this.prismaCategoriesOnDrinks.delete({
            where:{
                drinkId_categoryId:{
                    categoryId,
                    drinkId
                }
            }
        })
    }

    async removeCountry(drinkId: string, countryId: string): Promise<CountriesOnDrinks> {
        return this.prismaCountriesOnDrinks.delete({
            where:{
                drinkId_countryId:{
                    countryId,
                    drinkId
                }
            }
        })
    }
}