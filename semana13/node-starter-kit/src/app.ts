import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send(`Hello i'm using express!!!`)
})

export default app
