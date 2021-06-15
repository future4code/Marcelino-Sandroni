import {User} from 'src/domain/entities/user'

export interface CreateUserRepository {
  save: (data: User) => Promise<void | boolean>
}
