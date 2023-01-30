import { NextFunction, Request, Response } from "express"

// generic handler
export const failSafeHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error)
}