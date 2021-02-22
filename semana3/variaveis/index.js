/* Exercicios de interpretacao */

/* Interpretacao 1:
 * 10
 * 10, 5
 */

/* Interpretacao 2:
 * 10, 10, 10
 * /


/* Exercicios de Codigo */

// Codigo 1

let name
let age

// Ambas variaveis sao do tipo indefined por nao foram ainda definidas
console.log('Nome: ', typeof name)
console.log('Idade: ', typeof age)

name = prompt('Qual o seu nome?')
age = prompt('Qual a sua idade?')

// Agora que os valores foram definidos, ambos sao do tipo string
// contendo texto, pois aparentemente toda informacao da funcao prompt
// retorna como string, mesmo que seja um numero por exemplo
console.log('Nome: ', typeof name)
console.log('Idade: ', typeof age)

console.log('Olá ', name, ' você tem ', age)


// Codigo 2

const genre = prompt('Qual o seu gênero?')
console.log('Resposta: ', genre)

const adress = prompt('Qual o seu endereço?')
console.log('Resposta: ', adress)

const color = prompt('Qual a sua cor favorita?')
console.log('Resposta: ', color)

const serie = prompt('Qual o seu serie favorita?')
console.log('Resposta: ', serie)

const music = prompt('Qual a sua música favorta?')
console.log('Resposta: ', music)

// Codigo 3

let myFoods = ['yakissoba', 'strogonoff', 'lasanha', 'ovos mexidos', 'pizza']

console.log('Essas são as minhas comidas preferidas:')
console.log(myFoods[0])
console.log(myFoods[1])
console.log(myFoods[2])
console.log(myFoods[3])
console.log(myFoods[4])

const userFood = prompt('Qual a sua comida preferida?')

myFoods[1] = userFood

console.log('Mudei de ideia, alhe agora minhas comidas preferidas:')
console.log(myFoods[0])
console.log(myFoods[1])
console.log(myFoods[2])
console.log(myFoods[3])
console.log(myFoods[4])

// Codigo 4

const questions = [
	'Você mora em São Paulo?',
	'Você esta usando um calça azul?',
	'Você gosta de rock?'
]

const answers = [ true, false, true ]

console.log(questions[0], answers[0])
console.log(questions[1], answers[1])
console.log(questions[2], answers[2])
