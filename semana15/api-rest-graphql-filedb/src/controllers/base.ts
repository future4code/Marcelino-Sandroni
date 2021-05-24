import {Response} from 'express'

export default abstract class BaseController {
  error(e: Error, res: Response): void {
    console.log({e})
    res.status(400).send(e.message)
  }
}
