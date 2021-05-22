import {Request, Response} from 'express'
import Users, {User, UsersModel} from '../models/users'
import BaseController from './base'

enum DbStatus {
  disconnected,
  connected
}

export default class UserController extends BaseController {
  users?: User[]
  database?: UsersModel
  constructor() {
    super()
    this.loadUsersModel()
  }

  isDBConnected = (): boolean => !!this.database

  verifyConnection(): void | never {
    if (!this.database) {
      throw new Error('Banco de dados nao carregado ainda...')
    }
  }
  async loadUsersModel(): Promise<void> {
    this.database = await new Users()
  }

  async loadUsers(): Promise<void> {
    this.verifyConnection()
    this.users = await this.database.getUsers()
  }

  async userList(_: Request, res: Response): Promise<void> {
    this.verifyConnection()
    const users = await this.database.getUsers()
    res.send({message: 'Users here', users})
  }
  handleRequest = () => this.userList()
}
