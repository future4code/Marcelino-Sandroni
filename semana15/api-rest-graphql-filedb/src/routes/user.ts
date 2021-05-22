import {Router} from 'express'
import {UsersModel} from 'src/models/users'
import {ListUsersController} from '../controllers/user/list'

export const userRoute = Router()
const listUsers = new ListUsersController(UsersModel)

// local/users
userRoute.route('/').get(listUsers.handler)

// .post(Controller.userCreate)

// local/users/id
// userRoute
//   .route('/:id')
//   .all(Controller.userVerify)
//   .get(Controller.userRead)
//   .put(Controller.userUpdate)
//   .delete(Controller.userDelete)

// local/users/search?name&type
// userRoute.route('/search').get(Controller.userSearch)
