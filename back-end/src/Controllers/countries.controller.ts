import { Router, Request, Response, NextFunction } from 'express';

import { JwtAuthMiddleware } from '../Middlewares/auth';
import CountriesService from '../Services/countries.service';

const router = Router();
const countriesService = new CountriesService();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name } = req.query;
        const countries = await countriesService.find(name as string | undefined);
        res.status(200).send(countries)
    } catch (error) {
        next(error)
    }
})

router.post('/', JwtAuthMiddleware, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const countryData = req.body;
        const country = await countriesService.create(countryData);
        res.status(201).send(country)
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', JwtAuthMiddleware, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const countryId = req.params.id
        await countriesService.delete(countryId)
        res.status(204)
    } catch (error) {
        next(error)
    }
})

export default router;