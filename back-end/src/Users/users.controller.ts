import { PrismaClient } from '@prisma/client';
import { Router, Request, Response } from 'express';

import { Users } from './users.model';

const router = Router();
const prisma = new PrismaClient()
const users = new Users(prisma.user)

router.get('/',async (req: Request,res: Response)=>{
    const allUsers = await users.all()
    res.status(200).send(allUsers)
})

router.get('/:id',async (req: Request,res: Response)=>{
    const userId = req.params.id
    const allUsers = await users.findById(userId)
    res.status(200).send(allUsers)
})

router.post('/',async (req: Request,res: Response)=>{
    const userData = req.body;
    const user = await users.create(userData);
    res.status(201).send(user)
})

router.put('/:id',async (req: Request,res: Response)=>{
    const userId = req.params.id
    const userData = req.body
    const updatedUser = await users.update(userData,userId)
    res.status(201).send(updatedUser)
})

router.delete('/:id',async (req: Request,res: Response)=>{
    const userId = req.params.id
    await users.update({active:false},userId)
    res.status(204)
})

export default router;