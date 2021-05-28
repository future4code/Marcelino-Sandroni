import {connection} from './connection'

export const create = async () => {
  let r = await connection.schema.dropTable('actors')
  console.log(r)
  r = await connection.schema.dropTable('movies')
  console.log(r)
  r = await connection.schema.createTable('actors', table => {
    table.uuid('id').primary()
    table.string('name').notNullable()
    table.float('salary').notNullable()
    table.date('birth_date').notNullable()
    table.enu('gender', ['male', 'female']).notNullable()
  })

  console.log(r)

  r = await connection.schema.createTable('actors', table => {
    table.uuid('id').primary()
    table.string('title').notNullable()
    table.text('sinopse').notNullable()
    table.date('release_date').notNullable()
    table.date('playing_limit_date')
  })
}

create()
