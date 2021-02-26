/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
const gameBoard = document.querySelector('.game-board')
const startButton = document.querySelector('button')
const alert = document.querySelector('.alert')
const aces = document.querySelector('.aces')

const cardPack = document.querySelector('.card-pack')

const playerScore = document.createElement('.player-score')
const computerScore = document.createElement('computer-score')
const playerHand = document.createElement('player-hand')
const computerHand = document.createElement('computer-hand')

let game = {
  player: 0,
  start(event) {
    //console.log(`Clicou no ${event.target.tagName}`)
    startButton.classList.add('invisible')
    alert.classList.add('invisible')
    aces.classList.add('invisible')


  },
  buildDech() {
    []

  }
}

gameBoard.addEventListener('click', game.start)






const getCards = amount => {

  let cards = []
  while(amount--) {
    cards.push(comprarCarta())
  }
  return cards
}

let board = {
  player: {
    cards: [],
    values: [],
    score: 0
    
  },
  dealer: {
    cards: [],
    values: [],
    score: 0
  },
  start() {
  },
  buy(side) {
    const { card, value } = comprarCarta()
    this[side].cards.push(card)
    this[side].values.push(value)
  },
  calcScore() {
    this.player.values.reduce((sum, value) => sum += value, 0)

  },
  verify() { //retorna o vencedor em string, ou false para empate
    //se jogador maior que 21 perdeu
    //senao se pc maior que 21 ganhou
    //senao se se jogador maior que pc ganhou
    //senao se jogador menor que pc perdeu
    //senao empate
    if (this.player.score > 21) {
      return ''

    } else {
        return false
      }

  },
  reset() {
    const empty = { cards: [], values: [], score: 0 }
    Object.assign(this.player, empty)

  }
}
