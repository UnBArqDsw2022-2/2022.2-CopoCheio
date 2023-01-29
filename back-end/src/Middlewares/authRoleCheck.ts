import { Request, Response, NextFunction } from 'express';

export const AuthRoleCheckMiddware = (roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (!roles.includes(req.role))
      res.status(403).json({error : 'I don\'t have privileges to access.'});
    return next();
  }
}