import {Model} from 'sequelize'

interface UserAttributes {
  id: string
  firstName: string
  lastName: string
  age: number
  email: string
  password: string
  birthDate: string
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    id!: string
    firstName!: string
    lastName!: string
    age!: number
    email!: string
    password!: string
    birthDate!: string

    static associate(models: any) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
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
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      birthDate: {
        type: DataTypes.DATEONLY,
        validate: {},
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'aula51_user'
    }
  )
  return User
}
