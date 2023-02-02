

import { Country } from '@prisma/client'

import Prisma from "../prismaConection";
import { Countries as CountryModel } from "../Models/countries.model";
import { BadRequestException } from "../Middlewares/httpExceptions";

import { CreateCountryDto } from '../Dto/create-country.dto';

export default class CountriesService {
    country: CountryModel
    constructor() {
        this.country = new CountryModel(Prisma.country);
    }

    async create(categoryData: CreateCountryDto): Promise<Country> {
        if(!categoryData || !categoryData.name || categoryData.name.length === 0){
            throw new BadRequestException('Paises tem que ter um nome');
        }
        return this.country.create(categoryData);
    }

    async find(name?: string): Promise<Country[]>{
        return this.country.findByName(name || '');
    }

    async delete(categoryId: string): Promise<Country> {
        return this.country.delete(categoryId)
    }

}