import {Response} from 'express'

export default abstract class BaseController {
  error(e: Error, res: Response): void {
    console.error(e.message)
    res.status(400).send(e.message)
  }
}
