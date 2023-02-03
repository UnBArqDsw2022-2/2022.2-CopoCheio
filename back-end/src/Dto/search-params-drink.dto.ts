import { PartialType } from "@nestjs/mapped-types";
import { Difficulty } from "@prisma/client";
import { SearchParams } from "./search-params.dta";

export class searchParamsDrink extends PartialType(SearchParams){
    name?: string;

    categories?: Array<string>;

    countries?:  Array<string>;

    isAlcoholic?: boolean;

    difficulty?: Difficulty;

    userId?: string;

    showVerified?: string | boolean;
}