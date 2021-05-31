import {config} from 'dotenv'
import {knex as Knex} from 'knex'

config()

export const knex = Knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_SCHEMA,
    port: Number(process.env.DB_PORT),
    multiStatements: true
  }
})
