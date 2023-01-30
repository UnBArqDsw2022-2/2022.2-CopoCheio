import { Router, Request, Response, NextFunction } from 'express';

import { JwtAuthMiddleware } from '../Middlewares/auth';
import FavoriteService from '../Services/favorites.service';

const router = Router();

router.post('/', JwtAuthMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = req.body;
    body.userId = req.id;
    await FavoriteService.favoriteDrink(body);
    res.status(201).send();
  } catch (error) {
    next(error);
  }
});

export default router;