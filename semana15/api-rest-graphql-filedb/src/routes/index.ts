import {Router} from 'express'
import {IndexController} from 'src/controllers'

export const indexRoute = Router()
const Index = new IndexController()

indexRoute.get('/', Index.handler)
