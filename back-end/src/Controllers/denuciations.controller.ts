import { Router, Request, Response, NextFunction } from 'express';

import DenuciationService from '../Services/denuciations.service';
import { JwtAuthMiddleware } from '../Middlewares/auth';
import { BadRequestException } from '../Middlewares/httpExceptions';

const router = Router();

router.post('/', JwtAuthMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = req.body;
    body.userId = req.id;
    const denuciation = await DenuciationService.create(body);
    res.status(201).json(denuciation);
  } catch (error) {
    next(error);
  }
}); 

router.put('/', JwtAuthMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = req.body;

    if (body.id === null)
      throw new BadRequestException('Id is null');

    const denuciation = await DenuciationService.update(body);
    res.status(200).json(denuciation);
  } catch (error) {
    next(error);
  }
});

router.get('/', JwtAuthMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const list = await DenuciationService.findAll();
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', JwtAuthMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await DenuciationService.findOne(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', JwtAuthMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  try {
    await DenuciationService.delete(req.params.id);
    res.status(200);
  } catch (error) {
    next(error);
  }
});

export default router;