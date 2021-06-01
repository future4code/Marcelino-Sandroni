import {NextFunction, Request, Response} from 'express'

export class ApiError {
  constructor(public code: number, public message: string) {}

  static badRequest(message?: string): ApiError {
    return new ApiError(404, message || 'Not found')
  }
}

export const errorHandler = (
  error: Error | ApiError,
  _: Request,
  res: Response
): void => {
  if (error instanceof ApiError) {
    res.status(error.code).send(error.message)
  } else {
    res.status(500).send('unknown error')
  }
}
