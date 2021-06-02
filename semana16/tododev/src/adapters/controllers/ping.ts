import {BaseController} from './base'
import {Control, Route} from 'src/@types/decorators'
import {RequestHandler} from 'express'

@Control('/ping')
export class PingController extends BaseController {
  @Route()
  getAll: RequestHandler = (_, res) => {
    const random = Math.random() * 100
    if (random > 50) throw new Error('maior que 50')
    res.status(200).send(random > 50 ? 'Ping!' : 'Pong!')
  }
}
