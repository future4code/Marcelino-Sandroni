import express from 'express'
import ListUsers from '../controllers/list-users'

const userRoute = express.Router()

const ListUsersController = new ListUsers()

// local/users
userRoute.route('/').get(ListUsersController.handle).post(Controller.userCreate)

// local/users/id
// userRoute
//   .route('/:id')
//   .all(Controller.userVerify)
//   .get(Controller.userRead)
//   .put(Controller.userUpdate)
//   .delete(Controller.userDelete)

// local/users/search?name&type
// userRoute.route('/search').get(Controller.userSearch)

export default userRoute
