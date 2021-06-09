import express, {Express, Router} from 'express'
import {MetaProps} from '@/@types/global'
import {Controller} from '@/adapters/controllers/base'
import cors from 'cors'
import {errorHandler} from '@/utils/error'

type ItemOrList<T> = T | T[]

interface Server {
  init: (message: string) => Promise<void>
  listen: (message: string) => void
  addControllers: (controllers: ItemOrList<Controller>) => Server
  setupController: () => void
  setupDatabase: () => void
}

export class ExpressServer implements Server {
  protected app: Express
  protected controllers: Controller[]

  constructor(public port = 4000) {
    this.app = express()
    this.controllers = []
  }

  async init(message: string): Promise<void> {
    try {
      this.setupMiddlewares()
      this.setupController()
      this.setupDatabase()
      this.listen(message)
    } catch (e) {
      const list: string = e.stack
      const secondLineStart = list.indexOf('\n') + 1
      const secondLineEnd = list.indexOf('\n', secondLineStart)
      const location = e.stack
        .slice(secondLineStart, secondLineEnd)
        .trim()
        .slice(3)
        .replace(/\(.*\/(?!=\/)/, '')
        .replace(')', '')
      console.log(`ERRO BRABU!`.yellow)
      console.log(`${e.message} => ${location}`.red)
    }
  }

  listen(message: string): void {
    this.app.listen(this.port, () => console.log(message))
  }

  setupMiddlewares(): void {
    this.app.use(express.json())
    this.app.use(cors())
    this.app.use(express.static('public/app/dist'))
    this.app.use(errorHandler)
  }

  addControllers(controllers: ItemOrList<Controller>): Server {
    if (Array.isArray(controllers)) {
      this.controllers = [...this.controllers, ...controllers]
      return this
    }
    this.controllers.push(controllers)
    return this
  }

  setupController(): void {
    if (!this.controllers.length) throw new Error('No Controllers')

    this.controllers.forEach((controller: Controller) => {
      const router = Router()
      const path = '/api' + Reflect.getMetadata('path', controller)
      const routes: MetaProps<Controller>[] = Reflect.getMetadata(
        'routes',
        controller
      )
      routes.forEach(([method, route, operation]) =>
        router[method](route, controller[operation])
      )

      this.app.use(path, router)
    })
  }

  setupDatabase(): void {
    console.log('implement')
  }

  get App(): Express {
    return this.app
  }
}
