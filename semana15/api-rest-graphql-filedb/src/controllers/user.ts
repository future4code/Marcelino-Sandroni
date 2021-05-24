import {RequestHandler} from '@src/server'
import BaseController from './base'
import {Users} from '../models/users'

export class UserController extends BaseController {
  create: RequestHandler = (req, res) => {
    try {
      const user = new Users(req.body)
      res.status(201)
    } catch (e) {
      this.error(e, res)
    }
  }

  getAll: RequestHandler = (_, res) => {
    try {
      const users = User.find()
    } catch (e) {
      this.error(e, res)
    }
  }
}
