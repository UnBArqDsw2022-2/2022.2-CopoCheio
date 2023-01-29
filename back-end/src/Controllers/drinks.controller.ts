import { Router, Request, Response, NextFunction } from 'express';

import { JwtAuthMiddleware } from '../Middlewares/auth';
import DrinkService from '../Services/drink.service';

const router = Router();
const drinkService = new DrinkService();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const searchParams = req.query
        const allDrinks = await drinkService.findByParams(searchParams)
        res.status(200).send(allDrinks)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', JwtAuthMiddleware, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.id
        const allUsers = await drinkService.findByParams({})
        res.status(200).send(allUsers)
    } catch (error) {
        next(error)
    }
})

router.post('/', JwtAuthMiddleware,async (req: Request, res: Response, next: NextFunction) => {
    try {
        const drinkData = req.body;
        const userId = req.id
        const user = await drinkService.create(userId,drinkData);
        res.status(201).send(user)
    } catch (error) {
        next(error)
    }
})

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const drinkId = req.params.id
        const userId = req.id

        const drinkData = req.body
        const updatedUser = await drinkService.update(drinkId,drinkData, userId)
        res.status(201).send(updatedUser)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

router.delete('/:id', JwtAuthMiddleware, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.id
        res.status(204)
    } catch (error) {
        next(error)
    }
})

export default router;