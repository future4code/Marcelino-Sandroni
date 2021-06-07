import {Knex} from 'knex'

export const up = async (knex: Knex): Promise<void> =>
  knex.schema.createTable('Users', table => {
    table.uuid('id')
    table.string('name').notNullable()
    table.string('email').notNullable().unique()
    table.integer('age').notNullable()
    table.timestamps(false, true)
  })

export const down = async (knex: Knex): Promise<void> =>
  knex.schema.dropTable('Users')
