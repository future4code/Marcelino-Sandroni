import {RequestHandler} from '@src/server'
import BaseController from './base'
import {Users, UsersModel} from '../models/users'
import {Response} from 'express'
import {Fn, Props} from '@src/@types/global'

export class UserController extends BaseController {
  user: UsersModel

  constructor() {
    super()
    this.user = new Users()
  }

  async execute<T extends Fn<any>>(
    res: Response,
    operation: T,
    props?: Props<T>
  ) {
    try {
      const r = await operation(props?.args)
      res.status(props?.status || 200).send(r)
    } catch (e) {
      this.error(e, res)
    }
  }

  verifyArgs: RequestHandler = (req, res, next) => {
    const {
      url,
      method,
      query,
      params: {id}
    } = req

    if (query.length) {
      const r = Object.keys(query).every((q) => q.toLowerCase() in User)
      if (!r) throw new Error('Wrong query keys')
    }
  }

  create: RequestHandler = (req, res) =>
    this.execute(res, this.user.save, {args: req.body, status: 201})

  getAll: RequestHandler = (_, res) => {
    console.log(this.user.getAll())
    this.execute(res, this.user.getAll)
  }

  findById: RequestHandler = (req, res) => {
    this.execute(res, this.user.findById, {args: req.params.id})
  }

  search: RequestHandler = (req, res) =>
    this.execute(res, this.user.findOne, {args: req.query})

  update: RequestHandler = (req, res) =>
    this.execute(res, this.user.update, {
      args: {
        id: req.params.id,
        req.body
      }
    })

  delete: RequestHandler = (req, res) =>
    this.execute(res, this.user.delete, {args: req.params.id})
}
