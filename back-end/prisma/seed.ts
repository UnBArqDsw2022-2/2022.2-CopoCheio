import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const adminRole = await prisma.role.upsert({
    where: { name: 'Admin' },
    update: {},
    create: {
      name: 'Admin'
    },
  })
  const customerRole = await prisma.role.upsert({
    where: { name: 'Customer' },
    update: {},
    create: {
      name: 'Customer'
    },
  })
  console.log({ adminRole, customerRole })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('Error disconnecting',e)
    await prisma.$disconnect()
    process.exit(1)
  })