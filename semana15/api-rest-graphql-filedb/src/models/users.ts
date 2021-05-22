import fs from 'fs'
import path from 'path'

export enum UserRole {
  Admin = 'ADMIN',
  Normal = 'NORMAL'
}

export type User = {
  id: number
  name: string
  type: UserRole
  age: number
}

export interface UsersModel {
  users: User[]
}

export default class Users implements UsersModel {
  users: User[]

  constructor() {
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
  }

  generateID() {
    const id = 0
  }

  saveToFile() {
    const db = {
      path: path.resolve(__dirname, '../database/usersdb.json')
    }
    fs.writeFile('')
  }
  getUsers = () => this.users
}
