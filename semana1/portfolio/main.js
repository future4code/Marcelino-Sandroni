'use strict'

class Marcelino {
  name = 'Marcelino'
	static showName() {
		console.log(this.name)
	}

}

let name = {
	mainName : '',
	secondName: 'Sandroni',
	lastName: 'Dias',
	lul : 'kkk',
	fullName: function () {
		if (this.mainName & this.secondName & this.lastName) {
			console.log(`${this.mainName} ${this.secondName} ${this.lastName}`)
			return true
		}
		else {
			for(let names in this) console.log(this[names])
			return false
		}
	}
}


console.log(name.fullName())
//console.log(name.lul)

//Marcelino.showName()



