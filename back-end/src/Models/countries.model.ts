import { Country } from '@prisma/client'

import Prisma from '../prismaConection';

import { CreateCountryDto } from '../Dto/create-country.dto';

export class Countries {
    constructor(private readonly prismaCountry: typeof Prisma['country']) { }

    async findByName(name: string): Promise<Country[]> {
        return this.prismaCountry.findMany({
            where: {
                name: {
                    contains: name,
                    mode: 'insensitive'
                }
            }
        });
    }

    async create(countryData: CreateCountryDto): Promise<Country> {
        return this.prismaCountry.create({
            data: countryData
        });
    }

    async delete(countryId: string): Promise<Country> {
        return this.prismaCountry.delete({
            where: {
                id: countryId
            }
        })
    }
}