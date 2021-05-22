import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import {RequestHandler as ExpressRequestHandler} from 'express'
import {indexRoute} from './routes'
import {userRoute} from './routes/user'

export type RequestHandler = ExpressRequestHandler

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use('/', indexRoute)
app.use('/users', userRoute)

export default app
