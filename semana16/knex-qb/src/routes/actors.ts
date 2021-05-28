import {Router} from 'express'
import {ActorsController} from '../controllers/actors'
import {Actors} from '../models/actors'

export const actorsRoute = Router()
const actorsController = new ActorsController(Actors)

actorsRoute
  .route('/')
  .get(actorsController.getAll)
  .post(actorsController.create)

actorsRoute //
  .get('/search', actorsController.search)
  .get('/detail', actorsController.detail)

actorsRoute
  .route('/:id')
  .get(actorsController.getOne)
  .put(actorsController.update)
  .delete(actorsController.delete)
