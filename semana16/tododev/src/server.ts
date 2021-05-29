import express, {Express} from 'express'

interface Server {
  init: (message: string) => Promise<void>
  listen: (message: string) => void
  addControllers: () => void
  setupController: () => void
  setupDatabase: () => void
}

export class SetupServer implements Server {
  protected app: Express

  constructor(public port = 3000) {
    this.app = express()
  }

  async init(message: string): Promise<void> {
    this.addControllers()
    this.setupController()
    this.setupDatabase()
    this.listen(message)
    Promise.resolve(10)
  }

  listen(message: string): void {
    this.app.listen(this.port, () => console.log(message))
  }

  addControllers(): void {
    console.log('implement')
  }
  setupController(): void {
    console.log('implement')
  }
  setupDatabase(): void {
    console.log('implement')
  }

  get App(): Express {
    return this.app
  }
}
