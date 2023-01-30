export class CreateUserDto {
    name: string;

    email: string;

    password: string;

    birthDate: Date;

    isAdmin?: boolean;

    roleId: string;
}
