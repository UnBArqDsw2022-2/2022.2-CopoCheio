import { NextFunction, Request, Response } from "express"

export const HttpExceptionHandler = (
    error: HttpException,
    req: Request,
    res: Response,
    next: NextFunction
) => {

    if (error instanceof HttpException) {
        const status = error.statusCode || 400
        res.header("Content-Type", 'application/json')
        res.status(status).send({ error: error.message })
    }

    next(error)
}

export class HttpException extends Error {
    statusCode: number

    constructor(statusCode: number, message: string) {
        super(message)

        Object.setPrototypeOf(this, new.target.prototype)
        this.name = Error.name
        this.statusCode = statusCode
        Error.captureStackTrace(this)
    }
}

export class BadRequestException extends HttpException {
    constructor(message: string) {
        super(400, message)
    }
}

export class UnauthorizedRequestException extends HttpException {
    constructor(message: string) {
        super(401, message)
    }
}

export class ForbiddenRequestException extends HttpException {
    constructor(message: string) {
        super(403, message)
    }
}

export class NotFoundRequestException extends HttpException {
    constructor(message: string) {
        super(404, message)
    }
}
