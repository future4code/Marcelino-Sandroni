import {UsersDatabase} from 'src/models/users'
import {RequestHandler} from 'src/server'
import BaseController from '../base'

export class ListUsersController extends BaseController {
  users: UsersDatabase

  constructor(Users: new () => UsersDatabase) {
    super()
    this.users = new Users()
  }

  execute: RequestHandler = async (req, res) => {
    const users = await this.users.getAll()
    if (!users) return res.send('noe one here!')
    res.send(users)
  }
}
