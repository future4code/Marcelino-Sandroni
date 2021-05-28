import {Response} from 'express'

export abstract class BaseController {
  async error(error: Error, res: Response) {
    console.error(error.message)
    res.send(error.message)

    const errorData = {
      ...error,
      time: new Date()
    }
    console.log(errorData)

    // await log.insert(errorData)
  }
}
