import { Router, Request, Response, NextFunction } from 'express';
import FavoriteService from '../Services/favorites.service';

const router = Router();

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = req.body;
    body.userId = req.id;
    await FavoriteService.favoriteDrink(body);
  } catch (error) {
    next(error);
  }
});