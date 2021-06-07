import knex from 'knex'
import knexfile from '@/../knexfile'
import {config} from 'dotenv'
config()

type EnvironmentOptions = 'staging' | 'production' | 'development'

const environment =
  (process.env.NODE_ENV as EnvironmentOptions) || 'development'

export const connection = knex(knexfile[environment])
