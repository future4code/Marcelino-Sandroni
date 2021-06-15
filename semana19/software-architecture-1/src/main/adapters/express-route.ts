import {NextFunction, Request, Response} from 'express'
import {Controller} from 'src/presentation/contracts/controller'

export const adaptExpressRoute = (controller: Controller) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const {code, data} = await controller.handle(req)
    res.status(code).send(data)
  }
}
