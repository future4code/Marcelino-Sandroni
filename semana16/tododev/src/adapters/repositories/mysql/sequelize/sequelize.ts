import {config} from 'dotenv'
import {Sequelize} from 'sequelize'
import colors from 'colors'

config()

const log = (msg: string) => console.log(colors.green(msg))

export const sequelize = new Sequelize({
  dialect: 'mysql',
  database: process.env.DB_SCHEMA,
  username: process.env.DB_USER,
  password: process.env.DB_PW,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  logging: log
})
