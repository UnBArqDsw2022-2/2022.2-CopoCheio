import { Router, Request, Response, NextFunction } from 'express';

import prisma from '../prismaConection';
import { Users } from '../Models/users.model';

import { JwtAuthMiddleware } from '../Middlewares/auth';

const router = Router();
const users = new Users(prisma.user)

router.get('/', async (req: Request,res: Response,next:NextFunction)=>{
    try {
        const allUsers = await users.all()
        res.status(200).send(allUsers)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', JwtAuthMiddleware, async (req: Request,res: Response,next:NextFunction)=>{
    try {
        const userId = req.params.id
        const allUsers = await users.findById(userId)
        res.status(200).send(allUsers)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req: Request,res: Response,next:NextFunction)=>{
    try {
        const userData = req.body;
        const user = await users.create(userData);
        res.status(201).send(user)
    } catch (error) {
        next(error)
    }
})

router.put('/:id', async (req: Request,res: Response,next:NextFunction)=>{
    try {
        const userId = req.params.id
        const userData = req.body
        const updatedUser = await users.update(userData, userId)
        res.status(201).send(updatedUser)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

router.delete('/:id', JwtAuthMiddleware, async (req: Request,res: Response,next:NextFunction)=>{
    try{
        const userId = req.params.id
        await users.update({active:false}, userId)
        res.status(204)
    }catch(error){
        next(error)
    }
})

export default router;