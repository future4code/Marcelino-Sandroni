import {knex} from './connection'

export const create = async () => {
  let r: boolean | void = await knex.schema.hasTable('actors')
  if (r) {
    console.log(`actors: table exist, deleting...`)
    await knex.schema.dropTable('actors')
  }
  console.log(`actors: creating table...`)
  r = await knex.schema.createTable('actors', table => {
    table.uuid('id').primary()
    table.string('name').notNullable()
    table.float('salary').notNullable()
    table.date('birth_date').notNullable()
    table.enu('gender', ['male', 'female']).notNullable()
    table.timestamps(true, true)
  })
  console.log(`actors: created!`)

  r = await knex.schema.hasTable('movies')
  if (r) {
    console.log(`movies: table exist, deleting...`)
    await knex.schema.dropTable('movies')
  }
  console.log(`movies: creating table...`)
  r = await knex.schema.createTable('movies', table => {
    table.uuid('id').primary()
    table.string('title').notNullable()
    table.text('sinopse').notNullable()
    table.date('release_date').notNullable()
    table.date('playing_limit_date').notNullable()
    table.timestamps(true, true)
  })
  console.log(`movies: created!\n\n`)
  const [tables] = await knex.raw('show tables')
  console.log(`Tables in database now:\n`)
  console.table(tables)

  process.exit(0)
}

create()
