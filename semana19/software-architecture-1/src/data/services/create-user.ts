import {User} from '../../domain/entities/user'
import {ServerError} from '../../domain/errors/server-error'
import {CreateUser} from '../../domain/usecases/create-user'
import {CreateUserRepository} from '../contracts/create-user-repository'
import {generateId} from './generate-id'

export class CreateUserService implements CreateUser {
  constructor(private readonly createUserRepository: CreateUserRepository) {}

  async create(data: Omit<User, 'id'>) {
    const id = generateId()
    const newUser = {
      id,
      ...data
    }
    const dataRecorded = await this.createUserRepository.save(newUser)
    if (!dataRecorded) {
      throw ServerError.database('Error saving the user in database')
    }
    return newUser
  }
}
