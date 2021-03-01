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
	isStudent = isStudent ? ' sou' : ' nao sou'

	return 'Eu sou ' + name + ', tenho ' + age + ', moro em ' + adress +
		isStudent  + ' estudante'
}

console.log(helloMessage('Marcelino', 29, 'SP', true))


// Exercicio 5
// a.
const sum = (number1, number2) => number1 + number2
console.log(sum(10,20))

// b.
const isBigger = (value, reference) => value > reference

// c.
const repeatTenTimes = text => {
	for(let i = 0; i < 10; i++) console.log(text)
}

repeatTenTimes('oi')

//Exercicio 6
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// a.
const countArrayLength = array => array.length
console.log(countArrayLength(array))

// b.
const isEven = number => !(number % 2)
console.log(isEven(2))

// c.
const countEvenNumbers = numbers => {
	let evenNumbersCount = 0
	for (number in number) {
		if ( !(number % 2) ) evenNumbersCount++
	}  
	return evenNumbersCount
}
// c. melhorada
const countEven = numbers => numbers.reduce((count, item) => count += item, 0)
