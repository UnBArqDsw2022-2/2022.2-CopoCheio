import { Category, Country } from "@prisma/client";
import Prisma from "../prismaConection";

import { BadRequestException } from "../Middlewares/httpExceptions";
import { Drinks as DrinkModel } from "../Models/drinks.model";
import CategoriesService from "./categories.service";
import CountriesService from "./countries.service";

import { UpdateDrinkDto } from "../Dto/update-drink.dto";
import { CreateDrinkDto } from '../Dto/create-drink.dto';
import { searchParamsDrink } from "../Dto/search-params-drink.dto";

export default class DrinksService {
    private readonly drink: DrinkModel
    private readonly categoriesService: CategoriesService
    private readonly countriesService: CountriesService
    constructor() {
        this.drink = new DrinkModel(Prisma.drink,Prisma.categoriesOnDrinks,Prisma.countriesOnDrinks);
        this.categoriesService = new CategoriesService();
        this.countriesService = new CountriesService();
    }
    async findByParams(searchParams: searchParamsDrink) {
        return this.drink.findByParams(searchParams)
    }

    async create(userId: string, drinkData: CreateDrinkDto): Promise<UpdateDrinkDto> {
        const { categories, countries, ...createData } = drinkData
        
        const drink = await this.drink.create(userId,createData)

        if (categories && categories.length > 0) {
            this.handleRelations(drink.id!, this.categoriesService, categories)
        }

        if (countries && countries.length > 0) {
            this.handleRelations(drink.id!, this.countriesService, countries)
        }

        return drink
    }

    async update(drinkId: string, drinkData: UpdateDrinkDto, userId: string) {
        const { categories, countries, ...updateData } = drinkData
        
        if (categories && categories.length > 0) {
            this.handleRelations(drinkId, this.categoriesService, categories)
        }

        if (countries && countries.length > 0) {
            this.handleRelations(drinkId, this.countriesService, countries)
        }

        const upDateddrink = await this.drink.update(drinkId, updateData)

        return upDateddrink;
    }

    async handleRelations(drinkId: string, relationService: CategoriesService|CountriesService , newRelationsList: Array<string>, currentRelationsList: Array<Category | Country> = []) {
        const allRelations = await relationService.find();
        let relationsToRemove: Array<string> = [], validRelations: Array<string> =[];

        for (const { id } of allRelations) {
            if (newRelationsList.length === 0) break;
            const validRelationIndex = newRelationsList.findIndex((newRelation) => newRelation === id)
            if (validRelationIndex !== -1) {
                validRelations.push(newRelationsList[validRelationIndex])
                newRelationsList.splice(validRelationIndex,1)
            }
        }

        for (const { id } of currentRelationsList) {
            const alreadyAddedCategoryIndex = validRelations.findIndex((newRelation) => newRelation === id)
            if (alreadyAddedCategoryIndex !== -1) {
                validRelations.splice(alreadyAddedCategoryIndex,1)
                continue;
            }
            relationsToRemove.push(id)
        }

        await this.addRelations(drinkId,relationService,validRelations)
        await this.removeRelations(drinkId,relationService,relationsToRemove)
    }

    async addRelations(drinkId: string, relationService: CategoriesService|CountriesService, relationsIdList: Array<string>) {
        const promisesList = [];
        for (const relationId of relationsIdList) {
            if (relationService instanceof CategoriesService) {
                promisesList.push(this.drink.addCountry(drinkId,relationId))
                continue;
            }
            promisesList.push(this.drink.addCategory(drinkId,relationId))
        }
        return Promise.all(promisesList)
    }

    async removeRelations(drinkId: string, relationService: CategoriesService|CountriesService, relationsIdList: Array<string>) {
        const promisesList = [];
        for (const relationId of relationsIdList) {
            if (relationService instanceof CategoriesService) {
                promisesList.push(this.drink.removeCountry(drinkId,relationId))
                continue;
            }
            promisesList.push(this.drink.removeCategory(drinkId,relationId))
        }
        return Promise.all(promisesList)
    }

}