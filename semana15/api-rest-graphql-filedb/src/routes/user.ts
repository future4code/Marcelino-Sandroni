import express from 'express'
import UserController from '../controllers/list-users'

const userRoute = express.Router()

const Controller = new UserController()

// local/users
userRoute.route('/').get(Controller.userList).post(Controller.userCreate)

// local/users/id
userRoute
  .route('/:id')
  .all(Controller.userVerify)
  .get(Controller.userRead)
  .put(Controller.userUpdate)
  .delete(Controller.userDelete)

// local/users/search?name&type
userRoute.route('/search').get(Controller.userSearch)

export default userRoute
