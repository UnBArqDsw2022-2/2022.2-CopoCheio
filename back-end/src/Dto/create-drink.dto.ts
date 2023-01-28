export class CreateDrinkDto {
    name: string;

    picture: string;

    time: number;

    preparation: string;

    ingredients: Array<string>;

    isAlcoholic: boolean;

    difficulty: string;
    
    country?: Array<string>;
    
    category?: Array<string>;
}
