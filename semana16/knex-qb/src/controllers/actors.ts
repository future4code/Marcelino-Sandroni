import {BaseController} from './base'
import {v4 as uuidv4} from 'uuid'
import {RequestHandler} from 'express'
import {Model} from '../models/base'
import {Control, Route} from '../@types/decorators'

@Control('/actors')
export class ActorsController extends BaseController {
  constructor(model: new () => Model) {
    super(model)
  }

  @Route()
  getAll: RequestHandler = async (_, res) => {
    this.handler(res, 'findAll')
  }

  @Route('put', ':id')
  update: RequestHandler = async (req, res) => {
    const {id} = req.params
    const {body} = req
    this.handler(res, 'update', {args: {...body, id}})
  }

  @Route('delete', ':id')
  delete: RequestHandler = async (req, res) => {
    const {id} = req.params
    this.handler(res, 'delete', {args: id})
  }

  @Route('get', 'search')
  search: RequestHandler = async (req, res) => {
    this.handler(res, 'findAll', {args: req.query})
  }

  @Route('get', ':id')
  getOne: RequestHandler = async (req, res) => {
    const {id} = req.params
    this.handler(res, 'findOne', {args: {id}})
  }

  @Route('post')
  create: RequestHandler = async (req, res) => {
    const {name, salary, birthDate: birth_date, gender} = req.body
    const id = uuidv4()
    const data = {
      id,
      name,
      salary,
      birth_date,
      gender
    }

    this.handler(res, 'save', {args: data, status: 201})
  }

  @Route('get', 'detail')
  detail: RequestHandler = async (req, res) => {
    this.handler(res, 'detail')
  }
}
