import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import userRoute from './routes/user'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use('/user', userRoute)

export default app
