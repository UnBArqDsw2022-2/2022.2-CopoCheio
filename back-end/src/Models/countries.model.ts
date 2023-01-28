import Prisma from '../prismaConection';
import { Country } from '@prisma/client'
import { CreateCountryDto } from '../Dto/create-country.dto';

export class Countries {
    constructor(private readonly prismaCountry: typeof Prisma['country']) { }

    async all(): Promise<Country[]> {
        return this.prismaCountry.findMany();
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