export type NumOrStr = number | string
export type NumOrBool = number | boolean
export type StrOrBool = string | boolean
export type Basic = string | number | boolean

export type Fn<T> = (args: T) => T

export interface Props<T extends Fn<T>> {
  status?: number
  args?: any
}
