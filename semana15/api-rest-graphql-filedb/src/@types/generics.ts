type AnyClass = new (...args: any[]) => any

type ClassDec<T = AnyClass> = (target: T) => T

const myDecorator: ClassDec = (target) => target
