export interface Task {
  title: string
  // _descriptions?: string
  tags?: string[]
  description: string
}

const onlyTrue = (target: any, key: string) => {
  let value = target[key]
  const getter = () => value
  const setter = (newValue: string) => {
    if (!newValue) {
      throw new Error(`cant set ${key} description with invalid value`)
    }
    value = newValue
  }

  Object.defineProperty(target, key, value)
}

export abstract class BaseTask implements Task {
  #description!: string
  constructor(public title: string, public tags: string[] = []) {}

  get description(): string {
    return this.#description
  }

  set description(value: string) {
    if (!value) {
      throw new Error(`cant set description with invalid value`)
    }
    this.#description = value
  }

  addTag(tagName: string): Task {
    if (!tagName) throw new Error('Invalid tag')
    this.tags.push(tagName)
    return this
  }

  removeTag(tagName: string): Task {
    if (!tagName) throw new Error('invalid tag name')
    if (!this.tags.length) throw new Error('no tags to remove')
    if (!this.tags.includes(tagName)) throw new Error('tagName dont exist')
    this.tags.filter(tag => tag !== tagName)
    return this
  }
}
