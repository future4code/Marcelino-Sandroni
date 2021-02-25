class pessoa {
    constructor(name, genre, age) {
        this.name = name
        this.genre = genre
        this.age = age

    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }

    getGenre() {
        return this.genre
    }

    listInfo() { console.log(`
        Name: ${this.name} Genre: ${this.genre} Age: ${this.age}
    `)}

}

let me = new pessoa('Marcelino', 'masculino', 29)

me.listInfo()
