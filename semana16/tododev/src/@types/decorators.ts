import 'reflect-metadata'
import {AnyClass} from './global'

export const Control =
  (path: string) =>
  (target: AnyClass): void =>
    Reflect.defineMetadata('path', path, target.prototype)

export const Route = (method = 'get', route = '/') => {
  return (target: any, key: string): void => {
    const metaTarget = target.constructor.prototype
    const path = route.startsWith('/') ? route : `/${route}`
    const previousMeta = Reflect.getMetadata('routes', metaTarget) || []
    Reflect.defineMetadata(
      'routes',
      [...previousMeta, [method, path, key]],
      metaTarget
    )
  }
}
