import {User} from '../entities/user'

export interface CreateUser {
  create: (data: Omit<User, 'id'>) => Promise<User>
}
