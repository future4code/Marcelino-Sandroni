import {Router} from 'express'
import {UsersModel} from 'src/models/users'
import {ListUsersController} from '../controllers/user/list'
import {CreateUserController} from '../controllers/user/create'

export const userRoute = Router()
// const userController = new UserController(userModel)
// route.get('/', userController.list)
const listUsers = new ListUsersController(UsersModel)
const createUser = new CreateUserController(UsersModel)
// const findUser = new FindUserController(UsersModel)
// const updateUser = new UpdateUserController(UsersModel)
// const deleteUser = new DeleteUserController(UsersModel)

userRoute.route('/').get(listUsers.handler).post(createUser.handler)

// local/users/id
// userRoute
//   .route('/:id')
//   .all(Controller.userVerify)
//   .get(Controller.userRead)
//   .put(Controller.userUpdate)
//   .delete(Controller.userDelete)

// local/users/search?name&type
// userRoute.route('/search').get(Controller.userSearch)
