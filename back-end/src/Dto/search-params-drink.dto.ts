import { PartialType } from "@nestjs/mapped-types";
import { Difficulty } from "@prisma/client";
import { SearchParams } from "./search-params.dta";

export class searchParamsDrink extends PartialType(SearchParams){
    name?: string;

    categories?: string[];

    countries?: string[];

    isAlcoholic?: boolean;

    difficulty?: Difficulty;

    userId?: string;
}