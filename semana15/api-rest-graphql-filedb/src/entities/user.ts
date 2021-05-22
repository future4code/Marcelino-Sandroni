interface UserEntitie {
  id: string
  name: string
  age: number
}

class User implements UserEntitie {
  public readonly id: string
  public name: string
  public age: number

  constructor(props: UserEntitie) {
    Object.assign(this, props)
  }
}

const Me = new User({name: 'marcelino', age: 29, id: 'sdjf23m234'})
