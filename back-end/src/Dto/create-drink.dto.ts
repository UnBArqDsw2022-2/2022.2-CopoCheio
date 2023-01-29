import { Difficulty } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export class CreateDrinkDto {
    name: string;

    picture: string;

    time: Decimal;

    preparation: string;

    ingredients: Array<string>;

    isAlcoholic: boolean;

    difficulty: Difficulty;
    
    country?: Array<string>;
    
    category?: Array<string>;
}