export interface HttpRequest<T = any> {
  body: T
}

export interface HttpResponse<T = any> {
  code: number
  data: T
}

export const created = (data: any): HttpResponse => ({
  code: 201,
  data
})

export const ok = (data: any): HttpResponse => ({
  code: 200,
  data
})

export const serverError = (error: Error): HttpResponse => ({
  code: 500,
  data: error.message
})
