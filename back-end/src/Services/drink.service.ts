import { Category, Country } from "@prisma/client";
import Prisma from "../prismaConection";

import { BadRequestException } from "../Middlewares/httpExceptions";
import { Drinks as DrinkModel } from "../Models/drinks.model";
import { Roles as RolesModel } from "../Models/roles.model";
import CategoriesService from "./categories.service";
import CountriesService from "./countries.service";
import UsersService from "./users.service";

import { UpdateDrinkDto } from "../Dto/update-drink.dto";
import { CreateDrinkDto } from '../Dto/create-drink.dto';
import { searchParamsDrink } from "../Dto/search-params-drink.dto";

export default class DrinksService {
    private readonly drink: DrinkModel
    private readonly role: RolesModel
    private readonly categoriesService: CategoriesService
    private readonly countriesService: CountriesService
    private readonly usersService: UsersService
    readonly possibleDifficulties: string[] = ['EASY', 'MEDIUM', 'HARD']
    constructor() {
        this.drink = new DrinkModel(Prisma.drink, Prisma.categoriesOnDrinks, Prisma.countriesOnDrinks);
        this.role = new RolesModel(Prisma.role);
        this.categoriesService = new CategoriesService();
        this.countriesService = new CountriesService();
        this.usersService = new UsersService();
    }

    async findById(id: string) {
        return await this.drink.findById(id);
    }

    async findFavorites(userId: string) {
        return await this.drink.findAllFavorites(userId);
    }

    async findByParams(searchParams: searchParamsDrink, userId: string | undefined) {
        const { page, quantity} = searchParams
        
        if(!userId) {
            searchParams.showVerified = true;
        }

        if (userId && searchParams && searchParams.showVerified !== undefined) {
            const user = await this.usersService.findById(userId!)
            searchParams.showVerified = searchParams.showVerified === 'true'
            if (!user || user.role!.name !== 'Admin') {
                searchParams.showVerified = true;
            }
        }

        if (searchParams && searchParams.isAlcoholic !== undefined) {
            searchParams.isAlcoholic = searchParams.isAlcoholic === 'false'
        }
        
        if (!page || page <= 0) {
            searchParams.page = 1;
        }
        searchParams.page!--;

        if (!quantity || quantity <= 0) {
            searchParams.quantity = 50;
        }
        const count = await this.drink.countByParams(searchParams)
        const drinkList = await this.drink.findByParams(searchParams)
        const response = {
            count,
            drinks: drinkList
        }
        return response
    }

    async create(userId: string, drinkData: CreateDrinkDto): Promise<UpdateDrinkDto> {
        let { categories, countries, ...createData } = drinkData
        if (!drinkData || !createData) {
            throw new BadRequestException('Para criar bebida precisa de informações')
        }
        if (!createData.name || createData.name.length === 0) {
            throw new BadRequestException('A bebida precisa de um nome')
        }
        if (!createData.ingredients || !Array.isArray(createData.ingredients) || createData.ingredients.length < 1) {
            throw new BadRequestException('A bebida precisa de uma lista de ingredientes')
        }
        if (!createData.preparation || createData.preparation.length <= 4) {
            throw new BadRequestException('A bebida precisa de um método de preparação')
        }
        if (!createData.time || createData.time as unknown as number < 1) {
            throw new BadRequestException('A bebida precisa de um tempo de preparo')
        }
        let validIngredients = []
        for (const ingredient of createData.ingredients) {
            if (ingredient && ingredient.length > 2) {
                validIngredients.push(ingredient)
            }
        }

        if (validIngredients.length === 0) {
            throw new BadRequestException('Ingredientes precisam ser uma lista de palavras');
        }

        createData.ingredients = validIngredients;
        createData.isAlcoholic = createData.isAlcoholic !== undefined ? createData.isAlcoholic : true;
        createData.picture = createData.picture !== undefined ? createData.picture : '';

        const validDifficulty = this.possibleDifficulties.find((difficulty) => difficulty === createData.difficulty)
        if (validDifficulty === undefined) {
            throw new BadRequestException('Dificuldade precisa ser \'EASY\' \'MEDIUM\' ou \'HARD\'')
        }
        const drink = await this.drink.create(userId, createData)

        if (categories && categories.length > 0) {
            this.handleRelations(drink.id!, this.categoriesService, categories)
        }

        if (countries && countries.length > 0) {
            this.handleRelations(drink.id!, this.countriesService, countries)
        }

        return drink
    }

    async update(drinkId: string, drinkData: UpdateDrinkDto, userId: string) {
        let { categories, countries, ...updateData } = drinkData
        
        const user = await this.usersService.findById(userId);
        const roleResult = await this.role.findOne(user!.role!.id);
        if (roleResult!.name === 'Customer') {
            updateData.isVerified = undefined;
        }

        if (updateData.name && updateData.name.length === 0) {
            throw new BadRequestException('A bebida precisa de um nome')
        }
        if (updateData.preparation && updateData.preparation.length <= 4) {
            throw new BadRequestException('A bebida precisa de um método de preparação')
        }
        if (updateData.time && updateData.time as unknown as number < 1) {
            throw new BadRequestException('A bebida precisa de um tempo de preparo')
        }
        if (updateData.ingredients) {
            if (!Array.isArray(updateData.ingredients) || updateData.ingredients.length < 1) {
                throw new BadRequestException('A bebida precisa de uma lista de ingredientes')
            }
            let validIngredients = []
            for (const ingredient of updateData.ingredients) {
                if (ingredient && ingredient.length > 2) {
                    validIngredients.push(ingredient)
                }
            }

            if (validIngredients.length === 0) {
                throw new BadRequestException('Ingredientes precisam ser uma lista de palavras');
            }

            updateData.ingredients = validIngredients;
        }

        if (updateData.isAlcoholic) {
            updateData.isAlcoholic = updateData.isAlcoholic !== undefined ? updateData.isAlcoholic : true;
        }
        if (updateData.picture) {
            updateData.picture = updateData.picture !== undefined ? updateData.picture : '';
        }

        if (updateData.difficulty) {
            const validDifficulty = this.possibleDifficulties.find((difficulty) => difficulty === updateData.difficulty)
            if (validDifficulty === undefined) {
                throw new BadRequestException('Dificuldade precisa ser \'EASY\' \'MEDIUM\' ou \'HARD\'')
            }
        }


        if (categories && categories.length > 0) {
            this.handleRelations(drinkId, this.categoriesService, categories)
        }

        if (countries && countries.length > 0) {
            this.handleRelations(drinkId, this.countriesService, countries)
        }
        
        const upDateddrink = await this.drink.update(drinkId, updateData)

        return upDateddrink;
    }

    async handleRelations(drinkId: string, relationService: CategoriesService | CountriesService, newRelationsList: Array<string>, currentRelationsList: Array<Category | Country> = []) {
        const allRelations = await relationService.find();
        let relationsToRemove: Array<string> = [], validRelations: Array<string> = [];

        for (const { id } of allRelations) {
            if (newRelationsList.length === 0) break;
            const validRelationIndex = newRelationsList.findIndex((newRelation) => newRelation === id)
            if (validRelationIndex !== -1) {
                validRelations.push(newRelationsList[validRelationIndex])
                newRelationsList.splice(validRelationIndex, 1)
            }
        }

        for (const { id } of currentRelationsList) {
            const alreadyAddedCategoryIndex = validRelations.findIndex((newRelation) => newRelation === id)
            if (alreadyAddedCategoryIndex !== -1) {
                validRelations.splice(alreadyAddedCategoryIndex, 1)
                continue;
            }
            relationsToRemove.push(id)
        }

        await this.addRelations(drinkId, relationService, validRelations)
        await this.removeRelations(drinkId, relationService, relationsToRemove)
    }

    async addRelations(drinkId: string, relationService: CategoriesService | CountriesService, relationsIdList: Array<string>) {
        const promisesList = [];
        for (const relationId of relationsIdList) {
            if (relationService instanceof CategoriesService) {
                promisesList.push(this.drink.addCountry(drinkId, relationId))
                continue;
            }
            promisesList.push(this.drink.addCategory(drinkId, relationId))
        }
        return Promise.all(promisesList)
    }

    async removeRelations(drinkId: string, relationService: CategoriesService | CountriesService, relationsIdList: Array<string>) {
        const promisesList = [];
        for (const relationId of relationsIdList) {
            if (relationService instanceof CategoriesService) {
                promisesList.push(this.drink.removeCountry(drinkId, relationId))
                continue;
            }
            promisesList.push(this.drink.removeCategory(drinkId, relationId))
        }
        return Promise.all(promisesList)
    }


    async findRandom(search: searchParamsDrink) {
        return this.drink.findRandomDrink(search);
    }
}
