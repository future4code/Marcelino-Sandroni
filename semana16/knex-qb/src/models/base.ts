import {Response} from 'express'
import {connection} from '../database/connection'
const log = connection('log')

export abstract class BaseModel {
  // abstract execute: () => Promise<void>

  async error(error: Error, res: Response) {
    console.error(error.message)
    res.send(error.message)

    const errorData = {
      ...error,
      time: new Date()
    }

    // await log.insert(errorData)
  }
}
