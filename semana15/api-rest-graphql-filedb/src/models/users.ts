import config from '../config'
import fs from 'fs'

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

export interface UsersModel {
  init: () => Promise<DbStatus>
  getAll: () => User[]
  findById: (id: User['id']) => User | void
  save: (user: User) => Promise<void | boolean>
}

export class Users implements UsersModel {
  protected users: User[]

  constructor(user: User) {
    this.init()
  }

  get quantity(): number {
    return this.users?.length
  }

  async init(): Promise<DbStatus> {
    // this.users = []
    const localUsers = await fs.promises.readFile(config.fileDB.path, 'utf8')
    // console.log({localUsers})
    this.users = JSON.parse(localUsers)

    if (!this.users) return DbStatus.disconnected

    return DbStatus.connected
  }

  async save(newUser: User): Promise<void | boolean> {
    console.log('saving...')
    console.log({newUser})
    console.log(__dirname)
    this.users.push(newUser)
    const r = await fs.promises.writeFile(
      config.fileDB.path,
      JSON.stringify(this.users)
    )

    console.log(`response: `, r)
    // if (r) throw new Error('error creating new user')
    return r
  }

  getAll = (): User[] => this.users

  findOne(props: Partial<User>)

  findById(id: User['id']): User | void {
    const user = this.users.find((user) => user.id === id)
    return user
  }
}

const test: UsersDatabase = new UsersModel()
