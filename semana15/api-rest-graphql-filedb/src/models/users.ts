import config from '../config'
import fs from 'fs'

export enum UserRole {
  admin = 'admin',
  normal = 'normal'
}

export interface User {
  readonly id: number
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
  findOne: (user: Record<string, any>) => User | void
  save: (user: Record<string, any>) => Promise<void | boolean>
  update: (user: Record<string, any>) => Promise<void | boolean>
  findById: (id: any) => User | void
  delete: (id: any) => Promise<void>
}

export class Users implements UsersModel {
  protected users: User[]

  constructor() {
    this.init()
  }

  get quantity(): number {
    return this.users?.length
  }

  async init(): Promise<DbStatus> {
    console.log(`starting db...`)
    const localUsers = await fs.promises.readFile(config.fileDB.path, 'utf8')
    this.users = JSON.parse(localUsers)
    if (!this.users) return DbStatus.disconnected
    return DbStatus.connected
  }

  validate = (user: Record<string, any>) => {
    const fields = ['name', 'age', 'type']
    const keys = Object.keys(user)
    if (keys.length !== 3) {
      throw new Error(
        'incorrect user properties count, send name, age and type'
      )
    }
    const r = fields.every((n, i) => {
      console.log(`${n} tem ${keys[i]} && ${user?.type} in ${UserRole}`)
      console.log(user.type in UserRole)
      return keys.includes(n) && user?.type in UserRole
    })
    console.log(`result of validation: ${r}`)
    return r
  }

  get id() {
    return this.users[this.quantity - 1].id + 1
  }

  save = async (newUser: Record<string, any>): Promise<void | boolean> => {
    console.log('saving...')

    if ('id' in newUser) throw new Error('u cant set a new id')
    if (!this.validate(newUser)) throw new Error('incorrect fields in user')
    const userToAdd = {id: this.id, ...newUser}
    this.users.push(userToAdd as User)
    this.users.sort((a, b) => a.id - b.id)

    const r = await fs.promises.writeFile(
      config.fileDB.path,
      JSON.stringify(this.users)
    )

    console.log(`response: `, r)
    return r
  }

  getAll = (): User[] => this.users

  findOne = (props: Record<string, any>) => {
    const propsList = Object.entries(props)

    const result = this.users.find((user) =>
      propsList.every((entry) => user[entry[0] as keyof User] == entry[1])
    )

    if (!result) throw new Error('user not found')
    return result
  }

  findById = (id: any): User | void => {
    console.log(`id: ${id} do tipo ${typeof id}`)
    console.log(this)
    console.log(`Usuarios aqui `, this.users)
    const user = this.users.find((user) => user.id === Number(id))
    if (!user) throw new Error('cant find user by id')
    return user
  }

  delete = (id: any): Promise<void> => {
    console.log(`chegou ${id}`)
    const userToDelete = this.findById(id)
    console.log(`achei ${userToDelete}`)
    if (!userToDelete) throw new Error('cant find user by id')
    this.users = this.users.filter((user) => user.id !== userToDelete.id)
    const r = fs.promises.writeFile(
      config.fileDB.path,
      JSON.stringify(this.users)
    )

    return r
  }

  update = async (changedUser: Record<string, any>): Promise<void> => {
    const oldUser = this.users.findIndex((user) => user.id === changedUser.id)
    if (oldUser === -1) throw new Error('User to change not found')
    if (!this.validate(changedUser)) throw new Error('incorrect')

    this.users.splice(oldUser, 1, changedUser as User)
    const r = await fs.promises.writeFile(
      config.fileDB.path,
      JSON.stringify(this.users)
    )

    return r
  }
}
