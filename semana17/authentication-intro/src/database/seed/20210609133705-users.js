'use strict'
const uuid = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'aula51_users',
      [
        {
          id: uuid.v4(),
          firstName: 'Marcelino',
          lastName: 'Sandroni Dias',
          age: 29,
          email: 'marcelino.sandroni@gmail.com',
          password: '123123',
          birthDate: '1991-11-28'
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
