import {Cep, getCep} from './services/search-cep'
import express from 'express'
import cors from 'cors'
import bcrypt from 'bcrypt'
import db from './database/models'

export const app = express()
app.use(express.json())
app.use(cors())

const hashPassword = async (password: string) => bcrypt.hash(password, 10)

const comparePassword = async (password: string, hash: string) =>
  bcrypt.compare(password, hash)

app.get('/signup', async (req, res) => {
  const {password} = req.body

  const hash = await hashPassword(password)

  const newUser = {
    ...req.body,
    password: hash
  }

  await db.sequelize.sync()
  console.log(await getCep('18150000'))
  const cep = await getCep('18150000')
  console.log('cep:', cep)

  res.send()
})

app.get('/login', (req, res) => {
  const {email, password} = req.body

  if (!email || !password)
    return res.send('inform both email and password to login')
})

app.get('/cep', async (req, res) => {
  const cep = await getCep('18150000')
  console.log(cep)
  res.send(cep)
})
