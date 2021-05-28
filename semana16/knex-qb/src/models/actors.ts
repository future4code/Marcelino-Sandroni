import {Knex} from 'knex'
import {connection} from '../database/connection'
import {BaseModel} from './base'

enum Gender {
  Male = 'male',
  Female = 'female'
}

interface Actor {
  id: string
  name: string
  salary: number
  birthDate: string
  gender: Gender
}

export interface ActorsModel {
  actors: () => Knex.QueryBuilder
  findAll: (props: unknown) => Promise<Record<string, any>>
  findOne: (props: Record<string, unknown>) => Promise<void>
  save: (props: Record<string, unknown>) => Promise<void>
  delete: (id: Actor['id']) => Promise<number>
  update: (props: Record<string, unknown>) => Promise<number>
  detail: (props: unknown) => Promise<void>
}

export class Actors extends BaseModel {
  actors!: () => Knex.QueryBuilder
  constructor() {
    super()
    this.init()
  }

  async init() {
    this.actors = () => connection('actors')
  }

  async findAll(props: unknown): Promise<Record<string, any>> {
    return this.actors().select()
  }

  async findOne(props: Record<string, unknown>): Promise<void> {
    return this.actors().select().where(props)
  }

  async save(props: Record<string, unknown>): Promise<void> {
    console.log(`inserindo`, props)
    return this.actors().insert(props)
  }

  async delete(id: Actor['id']): Promise<number> {
    console.log(`delete ${id}`)
    return this.actors().delete().where({id})
  }

  async update(props: Record<string, unknown>): Promise<number> {
    const {id, name, salary, birthDate: birth_date, gender} = props
    const data = {name, salary, birth_date, gender}
    return this.actors().update(data).where({id})
  }

  async detail(props: unknown) {
    const [r] = await connection.raw('describe actors')
    return r
  }
}
