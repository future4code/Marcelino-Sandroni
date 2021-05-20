import express from 'express'
import UserController from '../controllers/UserController'

const userRoute = express.Router()

userRoute.route('/').get(new UserController())

export default userRoute
