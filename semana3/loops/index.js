/* Exercicios de interpretacao */

// Exercicio 1
// a. Esta fazendo um loop de 0 a 4, e acumulando a soma do numero na variavel 10
// b. vai imprimir o numero 10

// Exercicio 2
// a. Os numeros maiores que 18
// b. Sim eh o suficiente, mas nao o mais adequado
// Poderia ter uma variavel em scopo superior iniciada com o numero 0
// E dentro do loop incrementar esta variavel

// Desafio
// 0
// 00
// 000
// 0000

/* Exercicios de codigo */

// Exercicio 3
let array= [17, 30, 20, 50, 10, 5, 10, 90]

// Resposta item a.
for(value in array) {
	console.log(value)
}

// Resposta item b.
for(value in array) {
	console.log(value / 10)
}

// Resposta item c.
let arrayOddNumbers = []
for (value of array) {
	if (!(value % 2)) {
	arrayOddNumbers.push(value)
	}
}
console.log('Odd: ', arrayOddNumbers)

// Resposta item d.
let arrayTextWithIndex = []
for (let i = 0; i < array.length; i++) {
	arrayTextWithIndex.push('O elemento do index ' + i + ' é ' + array[i])
}
console.log(arrayTextWithIndex)

// Resposta item e.
let min, max
for(let i = 0; i < array.length; i++) {
	if (!i) min = max = array[i]
	if (value < min) min = value
	if (value > max) max = value
}
console.log('min: ' + min + ' max: ' + max)

/* Desafios */

// Desafio 1
let number = Number(prompt(
	'Primeiro jogador:\nInsira um numero para ser adivinhado: '))
let answer, tryCount = 0
console.log('Vamos jogar!')


while(answer !== number) {
	answer = Number(prompt('Segundo jogador:\nChute um numero: '))
	console.log('O número chutado foi: ', answer)
	if (answer < number) console.log('Errrrrrrrrou, é maior')
	if (answer > number) console.log('Errrrrrrrrou, é menor')
	tryCount++
}

console.log('Acertou!\nO número de tentativas foi: ', tryCount)

// Desafio 2
let style = 'font-size: 30px; color:'

console.log('%cBem vindo ao adivinhe o número! \u{1F914}', style + 'aqua')
console.log('%cVamos jogar! \u{1F92B}', style + 'lime')

answer = tryCount = 0
number = Math.round(Math.random() * 100)

style = 'font-size: 24px; color:'

while(answer !== number) {
	answer = Number(prompt(
		'Adivinhe o número que a máquina pensou!\nEntre 1 a 100' 
	))
	console.log('%cO número chutado \u{1F9B6} foi: ' + answer, style + 'tomato')

	if (answer < number) {
		console.log('%cErrrrrrrrrou, é maior \u{1F92D}', style + 'orange')
	}
	if (answer > number) {
		console.log('%cErrrrrrrrrou, é menor \u{1F92D}',style + 'gold')
	}
	tryCount++
}

style = 'font-size: 40px; color: white; background-color: #333'

console.log('%cAcertou! \u{1F61C}\n' + 'Foi o número ' + number, style)
console.log('%cO número de tentativas foi: ' + tryCount + ' \u{1F3C1}', style)
