import {UsersDatabase} from 'src/models/users'
import {RequestHandler} from 'src/server'
import BaseController from '../base'

export class ListUsersController<
  M extends Pick<UsersDatabase, 'getAll'>
> extends BaseController {
  constructor(protected users: M) {
    super()
  }

  execute: RequestHandler = async (_, res) => {
    const users = await this.users.getAll()
    if (!users) return res.send('noe one here!')
    res.send(users)
  }
}
