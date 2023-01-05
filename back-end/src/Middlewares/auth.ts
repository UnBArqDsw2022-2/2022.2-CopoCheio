import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import authConfig from '../Config/auth';

export const JwtAuthMiddleware = async(req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'Token not provided' });
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = jwt.verify(token, authConfig.secret!) as any;
        req.id = decoded.id;
        return next();
    } catch(err) {
        return res.status(403).json({ error: 'Token invalid' });
    }
}
