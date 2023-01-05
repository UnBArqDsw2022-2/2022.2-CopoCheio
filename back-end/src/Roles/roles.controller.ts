import { Router, Request, Response } from 'express';

import prisma from '../prismaConection';
import { Roles } from './roles.model';
import { JwtAuthMiddleware } from '../Middlewares/auth';

const router = Router();
const roles = new Roles(prisma.role)

router.get('/', async (req: Request,res: Response)=>{
    const allRoles = await roles.all()
    res.send(allRoles)
})

router.post('/', JwtAuthMiddleware, async (req: Request,res: Response)=>{
    const roleCreated = await roles.create(req.body)
    res.send(roleCreated)
})

router.put('/:id', JwtAuthMiddleware, async (req: Request,res: Response)=>{
    const roleId = req.headers.id as string
    const data = req.body
    const roleUpdated = await roles.update(data,roleId)
    res.send(roleUpdated)
})

export default router;