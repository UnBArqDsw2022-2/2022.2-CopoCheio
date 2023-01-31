import { Router, Request, Response, NextFunction } from 'express';

import { JwtAuthMiddleware } from '../Middlewares/auth';
import { AuthRoleCheckMiddware } from '../Middlewares/authRoleCheck';
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

router.get('/random', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const drink = await drinkService.findRandom(req.params);
        res.status(200).send(drink);
    } catch (error) {
        next(error)
    }
})

router.get('/favorites', JwtAuthMiddleware,async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.id;
        const allDrinks = await drinkService.findFavorites(userId);
        res.status(200).send(allDrinks);
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const drinkId = req.params.id;
        const drink = await drinkService.findById(drinkId);
        res.status(200).send(drink);
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

router.put('/:id',JwtAuthMiddleware, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const drinkId = req.params.id
        const userId = req.id

        const drinkData = req.body
        const updatedUser = await drinkService.update(drinkId,drinkData, userId)
        res.status(201).send(updatedUser)
    } catch (error) {
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