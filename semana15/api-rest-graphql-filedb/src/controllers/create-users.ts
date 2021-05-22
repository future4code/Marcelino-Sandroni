import {Request, Response} from 'express'
import Users from '../models/users'
import BaseController from './base'

export default class UserController extends BaseController {
  // CRUD?
  constructor() {
    super()
    this.loadUsers(Users)
  }
  loadUsers() {
    const Users
  }
  userList(req: Request, res: Response): void {
    res.send('userList')
  }
  userCreate(req: Request, res: Response): void {
    res.send('userCreate')
  }
  userRead(req: Request, res: Response): void {
    res.send('userRead')
  }
  userUpdate(req: Request, res: Response): void {
    res.send('userUpdate')
  }
  userDelete(req: Request, res: Response): void {
    res.send('userDelete')
  }

  userSearch(req: Request, res: Response): void {
    res.send('userDelete')
  }
  userVerify(req: Request, res: Response): void {
    console.log(req.query)
  }
}
