/* Exercicios de interpretacao */

// Exercicio 1
// a. Testa se o numero eh par ou impar
// b. Numeros pares
// c. Numeros impares

// Exercicio 2
// a. Buscar o preco da fruta
// b. 2.25
// c. O preco da fruta e R$ 5.00

//Exercicio 3
// a. Convertendo o retorno da funcao prompt de string para numero
// b. Se for 10 iria passar no teste, se for -10, nao iria passar
// c. Vai ter sim, pois no final da log em uma variavel com scopo inferior nao
// acessival


/* Exercicios de Codigo */

// Exercicio 4
const userAge = Number(prompt('Qual a sua idade?'))

if (userAge >= 16) {
	console.log('Voce pode dirigir')
} else if (userAge > 0){
	console.log('Voce nao pode dirigir')
} else {
	console.log('Insira um valor valido')
}

// Exercicio 5
const shift = prompt(
	'Digite o seu turno com a letra: M (matutino) V (verpertino) N (noturno)'
)

if (shift === 'M') {
	console.log('Bom dia!')
} else if (shift == 'V') {
	console.log('Boa tarde')
} else if (shift == 'N'){
	console.log('Boa noite!')
} else {
	console.log('Insira um valor valido')
}

// Exercicio 6
switch (shift) {
	case 'M':
		console.log('Bom dia!')
		break
	case 'V':
		console.log('Boa tarde')
		break
	case 'N':
		console.log('Boa noite!')
		break
	default:
		console.log('Insira um valor valido')
}

// Exercicio 7
const movie = prompt('Qual o tipo do filme?')
const price = Number(prompt('Quanto esta o ingresso?'))

if (movie === 'fantasia' && price < 15) {
	console.log('Bom filme')
} else if ( movie && price ) {
	console.log('Escolha outro filme')
} else {
		console.log('Insira um valor valido')
}

/* Exercicios do Desafio */

// Desafio 1
if (movie === 'fantasia' && price < 15) {
	const snack = prompt(
		'Que snack voce vai comprar: pipoca, chocaolate, doces etc?'
	)
	console.log('Bom filme com ' + snack + '!')
} else if ( movie && price ) {
	console.log('Escolha outro filme')
} else {
		console.log('Insira um valor valido')
}

// Desafio 2
const gameTypes = ['IN', 'DO']
const gameTypesDescription = ['Internacional', 'Nacional']
const gameStages = ['SF', 'DT', 'FI']
const gameStagesDescription = ['Semi-final', 'Decisao do 3 lugar', 'Final']
const gamePricesPerType = [
	[1320, 880, 550, 220],
	[660, 440, 330, 170],
	[1980, 1320, 880, 330]
]
const dolar = 4.10

let gamePrice
let gameTypeIndex 
let gameStageIndex 
let currency

const userName = prompt('Nome completo: ')
const gameType = prompt(
	'Tipo de jono: IN indica Internacional e DO indica domestico'
)
const gameStage = prompt(
	'Etapa do jogo: SF indica semi-final; DT indica decisao de terciro lugar e FI indica final'
)
const gameCategory = Number(prompt('Categoria: pode ser as opcoes 1, 2, 3 ou 4'))
const ticketsAmount = Number(prompt('Quantidade de ingressos:'))

if ( (userName && 
	gameType && 
	gameStage &&
	gameCategory && 
	ticketsAmount) ) {

	if (gameType === gameTypes[0] ||
		gameType === gameTypes[1] &&
		(gameCategory > 0 &&
		gameCategory <= 4)) {

		if (gameType == 'IN') {
			gameTypeIndex = 0
			currency = 'U$'
		} else {
			gameTypeIndex = 1
			currency = 'R$'
		}

		switch(gameStage) {
			case gameStages[0]: 
				gameStageIndex = 0
				break
			case gameStages[1]:
				gameStageIndex = 1
				break
			case gameStages[2]:
				gameStageIndex = 2
				break
			case gameStages[3]:
				gameStageIndex = 3
				break
			default:
				console.log('Algo se certo esta errado! Chama o suporte')
		}

		gamePrice = gamePricesPerType[gameStageIndex][gameCategory - 1]
		if (!gameTypeIndex) {
			gamePrice /= dolar
		}

	}
	else {
		console.log('Insira um tipo de jogo e categoria valido!')
	}
} else {
	console.log('Insira valores validos!')
}

if (gamePrice) {
	console.log('--- Dados da Compra ---')
	console.log('Nome do cliente: ' + userName)
	console.log('Tipo do jogo: ' + gameTypesDescription[gameTypeIndex])
	console.log('Etapa do jogo: ' + gameStagesDescription[gameStageIndex])
	console.log('Categoria: ' + gameCategory)
	console.log('Quantidade de Ingressos: ' + ticketsAmount)

	console.log('--- Valores ---')
		console.log('Valor do ingresso: ', currency, ' ', gamePrice)
		console.log('Valor total: ', currency, ' ', gamePrice * ticketsAmount)
}
