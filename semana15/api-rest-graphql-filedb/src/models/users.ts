export enum UserRole {
  Admin = 'ADMIN',
  Normal = 'NORMAL'
}

export interface User {
  id: number
  name: string
  type: UserRole
  age: number
}

export enum DbStatus {
  disconnected,
  connected
}

export interface UsersDatabase {
  users: User[]
  init: () => DbStatus
  getAll: () => User[]
  findById: (id: User['id']) => User | void
  save: (user: User) => void
}

export class UsersModel implements UsersDatabase {
  users: User[]

  constructor() {
    this.init()
  }

  init(): DbStatus {
    this.users = [
      {
        id: 1,
        name: 'Marcelino',
        type: UserRole.Admin,
        age: 29
      },
      {
        id: 2,
        name: 'Alice',
        type: UserRole.Normal,
        age: 30
      }
    ]

    if (!this.users) return DbStatus.disconnected

    return DbStatus.connected
  }

  save(): void {
    console.log(__dirname)
  }

  getAll = (): User[] => this.users

  findById(id: User['id']): User | void {
    const user = this.users.find((user) => user.id === id)
    return user
  }
}

const test: UsersDatabase = new UsersModel()
