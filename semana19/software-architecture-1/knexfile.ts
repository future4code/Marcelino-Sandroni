import {config} from 'dotenv'
config()

export default {
  staging: {
    client: 'sqlite3',
    connection: {
      filename: './src/infra/database/sqlite/dev.sqlite3'
    }
  },

  development: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PW,
      database: process.env.DB_SCHEMA,
      port: Number(process.env.DB_PORT),
      multiStatements: true
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/infra/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/infra/database/seeds`
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}
