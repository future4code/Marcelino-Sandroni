'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('aula51_users', {
      id: {
        type: Sequelize.UUID,
        default: Sequelize.UUIDV4,
        primaryKey: true
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING,
        defaultValue: 'Wick'
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 18
        }
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      birthDate: {
        type: Sequelize.DATEONLY,
        validate: {}
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('aula51_users')
  }
}
