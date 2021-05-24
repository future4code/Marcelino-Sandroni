interface Person {
  name: string
  age: number
}

const UserOne: Person = {
  name: 'Willian',
  age: 50
}

const UserTwo: Person = {
  name: 'Marcelino',
  age: 29
}

const UserList = []

UserList.push(UserOne)
console.table(UserList)

UserList.push(UserTwo)
console.table(UserList)
