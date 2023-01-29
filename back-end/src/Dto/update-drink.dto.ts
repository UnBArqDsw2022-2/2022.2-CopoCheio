import { PartialType } from "@nestjs/mapped-types";
import { CreateDrinkDto } from "./create-drink.dto";

export class UpdateDrinkDto extends PartialType(CreateDrinkDto) {
    id?: string;
    isVerfied?: boolean;
}
