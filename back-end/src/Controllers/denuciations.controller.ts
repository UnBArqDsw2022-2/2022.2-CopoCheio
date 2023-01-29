import { Router, Request, Response, NextFunction } from 'express';

import DenuciationService from '../Services/denuciations.service';
import { BadRequestException } from '../Middlewares/httpExceptions';

const router = Router();

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = req.body;
    body.userId = req.id;
    const denuciation = DenuciationService.create(body);
    return res.status(201).json(denuciation);
  } catch (error) {
    next(error);
  }
}); 

router.put('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = req.body;

    if (body.id === null)
      throw new BadRequestException('Id is null');

    const denuciation = DenuciationService.update(body);
    return res.status(200).json(denuciation);
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    
    return res.status(200).json('');
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await DenuciationService.delete(req.params.id);
    return res.status(200);
  } catch (error) {
    next(error);
  }
});