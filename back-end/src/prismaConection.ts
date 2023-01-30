import { PrismaClient } from "@prisma/client";

class Singleton {
    private static instance: PrismaClient;

    public static getInstance(): PrismaClient {
        if (!Singleton.instance) {
            Singleton.instance = new PrismaClient({ log: ['query', 'info', 'warn', 'error']});
        }

        return Singleton.instance;
    }
}

const prisma = Singleton.getInstance();

export default prisma