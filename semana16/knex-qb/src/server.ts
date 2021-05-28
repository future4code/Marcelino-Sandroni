import express from 'express'
import cors from 'cors'
import {indexRoute, actorsRoute, moviesRoute, pingRouter} from './routes'

export const app = express()

app.use(express.json())
app.use(cors())
app.use('/', indexRoute)
app.use('/actors', actorsRoute)
app.use('/movies', moviesRoute)
app.use('/ping', pingRouter)
