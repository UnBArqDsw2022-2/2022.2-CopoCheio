import { Router, Request, Response, NextFunction } from 'express';

import prisma from '../prismaConection';
import { Roles } from '../Models/roles.model';

const router = Router();
const roles = new Roles(prisma.role)

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const allRoles = await roles.all()
        res.send(allRoles)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const roleCreated = await roles.create(req.body)
        res.send(roleCreated)
    } catch (error) {
        next(error)
    }
})

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const roleId = req.headers.id as string
        const data = req.body
        const roleUpdated = await roles.update(data, roleId)
        res.send(roleUpdated)
    } catch (error) {
        next(error)
    }
})

export default router;