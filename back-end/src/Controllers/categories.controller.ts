import { Router, Request, Response, NextFunction } from 'express';

import { JwtAuthMiddleware } from '../Middlewares/auth';
import CategoriesService from '../Services/categories.service';

const router = Router();
const categoriesService = new CategoriesService();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name } = req.query;
        const allCategories = await categoriesService.find(name as string | undefined);
        res.status(200).send(allCategories)
    } catch (error) {
        next(error)
    }
})

router.post('/', JwtAuthMiddleware, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const categoryData = req.body;
        const category = await categoriesService.create(categoryData);
        res.status(201).send(category)
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', JwtAuthMiddleware, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const categoryId = req.params.id
        await categoriesService.delete(categoryId)
        res.status(204)
    } catch (error) {
        next(error)
    }
})

export default router;