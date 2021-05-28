import {UserController} from '@src/controllers/user'
import {Router} from 'express'

export const userRoute = Router()
const userController = new UserController()

userRoute.route('/').get(userController.getAll).post(userController.create)

userRoute
  .route('/:id')
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.delete)

userRoute.route('/search').get(userController.search)
