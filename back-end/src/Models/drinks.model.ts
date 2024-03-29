import { Drink, CategoriesOnDrinks, CountriesOnDrinks } from '@prisma/client'

import Prisma from '../prismaConection';

import { CreateDrinkDto } from '../Dto/create-drink.dto';
import { UpdateDrinkDto } from '../Dto/update-drink.dto';
import { searchParamsDrink } from '../Dto/search-params-drink.dto';

export class Drinks {
    constructor(
        private readonly prismaDrink: typeof Prisma['drink'],
        private readonly prismaCategoriesOnDrinks: typeof Prisma['categoriesOnDrinks'],
        private readonly prismaCountriesOnDrinks: typeof Prisma['countriesOnDrinks'],
    ) { }

    async findById(drinkId: string): Promise<UpdateDrinkDto | null> {
        return this.prismaDrink.findUnique({
            where: {
                id: drinkId
            },
            select: {
                id: true,
                name: true,
                picture: true,
                time: true,
                preparation: true,
                ingredients: true,
                createdDate: true,
                likes: true,
                isAlcoholic: true,
                difficulty: true,
                userId: true
            }
        });
    }

    async findAllFavorites(userId: string) {
        return await this.prismaDrink.findMany({
            where: {
                Favorite: {
                    some: {
                        userId
                    }
                }
            }
        });
    }

    async findByParams(searchParams: searchParamsDrink) {        
        return this.prismaDrink.findMany({
            where: {
                name: {
                    contains: searchParams.name,
                    mode: 'insensitive'
                },
                isVerfied:  {
                    equals: searchParams?.showVerified as boolean
                },
                isAlcoholic: {
                    equals: searchParams?.isAlcoholic as boolean
                }
            },
            include: {
                categories: true,
                countries: true,
                createdBy: true
            },
            skip: Number(searchParams.page! * searchParams.quantity!),
            take: Number(searchParams.quantity!)
        })
    }

    async countByParams(searchParams: searchParamsDrink) {
        return this.prismaDrink.count({
            where: {
                name: {
                    contains: searchParams.name,
                    mode: 'insensitive'
                },
                isVerfied:  {
                    equals: searchParams?.showVerified as boolean
                },
                isAlcoholic: {
                    equals: searchParams?.isAlcoholic as boolean
                }
            },
        })
    }

    async create(userId: string, drinkData: CreateDrinkDto): Promise<UpdateDrinkDto> {
        const { categories, countries, ...createData } = drinkData;
        return this.prismaDrink.create({
            data: {
                ...createData,
                isVerfied: false,
                createdBy: {
                    connect: {
                        id: userId
                    }
                }
            }
        });
    }

    async update(drinkId: string, drinkData: UpdateDrinkDto) {
        const { categories, countries, ...updateData } = drinkData;        
        const updatedUser = this.prismaDrink.update({
            data: updateData,
            where: {
                id: drinkId
            }
        });

        return updatedUser;
    }

    async addCategory(drinkId: string, categoryId: string): Promise<CategoriesOnDrinks> {
        return this.prismaCategoriesOnDrinks.create({
            data: {
                category: {
                    connect: {
                        id: categoryId
                    }
                },
                drink: {
                    connect: {
                        id: drinkId
                    }
                }
            }
        })
    }

    async addCountry(drinkId: string, countryId: string): Promise<CountriesOnDrinks> {
        return this.prismaCountriesOnDrinks.create({
            data: {
                country: {
                    connect: {
                        id: countryId
                    }
                },
                drink: {
                    connect: {
                        id: drinkId
                    }
                }
            }
        })
    }

    async removeCategory(drinkId: string, categoryId: string): Promise<CategoriesOnDrinks> {
        return this.prismaCategoriesOnDrinks.delete({
            where: {
                drinkId_categoryId: {
                    categoryId,
                    drinkId
                }
            }
        })
    }

    async removeCountry(drinkId: string, countryId: string): Promise<CountriesOnDrinks> {
        return this.prismaCountriesOnDrinks.delete({
            where: {
                drinkId_countryId: {
                    countryId,
                    drinkId
                }
            }
        })
    }

    async findRandomDrink(searchParams: searchParamsDrink): Promise<Drink | null> {
        const category = searchParams?.categories;
        const country = searchParams?.countries;
        const difficulty = searchParams?.difficulty;

        const count = await this.prismaDrink.count();

        const min = Math.ceil(0);
        const max = Math.floor(count - 1);
        const skip = Math.floor(Math.random() * (max - min + 1)) + min;

        return this.prismaDrink.findFirst({
            where: {
                categories: {
                    every: {
                        category: {
                            id: {
                                in: category
                            }
                        }
                    }
                },
                countries: {
                    every: {
                        country: {
                            id: {
                                in: country
                            }
                        }
                    }
                },
                difficulty: difficulty,
                isVerfied: true
            },
            include: {
                categories: {
                    include: {
                        category: true
                    }
                },
                countries: {
                    include: {
                        country: true
                    }
                }
            },
            skip: skip
        });

    }

    async delete(drinkId: string) {
        await this.prismaDrink.delete({
            where: {
                id: drinkId               
            }
        })        
    }
}
