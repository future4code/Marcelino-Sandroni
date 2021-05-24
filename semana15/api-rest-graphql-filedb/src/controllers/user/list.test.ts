import {DbStatus, User, UserRole} from '../../models/users'
import {ListUsersController} from './list'
import {UsersDatabase} from '../../models/users'
import express, {NextFunction, Request, Response, response} from 'express'
import supertest from 'supertest'

class TempModel implements Partial<UsersDatabase> {
  users: User[] = [
    {
      id: 1,
      name: 'Marcelino',
      age: 29,
      type: UserRole.Normal
    }
  ]
  getAll = (): ReturnType<UsersDatabase['getAll']> => this.users
  init = async (): ReturnType<UsersDatabase['init']> =>
    Promise.resolve(DbStatus.connected)
}

describe('Should list all users with any DB Model', async () => {
  // const response = await supertest(app).get('/')

  // expect(response.statusCode).toBe(200)
  it('Should have globals', () => {
    console.log(`Lendo o global var: ${global.oi}`)
    const a = 10
    expect(a).toBe(10)
  })
})
