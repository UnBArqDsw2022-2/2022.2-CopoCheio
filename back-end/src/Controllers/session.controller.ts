import { Router, Request, Response } from 'express';
import SessionService  from '../Services/session.service';

const router = Router();

router.post('/login', async (req: Request, res: Response) => {
    const token = await SessionService.login(req.body);
    res.status(200).send({token});
});

export default router;
