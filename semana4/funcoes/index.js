/* Exercicios de interpretacao */

// Exercicio 1
// a. 10 e 50
// b. Iria retornar o valor do argumento multiplicado por 5, nao iria sair nada
// no console

// Exercicio 2
// a. Darvas e Caio, item com index 0 e 1 do array
// b Amanda Caio oras rsrs, pois seria o primeiro e segunda item

// Exercicio 3
// A funcao retorna os numeros pares em um array, um bom nome: filterOddNumbers


/* Exercicios de Codigo */

// Exercicio 4
// a. funcao apenas imprime, nao pediu para chamar entao vamos ser simples
() => console.log("Eu sou Marcelino, tenho 29 anos, moro em SP e sou estudante")

// b.
const helloMessage = (name, age, adress, isStudent) => {
	if(isStudent) isStudent = 'sou'
	else isStudent = 'nao sou'

	let paragraph = 'Eu sou ' + name + ', tenho ' + age + ', moro em ' + adress +
		', ' + isStudent  + ' estudante'

	return paragraph
}

// b. melhorada
const helloMessageBetter = (name, age, adress, isStudent) => 
	`Eu sou ${name}, tenho ${age}, moro em ${
	adress}, ${isStudent ? 'sou' : 'nao sou'} estudante`

//console.log(helloMessage('Marcelino', 29, 'SP', false))
//console.log(helloMessageBetter('Marcelino', 29, 'SP', false))

// Exercicio 5
// a.
const sum = (number1, number2) => number1 + number2
//console.log(sum(10,20))

// b.
const isBigger = (value, reference) => value > reference

// c.
const repeatTenTimes = text => {
	for(let i = 0; i < 10; i++) console.log(text)
}

//repeatTenTimes('oi')

//Exercicio 6
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// a.
const countArrayLength = array => array.length

// b.
const isEven = number => !(number % 2)

// c.
const countEvenNumbers = numbers => {
	let evenNumbersCount = 0
	for (number of numbers) {
		if ( !(number % 2) ) evenNumbersCount++
	}  
	return evenNumbersCount
}
// c. melhorada
const countEven = n => n.reduce((c, i) => c += !(i % 2) ? 1 : 0, 0)

//console.log(`simple: ${countEvenNumbers(array)} better: ${countEven(array)}`)

// d.
const doAgain = numbers => {
	let evenNumbersCount = 0
	for(number of numbers) {
		if(isEven(number)) {
			evenNumbersCount++
		}
	}
	return evenNumbersCount
}

const doAgainVersion2 = n => n.reduce((c, i) => c += isEven(i) ? 1: 0, 0) 

//console.log(`Normal: ${doAgain(array)} better: ${doAgainVersion2(array)}`)

/* DESAFIOS ${chegamos} \u{\O/}u/ */

// Desafio bolado 1
// Destructuring no console para facilitar digitacao
const {log} = console

// 1.
const print = item => console.log(item)
print('oi')

// 2.
const sumThisNumbers = (numberOne, numberTwo) => print(numberOne + numberTwo)
sumThisNumbers(10, 20)

// Desafio bolado 2
// array para utilizar na funcao
const numbers = [0, 8, 23, 16, 10, 15, 41, 12, 13]

// a. simple
const isEvenDoubleIt = numbers => {
	let evenNumbersDouble = []

	for(number of numbers) {
		if( number % 2 === 0 ) {
			evenNumbersDouble.push(number * 2)
		}
	}

	return evenNumbersDouble
}

console.log('Simple version: ' + isEvenDoubleIt(numbers))

// a. better
const isEvenDoubleItBetter = n => n.filter(i => !(i % 2)).map(n => n * 2)

log(`Better version: ${isEvenDoubleItBetter(numbers)}`)

// b. simple
const maxNumber = numbers => {
	let max = numbers[0] //Iniciar o max com o primeiro item ne, so pra nao dar BO

	for(number of numbers) {
		if(number > max) {
			max = number
		}
	}

	return max
}

console.log(maxNumber(numbers))

// b. better
const max = numbers => Math.max(...numbers)

log(max(numbers))

// c. simple
const biggerIndex = numbers => {
	let maxNumberIndex = 0
	let maxNumber = numbers[0]

	for(let i = 0; i < numbers.length; i++) {
		if(numbers[i] > maxNumber) {
			maxNumber = numbers[i]
			maxNumberIndex = i
		}
	}

	return maxNumberIndex
}

console.log('Simple version: ' + biggerIndex(numbers))

// c. better version
const biggerIndexBetter = n => n.findIndex(i => i === Math.max(...numbers))

log(`Better version: ${biggerIndexBetter(numbers)}`)

// d. simple
const invertArray = numbers => {
	let inverted = []

	for(let i = numbers.length - 1; i >= 0; i--) {
		inverted.push(numbers[i])
	}

	return inverted
}

console.log('Simple version numbers: ', ...numbers)
console.log('Simple versin inverted: ', ...invertArray(numbers))

// d. better version
const invertArrayBetter = n => n.reverse()

log(`Better version numbers:  ${numbers}`)
log(`Better version inverted: ${invertArrayBetter(numbers)}`)
