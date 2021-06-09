import {Sequelize, DataTypes} from 'sequelize'

console.log('EU NO TOP DO ARQUIVO')

const memoryDb = new Sequelize('sqlite::memory')

export const testConnection = async () => {
  try {
    const result = await memoryDb.authenticate()
    console.log('connected')
  } catch (e) {
    console.log('Deu ruim!')
  }
}

export const User = memoryDb.define('aula51_User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    defaultValue: 'Wick'
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 18
    }
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthDate: {
    type: DataTypes.DATEONLY,
    validate: {}
  }
})

const createDb = async () => User.sync()
createDb()

const log = async () => {
  const all = await User.findAll()
  console.log('Listando todos:')
  console.log(all)
}
log()

export default User
