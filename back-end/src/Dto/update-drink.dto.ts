import { PartialType } from "@nestjs/mapped-types";
import { CreateDrinkDto } from "./create-drink.dto";

export class UpdateUserDto extends PartialType(CreateDrinkDto) {
    id?: string;
    isVerfied?: boolean;
}
