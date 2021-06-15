import {CreateUser} from 'src/domain/usecases/create-user'
import {Controller} from '../contracts/controller'
import {created, HttpRequest, serverError} from '../contracts/http'

export class CreateUserController implements Controller {
  constructor(protected createUserService: CreateUser) {}

  async handle(request: HttpRequest) {
    try {
      const user = await this.createUserService.create(request.body)
      return created(user)
    } catch (error) {
      return serverError(error)
    }
  }
}
