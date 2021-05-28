import {Router} from 'express'
import {IndexController} from 'src/controllers'

export const indexRoute = Router()
const indexController = new IndexController()

indexRoute.get('/', indexController.execute)
