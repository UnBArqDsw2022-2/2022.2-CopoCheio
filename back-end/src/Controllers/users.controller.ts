import { Router, Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import prisma from '../prismaConection';
import { Users } from '../Models/users.model';

import { JwtAuthMiddleware } from '../Middlewares/auth';
import { AuthRoleCheckMiddware } from '../Middlewares/authRoleCheck';
import UsersService from '../Services/users.service';

const router = Router();
const users = new Users(prisma.user);
const usersService = new UsersService();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        let userId = undefined
        const authHeader = req.headers.authorization;
        if (authHeader) {
            const [token] = authHeader.split(' ');
            try {   
                const decoded = jwt.verify(token, process.env.JWT_SECRET ?? 'secret') as any;
                userId = decoded.id;
            } catch (error) {        
                // do nothing
            }
        }
        const searchParams = req.query;       
        const allUsers = await usersService.findByParams(searchParams,userId)
        res.status(200).send(allUsers)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', JwtAuthMiddleware, AuthRoleCheckMiddware(["Admin", "Customer"]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.id
        const user = await users.findById(userId)
        res.status(200).send(user)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userData = req.body;
        const user = await usersService.create(userData);
        res.status(201).send(user)
    } catch (error) {
        next(error)
    }
})

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.id
        const userData = req.body
        const updatedUser = await usersService.update(userData, userId)
        res.status(201).send(updatedUser)
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', JwtAuthMiddleware, AuthRoleCheckMiddware(["Admin"]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.id
        await users.update({ active: false }, userId)
        res.status(204)
    } catch (error) {
        next(error)
    }
})

export default router;