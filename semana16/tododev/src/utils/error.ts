export class MyError extends Error {
  constructor(public code: number, message: string) {
    super(message)
  }
  
  static badRequest(message?: string) {
    
  }

  static async catch(error: any, req: any, res: any, next: any) {
    console.log('my ErrorHandlerClass')
    console.log('a', error)
    console.log('b', req)
    console.log('c', res)
    console.log('d', next)
  }
}

export const MyErrorHandler = async (
  error: any,
  req: any,
  res: any,
  next: any
) => {
  console.log('my error handler')
  console.log('a', error)
  console.log('b', req)
  console.log('c', res)
  console.log('d', next)
}
