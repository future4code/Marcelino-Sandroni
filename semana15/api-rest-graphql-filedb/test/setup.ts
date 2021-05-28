import supertest from 'supertest'
import app from './server'

beforeAll(async () => {
  global.testRequest = supertest(app)
})
