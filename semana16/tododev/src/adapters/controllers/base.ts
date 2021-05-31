import {Response, RequestHandler} from 'express'
import {Model} from '../../models/base'
import {Handler} from '../../@types/global'

export interface Controller {
  model?: Model
  error: (error: Error, res: Response) => Promise<void>
}

export abstract class BaseController implements Controller {
  model?: Model

  constructor(model?: new () => Model) {
    this.model = model && new model()
  }

  handler: Handler<Model, 'db'> = async (res, operation, props) => {
    try {
      if (this.model) {
        const r = await this.model[operation](props?.args)
        res.status(props?.status || 200)
        Number(r) ? res.end() : res.send(this.countResults(r))
      }
    } catch (e) {
      this.error(e, res)
    }
  }

  countResults = (result: Record<string, unknown> | unknown) => ({
    count: Array.isArray(result) ? result.length : 1,
    results: result
  })

  abstract getAll: RequestHandler

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
