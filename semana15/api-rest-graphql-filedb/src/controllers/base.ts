import express, {Express, NextFunction, Request, Response} from 'express'

type RequestBase<T> = (req: Request, res: Response, next: NextFunction) => T

type RequestHandler = RequestBase<Promise<void>>

type RequestContainer = RequestBase<void>

export default abstract class BaseController {
  protected readonly app

  constructor() {
    this.app = express()
    this.app.get('/', (req, res, next) => {
      console.log('oi')
      res.send('oi')
      next()
    })
  }

  requestContainer: RequestContainer = async (req, res, next) => {
    try {
      this.requestHandler(req, res, next)
    } catch (e) {
      this.error(e)
    }
  }

  abstract requestHandler(Request, Response, Next): void

  error(e: Error) {
    console.log({e})
  }
}
