import bcrypt from 'bcryptjs';
import moment from 'moment'

import { Users } from '../src/Models/users.model'
import { Roles } from '../src/Models/roles.model'

import { prismaMock } from '../prisma/singleton'
import { BadRequestException } from '../src/Middlewares/httpExceptions'
import UsersService from '../src/Services/users.service';

const roleMockData = [
    {
        id: "9c0b623a-aca6-4caa-8d8e-bee8af4fa1ab",
        name: 'Admin',
    },
    {
        id: "6fad9cf1-ed9b-4de3-bf0d-aca4b7a751ee",
        name: 'Customer',
    },
]

const getAllRolesMock = jest.spyOn(Roles.prototype, 'all').mockResolvedValue(roleMockData)
const getAllMock = jest.spyOn(Users.prototype, 'all')
const createMock = jest.spyOn(Users.prototype, 'create')
const findByEmailMock = jest.spyOn(Users.prototype, 'findByEmail')
const findByIdMock = jest.spyOn(Users.prototype, 'findById')
const updateMock = jest.spyOn(Users.prototype, 'update')
const saltMock = jest.spyOn(bcrypt, 'genSalt').mockImplementation((rounds, callback) => 'salt')
const hashMock = jest.spyOn(bcrypt, 'hash').mockImplementation((s, salt, callback = undefined) => '123456salt')

test('should find user by id', async () => {
    const userMockData = {
        id: "9c0b623a-aca6-4caa-8d8e-bee8af4fa1ab",
        email: "joao@fkmail.com",
        nameComplete: "Joao",
        password: '123',
        birthDate: moment("2023-01-04T03:21:09.000Z").toDate(),
        createdDate: moment("2023-01-04T03:21:09.000Z").toDate(),
        roleId: "9c0b623a-aca6-4caa-8d8e-bee8af4fa1ab",
        active: true
    }

    prismaMock.user.findUnique.mockResolvedValue(userMockData)
    const user = new Users(prismaMock.user)

    await expect(user.findById(userMockData.id)).resolves.toEqual({
        id: "9c0b623a-aca6-4caa-8d8e-bee8af4fa1ab",
        email: "joao@fkmail.com",
        nameComplete: "Joao",
        password: '123',
        birthDate: moment("2023-01-04T03:21:09.000Z").toDate(),
        createdDate: moment("2023-01-04T03:21:09.000Z").toDate(),
        roleId: "9c0b623a-aca6-4caa-8d8e-bee8af4fa1ab",
        active: true
    })
    expect(findByIdMock).toHaveBeenCalled();
})

test('should find user by email', async () => {
    const userMockData = {
        id: "9c0b623a-aca6-4caa-8d8e-bee8af4fa1ab",
        email: "joao@fkmail.com",
        nameComplete: "Joao",
        password: '123',
        birthDate: moment("2023-01-04T03:21:09.000Z").toDate(),
        createdDate: moment("2023-01-04T03:21:09.000Z").toDate(),
        roleId: "9c0b623a-aca6-4caa-8d8e-bee8af4fa1ab",
        active: true
    }

    prismaMock.user.findUnique.mockResolvedValue(userMockData)
    const user = new Users(prismaMock.user)

    await expect(user.findByEmail(userMockData.id)).resolves.toEqual({
        id: "9c0b623a-aca6-4caa-8d8e-bee8af4fa1ab",
        email: "joao@fkmail.com",
        nameComplete: "Joao",
        password: '123',
        birthDate: moment("2023-01-04T03:21:09.000Z").toDate(),
        createdDate: moment("2023-01-04T03:21:09.000Z").toDate(),
        roleId: "9c0b623a-aca6-4caa-8d8e-bee8af4fa1ab",
        active: true
    })
    expect(findByEmailMock).toHaveBeenCalled();
})

test('should find all users', async () => {
    const listUsers = [
        {
            id: "9c0b623a-aca6-4caa-8d8e-bee8af4fa1ab",
            email: "joao@fkmail.com",
            nameComplete: "Joao",
            password: '123',
            birthDate: moment("2023-01-04T03:21:09.000Z").toDate(),
            createdDate: moment("2023-01-04T03:21:09.000Z").toDate(),
            roleId: "9c0b623a-aca6-4caa-8d8e-bee8af4fa1ab",
            active: true
        },
        {
            id: "54e73e3a-a10d-491d-b475-9a6445987f3f",
            email: "teste@fkmail.com.com",
            nameComplete: "Teste da silva",
            password: '123',
            birthDate: moment("2023-01-04T03:21:09.000Z").toDate(),
            createdDate: moment("2023-01-04T03:21:09.000Z").toDate(),
            roleId: "9c0b623a-aca6-4caa-8d8e-bee8af4fa1ab",
            active: true
        }
    ]
    prismaMock.user.findMany.mockResolvedValue(listUsers)
    const user = new Users(prismaMock.user)

    await expect(user.all()).resolves.toEqual(listUsers)
    expect(getAllMock).toHaveBeenCalled();
})


test('should create new user ', async () => {
    const createData = {
        email: "joao@fkmail.com",
        name: "Joao2",
        password: "123456",
        birthDate: moment("2001-01-04T03:21:09.000Z").toDate(),

    }

    const createdUserMock = {
        id: "9c0b623a-aca6-4caa-8d8e-bee8af4fa1ab",
        email: "joao@fkmail.com",
        nameComplete: "Joao2",
        password: hashMock as unknown as string,
        birthDate: moment("2001-01-04T03:21:09.000Z").toDate(),
        createdDate: moment("2001-01-04T03:21:09.000Z").toDate(),
        roleId: "9c0b623a-aca6-4caa-8d8e-bee8af4fa1ab",
        active: true
    }

    prismaMock.user.create.mockResolvedValue(createdUserMock)
    const usersService = new UsersService();

    await expect(usersService.create(createData)).resolves.toEqual(createdUserMock)
    expect(createMock).toHaveBeenCalled();
    expect(saltMock).toHaveBeenCalled();
    expect(hashMock).toHaveBeenCalled();
})

test('should update a users name and password ', async () => {
    const userMock = {
        id: "9c0b623a-aca6-4caa-8d8e-bee8af4fa1ab",
        email: "joao@fkmail.com",
        nameComplete: "Joao2",
        password: hashMock as unknown as string,
        birthDate: moment("2023-01-04T03:21:09.000Z").toDate(),
        createdDate: moment("2023-01-04T03:21:09.000Z").toDate(),
        roleId: "9c0b623a-aca6-4caa-8d8e-bee8af4fa1ab",
        active: true
    }

    prismaMock.user.update.mockResolvedValue(userMock)
    const usersService = new UsersService();

    await expect(usersService.update({ name: "Joao2", password: '123456' }, userMock.id)).resolves.toEqual(userMock)
    expect(updateMock).toHaveBeenCalled();
    expect(saltMock).toHaveBeenCalled();
    expect(hashMock).toHaveBeenCalled();

})

test('should fail if user updates email that another user uses', async () => {
    const userMock = {
        id: "9c0b623a-aca6-4caa-8d8e-bee8af4fa1ab",
        email: "joao@fkmail.com",
        nameComplete: "Joao2",
        password: '12',
        birthDate: moment("2023-01-04T03:21:09.000Z").toDate(),
        createdDate: moment("2023-01-04T03:21:09.000Z").toDate(),
        roleId: "9c0b623a-aca6-4caa-8d8e-bee8af4fa1ab",
        active: true
    }

    prismaMock.user.findFirst.mockResolvedValue(userMock)
    const usersService = new UsersService();

    await expect(usersService.update({ email: "joao@fkmail.com", }, userMock.id)).rejects.toEqual(
        new BadRequestException('Email já registrado')
    )
})