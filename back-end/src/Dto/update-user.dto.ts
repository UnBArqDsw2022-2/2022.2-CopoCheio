import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";
import { CreateRoleDto } from "./create-role.dto";
import { Role } from "@prisma/client";

export class UpdateUserDto extends PartialType(CreateUserDto) {
    id?: string;
    active?: boolean;
    password?: string;
    role?: Role;
}
