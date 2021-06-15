export class ServerError extends Error {
  constructor(
    message: string = 'Unknown server error',
    public code: number = 500
  ) {
    super(message)
    this.name = 'ServerError'
  }

  static badRequest(message: string = 'Bad request from user') {
    return new ServerError(message, 400)
  }

  static internal(message: string = 'Internal error, sorry.') {
    return new ServerError(message, 500)
  }

  static notFound(message: string = 'Not found your search') {
    return new ServerError(message, 404)
  }

  static database(message: string = 'Incorrect request in database') {
    return new ServerError(message, 400)
  }
}
