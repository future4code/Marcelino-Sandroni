import express from 'express'
import { countries } from '@src/model/countries'

const country = express.Router()

country
  .route('/')
  .get((req, res, next) => {
    console.log('COUNTRY GET')
  })
  .post((req, res, next) => {
    console.log('COUNTRY POST')
  })

country
  .route('/:id')
  .all((req, res, next) => {
    const { id } = req.params
    console.log(`COUNTRY ID: ${id}, type: `, typeof id)
    next()
  })
  .get((req, res) => {
    const { id } = req.params
    console.log(`GET COUNTRY ID: ${id}, type: `, typeof id)

    // const country = findCountry(id);

    // if (country) {
    //   res.status(200).send(country);
    // } else {
    //   res.status(200).send({ message: "country not found my friend" });
    // }
  })
  .post((req, res) => {
    res.send('post')
  })

export default country
