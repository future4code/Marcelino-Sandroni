import {Response} from 'express'

export type AnyClass = new (...args: any[]) => any

export type Handler<T, M extends string | number | symbol> = (
  res: Response,
  operations: keyof Omit<T, M>,
  props?: Props
) => Promise<void>

export type Props = {
  args?: Record<string, unknown> & any
  status?: number
}
