import {BaseController} from './base'
import {ActorsModel} from '../models/actors'
import {v4 as uuidv4} from 'uuid'
import {Request, RequestHandler, Response, Router} from 'express'
import 'reflect-metadata'

type Props = {
  args?: Record<string, unknown> & any
  status?: number
}

type Handler = (
  res: Response,
  operations: keyof Omit<ActorsModel, 'actors'>,
  props?: Props
) => Promise<void>

const Get = (route: string) => (target: any, key: string) =>
  Reflect.defineMetadata('route', ['get', route], target[key])

const GetArrow = (route: string) => (target: any, key: string) => {
  // console.log(Reflect.getOwnMetadataKeys(target[key]))
  // Reflect.defineMetadata('route', route, target[key])
  // Reflect.
}

type AnyClass = new (...args: any[]) => any

const Control = (path: string) => (target: AnyClass) =>
  Reflect.defineMetadata('path', path, target.prototype)

@Control('/actors')
export class ActorsController extends BaseController {
  model: ActorsModel

  constructor(model: new () => ActorsModel) {
    super()
    this.model = new model()
  }

  handler: Handler = async (res, operation, props) => {
    try {
      const r = await this.model[operation](props?.args)
      res.status(props?.status || 200)
      Number(r) ? res.end() : res.send(this.countResults(r))
    } catch (e) {
      this.error(e, res)
    }
  }

  countResults = (result: Record<string, unknown> | unknown) => ({
    count: Array.isArray(result) ? result.length : 1,
    results: result
  })

  @Get('ma oee method')
  async test(req: Request, res: Response): Promise<void> {
    res.send('oi')
  }

  // @Get('/')
  // async getAll(_: Request, res: Response) {
  //   console.log(this)
  //   this.handler(res, 'findAll')
  // }

  @GetArrow('/')
  getAll: RequestHandler = async (_, res) => {
    console.log(this)
    this.handler(res, 'findAll')
  }

  update: RequestHandler = async (req, res) => {
    const {id} = req.params
    const {body} = req
    this.handler(res, 'update', {args: {...body, id}})
  }

  delete: RequestHandler = async (req, res) => {
    const {id} = req.params
    this.handler(res, 'delete', {args: id})
  }

  search: RequestHandler = async (req, res) => {
    this.handler(res, 'findAll', {args: req.query})
  }

  getOne: RequestHandler = async (req, res) => {
    const {id} = req.params
    this.handler(res, 'findOne', {args: {id}})
  }

  create: RequestHandler = async (req, res) => {
    try {
      const {name, salary, birthDate: birth_date, gender} = req.body
      const id = uuidv4()
      const data = {
        id,
        name,
        salary,
        birth_date,
        gender
      }

      await this.model.save(data)
      res.status(201).send('Criado!')
    } catch (e) {
      this.error(e, res)
    }
  }

  detail: RequestHandler = async (req, res) => {
    this.handler(res, 'detail')
  }
}
