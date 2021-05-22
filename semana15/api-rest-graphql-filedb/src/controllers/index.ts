import BaseController from './base'
import {RequestHandler} from 'express'

export class IndexController extends BaseController {
  constructor() {
    super()
  }

  test: () => void = () => console.log('oi')

  execute: RequestHandler = async (req, res) => {
    const {url} = req
    res.send(`oi from ${url}`)
  }
}
