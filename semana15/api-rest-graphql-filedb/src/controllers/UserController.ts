import {Request, Response} from 'express'

export default class UserController {
  // CRUD?
  constructor() {
    return this.userRead
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
}
