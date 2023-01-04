import { Roles } from '../src/Roles/roles.model'
import { prismaMock } from '../prisma/singleton'

const getAllMock = jest.spyOn(Roles.prototype, 'all')
const createMock = jest.spyOn(Roles.prototype, 'create')
const updateMock = jest.spyOn(Roles.prototype, 'update')

test('should create new role ', async () => {
    const roleMockData = {
        id: "9c0b623a-aca6-4caa-8d8e-bee8af4fa1ab",
        name: 'Admin'
    }

    prismaMock.role.create.mockResolvedValue(roleMockData)
    const role = new Roles(prismaMock.role)

    await expect(role.create({ name: 'Admin' })).resolves.toEqual({
        id: "9c0b623a-aca6-4caa-8d8e-bee8af4fa1ab",
        name: 'Admin'
    })
    expect(createMock).toHaveBeenCalled();
})

test('should update a Roles name ', async () => {
    const roleMockData = {
        id: "9c0b623a-aca6-4caa-8d8e-bee8af4fa1ab",
        name: 'Admin2'
    }

    prismaMock.role.update.mockResolvedValue(roleMockData)
    const role = new Roles(prismaMock.role)

    await expect(role.update({ name: 'Admin2' }, roleMockData.id)).resolves.toEqual(roleMockData)
    expect(updateMock).toHaveBeenCalled();

})

test('should get all roles', async () => {
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
    prismaMock.role.findMany.mockResolvedValue(roleMockData)
    const role = new Roles(prismaMock.role);
    await expect(role.all()).resolves.toEqual(roleMockData)
    expect(getAllMock).toHaveBeenCalled();
})