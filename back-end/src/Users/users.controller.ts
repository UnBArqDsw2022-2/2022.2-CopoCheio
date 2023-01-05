import { Router, Request, Response } from 'express';

import prisma from '../prismaConection';
import { Users } from './users.model';

import { JwtAuthMiddleware } from '../Middlewares/auth';

const router = Router();
const users = new Users(prisma.user)

router.get('/', JwtAuthMiddleware, async (req: Request,res: Response)=>{
    const allUsers = await users.all()
    res.status(200).send(allUsers)
})

router.get('/:id', JwtAuthMiddleware, async (req: Request,res: Response)=>{
    const userId = req.params.id
    const allUsers = await users.findById(userId)
    res.status(200).send(allUsers)
})

router.post('/', async (req: Request,res: Response)=>{
    const userData = req.body;
    const user = await users.create(userData);
    res.status(201).send(user)
})

router.put('/:id', JwtAuthMiddleware, async (req: Request,res: Response)=>{
    const userId = req.params.id
    const userData = req.body
    const updatedUser = await users.update(userData, userId)
    res.status(201).send(updatedUser)
})

router.delete('/:id', JwtAuthMiddleware, async (req: Request,res: Response)=>{
    const userId = req.params.id
    await users.update({active:false}, userId)
    res.status(204)
})

export default router;