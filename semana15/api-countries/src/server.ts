import express from 'express'
import cors from 'cors'
import country from '@src/controllers/country'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/country', country)

app.get('/', (req, res) => console.log('oi'))

export default app
