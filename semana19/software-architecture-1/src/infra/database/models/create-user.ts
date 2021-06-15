import {CreateUserRepository} from '../../../data/contracts/create-user-repository'
import {User} from '../../../domain/entities/user'

const STATUS = {
  SAVED: true,
  ERROR: false
}

export class FileCreateUserRepository implements CreateUserRepository {
  repository: User[]
  constructor() {
    this.repository = []
  }

  async save(data: User) {
    try {
      this.repository.push(data)
      return STATUS.SAVED
    } catch (error) {
      return STATUS.ERROR
    }
  }
}
