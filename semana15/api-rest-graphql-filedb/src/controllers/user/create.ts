import BaseController from '../base'
import {UsersDatabase} from '../../models/users'
import {RequestHandler} from 'src/server'

type FieldsVerification = (body: Record<string, unknown>) => boolean | unknown

export class CreateUserController extends BaseController {
  users: UsersDatabase

  constructor(Users: new () => UsersDatabase) {
    super()
    this.users = new Users()
  }

  execute: RequestHandler = async ({body}, res) => {
    console.log({body})
    if (!this.hasAllFields(body)) {
      return res.send('send correct')
    }
    if (!this.hasValidFields(body)) return res.send('not valid')
    if (!this.hasMoreFields(body)) return res.send('too many fields')

    const r = await this.users.save({...body})
    if (r) throw new Error('error creating new user')
    res.send('Criado talkey')
  }

  hasAllFields: FieldsVerification = ({name, age, type}) => name && age && type

  hasValidFields: FieldsVerification = ({name, age, type}) => {
    if (typeof name !== 'string' || typeof type !== 'string') {
      return false
    }
    if (!age || typeof Number(age) !== 'number') {
      return false
    }
    return true
  }

  hasMoreFields: FieldsVerification = (body) => {
    const fields = ['name', 'age', 'type']
    if (Object.keys(body).some((key) => fields.includes(key))) {
      return true
    }
  }
}
