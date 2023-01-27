import { Prisma } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

import prisma from '../prismaConection';

export const retryConnection = (currentTry: number = 0, numberTries: number = 3, waitTime: number = 1000): void => {
    console.log('Trying to connect to database:', currentTry + 1);
    prisma.$connect().catch(async (error) => {
        if (currentTry >= numberTries) {
            console.log("Couldn't connect to database, exiting...")
            process.exit(1)
        }
        console.log(`Connection failed trying again in ${waitTime}ms`, error)
        await setTimeout(() => {
            retryConnection(currentTry + 1, numberTries, waitTime)
        }, waitTime)
    })
}

export const retryConnectionHandler = (
    error: Prisma.PrismaClientInitializationError | Prisma.PrismaClientRustPanicError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (error instanceof Prisma.PrismaClientInitializationError) {
        retryConnection(0, 3, 1000)
    }

    if (error instanceof Prisma.PrismaClientRustPanicError) {
        console.log('Something went wrong with Prisma', error);
        process.exit(1)
    }

    next(error);
}

export const prismaErrorsHandler = (
    error: Prisma.PrismaClientKnownRequestError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        const code = error.code
        const targetList = error.meta?.target as Array<string> || []
        let errorMessage = prismaGeneralErrorMessages[code]

        targetList.forEach((value, index) => {            
            errorMessage = errorMessage.replace(`:target0`, value)
        });

        res.header("Content-Type", 'application/json')
        res.status(400).send({
            prismaError: code,
            error: errorMessage
        })
    }
    next(error);
}

interface errorMap {
    [code: string]: string
}

export const prismaGeneralErrorMessages: errorMap = {
    P1008: "Não tivemos resposta dentro de :target0",
    P2000: "Dado grande demais para gravar na ':target0'",
    P2002: "Esse valor do ':target0' já existe no banco e não pode ser repetido",
    P2005: "O valor ':target0' não pode ser atribuido a :target1",
    P2011: "':target0' não pode ser nulo"
}