import { Request, Response, NextFunction } from 'express';

export const AuthRoleCheckMiddware = (roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (!roles.includes(req.role)) {
      return res.status(403).json({error : 'Não tem privilégios de acesso'});
    }
    return next();
  }
}