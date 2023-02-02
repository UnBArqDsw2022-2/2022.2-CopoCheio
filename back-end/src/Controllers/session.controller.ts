import { Router, Request, Response, NextFunction } from 'express';
import SessionService from '../Services/session.service';

const router = Router();

router.post('/login', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        const userSession = await SessionService.login(body);
        res.status(200).send(userSession);
    } catch (error) {
        next(error)
    }

});

router.post('/login/admin', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        const userSession = await SessionService.loginAdmin(body);
        res.status(200).send(userSession);
    } catch (error) {
        next(error)
    }
});

export default router;
