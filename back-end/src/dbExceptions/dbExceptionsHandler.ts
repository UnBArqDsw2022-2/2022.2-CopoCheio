import { Prisma } from "@prisma/client";
import { NextFunction, Request, Response  } from "express";

import prisma from '../prismaConection';

export const retryConnection = (currentTry:number=0, numberTries:number=3, waitTime:number=1000): void =>{
    console.log('Trying to connect to database:',currentTry+1);
    prisma.$connect().catch(async(error)=>{
        if (currentTry >= numberTries) {
            console.log("Couldn't connect to database, exiting...")
            process.exit(1)
        }
        console.log(`Connection failed trying again in ${waitTime}ms`,error)
        await setTimeout(()=>{
            retryConnection(currentTry+1,numberTries,waitTime)
        },waitTime)
    })
}

export const retryConnectionHandler = (
    error: Prisma.PrismaClientInitializationError | Prisma.PrismaClientRustPanicError,
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
    if (error instanceof Prisma.PrismaClientInitializationError) {
        retryConnection(0,3,1000)
    }

    if (error instanceof Prisma.PrismaClientRustPanicError) {
        console.log('Something went wrong with Prisma',error);
        process.exit(1)
    }

    next();
}

