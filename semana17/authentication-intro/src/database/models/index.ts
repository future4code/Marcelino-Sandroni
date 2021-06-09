import {Sequelize, Model, DataTypes} from 'sequelize'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'

dotenv.config()
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config.js')[env]

interface AssociateModel extends Model {
  associate: (models: any) => void
}

interface Db {
  sequelize?: any
  Sequelize?: any
  [key: string]: AssociateModel
}

const db: Db = {}

dotenv.config()

let sequelize: any
if (config.use_env_variable) {
  sequelize = new Sequelize(
    process.env[config.use_env_variable] as string,
    config
  )
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  )
}

fs.readdirSync(__dirname)
  .filter((file: string) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.ts'
    )
  })
  .forEach((file: string) => {
    console.log(file)
    const model = require(path.join(__dirname, file))(sequelize, DataTypes)
    console.log(`loading model ${model.name}`)
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate!) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
