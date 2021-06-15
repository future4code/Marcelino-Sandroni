import {Router} from 'express'
import {CreateUserService} from '../../data/services/create-user'
import {CreateUserController} from '../../presentation/controllers/create-user'
import {adaptExpressRoute} from '../adapters/express-route'
import {FileCreateUserRepository} from '../../infra/database/models/create-user'

export default (router: Router): void => {
  const repository = new FileCreateUserRepository()
  const service = new CreateUserService(repository)
  const controller = new CreateUserController(service)
  router.post('/user', adaptExpressRoute(controller))
}
