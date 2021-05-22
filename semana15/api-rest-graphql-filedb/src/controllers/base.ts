import {RequestHandler} from 'express'
import {Response} from 'express-serve-static-core'

export default abstract class BaseController {
  handler: RequestHandler = async (req, res, next) => {
    try {
      this.execute(req, res, next)
    } catch (e) {
      this.error(e, res)
    }
  }

  abstract execute: RequestHandler

  error(e: Error, res: Response): void {
    console.log({e})
    res.status(400).send(e.message)
  }
}
