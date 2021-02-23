/* Exercicios de interpretacao */

// Interpretacao 1
// a. false
// b. false
// c. true
// e. boolean

// Interpretacao 2
// a. undefined
// b. null
// c. 11
// d. 3
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 9

/* Exercicios de Codigo */

// Codigo 1
let userAge = prompt('Qual a sua idade?')
let userBestFriendAge = prompt('Qual a idade do seu melhor amigo(a)?')

userAge = Number(userAge)
userBestFriendAge = Number(userBestFriendAge)

console.log('Sua idade e maior do que a do seu melhor amigo?',
	userAge > userBestFriendAge
)

console.log('Diferenca de idade: ', userAge - userBestFriendAge)

// Codigo 2
let oddNumber = prompt('Insira um numero par')
oddNumber = Number(oddNumber)

// Numeros pares sao sempre divisiveis por dois, portanto tem resto 0
// Numeros impares terao resto 1, assim tem como verificar se eh par ou impar
console.log(oddNumber % 2)

// Codigo 3
let listaDeTarefas = []

let tarefa = prompt('Insira a sua primeira tarefa:')
listaDeTarefas.push(tarefa)

tarefa = prompt('Insira a sua segunda tarefa:')
listaDeTarefas.push(tarefa)

tarefa = prompt('Insira a sua terceira tarefa:')
listaDeTarefas.push(tarefa)

console.log(listaDeTarefas)

let index = prompt('Insira o numero de sua tarefa sendo 0, 1 ou 2:')
listaDeTarefas.splice(index, 1)

console.log(listaDeTarefas)

// Codigo 4
let userName = prompt('Insira seu nome:')
let userEmail = prompt('Insira seu email:')

console.log('O e-mail ' + userEmail +
	' foi cadastrado com sucesso, Seja bem-vindo(a) ' + userName
)

/* Exercicios desafiadores */

// Desafio 1

const kelvin = (77 - 32) * 5 / 9 + 273.15
console.log(kelvin + '°K')

const fahrenheit = (80) * 9 / 5 + 32
console.log(fahrenheit + '°F')

let celsius = 30
let celsiusToFahrenheit = (celsius) * 9 / 5 + 32
let celsiusToKelvin = (celsiusToFahrenheit - 32) * 5 / 9 + 273.15
console.log(celsiusToFahrenheit + '°F e ' + celsiusToKelvin + '°K')

celsius = prompt('Insira a temperatura em Celsius para converter:')
celsiusToFahrenheit = (celsius) * 9 / 5 + 32
celsiusToKelvin = (celsiusToFahrenheit - 32) * 5 / 9 + 273.15
console.log(celsiusToFahrenheit + '°F e ' + celsiusToKelvin + '°K')

// Desafio 2

const quilowattHourPrice = 0.05

let value = quilowattHourPrice * 280
console.log('280 quilowatt-hora custa: ' + value)

const discount = 15
value = value / 100 * (100 - discount)
console.log('Com desconto de ' + discount + '% o valor é: ' + value)

// Desafio 3
let pounds = 201
let kilograms = pounds / 2.2046
console.log(pounds + 'lb equivalem a ' + kilograms + 'kg')

let ounces = 10.5
kilograms = ounces / 35.274
console.log(ounces + 'oz equivalem a ' + kilograms + 'kg')

let miles = 100
let meters = miles / 0.00062137
console.log(miles + 'mi equivalem a ' + meters + 'm')

let feets = 50
meters = feets / 3.2808
console.log(feets + 'ft equivalem a ' + meters + 'm')

let gallons = 103.56
let liters = gallons / 0.26417
console.log(gallons + 'gal equivalem a ' + liters + 'l')

let cups = 450
liters = cups / 4
console.log(cups +'xic equivalem a ' + liters + 'l')
