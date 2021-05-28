import express, {Express, Router} from 'express'
import cors from 'cors'
import {indexRoute, actorsRoute, moviesRoute, pingRouter} from './routes'
import {ActorsController} from './controllers/actors'
import {Actors} from './models/actors'
import 'reflect-metadata'
import {AddressInfo} from 'net'

// export const app = express()

// app.use(express.json())
// app.use(cors())
// app.use('/', indexRoute)
// app.use('/actors', actorsRoute)
// app.use('/movies', moviesRoute)
// app.use('/ping', pingRouter)

interface Server {
  app: Express
}

export class SetupServer implements Server {
  app!: Express

  constructor(public port = 3000) {}

  async init(msg: string) {
    this.app = express()
    this.addMidleWares()
    this.addControllers()
    this.listen(msg)
  }

  addMidleWares() {
    this.app.use(cors())
    this.app.use(express.json())
  }

  listen(msg: string) {
    const server = this.app.listen(this.port, () => {
      if (!server) {
        console.log('Erro iniciando o server!'.red)
        return
      }

      console.log(`${msg}`.replace(/port/i, `PORT ${this.port}`).green)
    })
  }

  addControllers() {
    const actorsController = new ActorsController(Actors)
    const path = Reflect.getMetadata('path', actorsController)
    const [method, route] = Reflect.getOwnMetadata(
      'route',
      actorsController.getAll
    )
    console.log(path, method, route)

    const actorsRoute = Router()
    actorsRoute.get(route, actorsController.getAll)
    this.app.use(path, actorsRoute)
  }

  startControllers() {}

  startDatabase() {}
}
