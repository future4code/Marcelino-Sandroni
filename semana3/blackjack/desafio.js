const gameBoard = document.querySelector('.game-board')
const startButton = document.querySelector('.play-button')
const alert = document.querySelector('.alert')
const aces = document.querySelector('.aces')

const cardPack = document.querySelector('.card-pack')

const playerScore = document.querySelector('.player-score')
const computerScore = document.querySelector('.computer-score')
const playerHand = document.querySelector('.player-hand')
const computerHand = document.querySelector('.computer-hand')

let buttonPush, buttonStart

let playerCards = []
let computerCards = []

const start = target => {
  startButton.classList.add('invisible')
  alert.classList.add('invisible')
  aces.classList.add('invisible')

  let cards = document.createElement('img')
  cards.src = './png/red_back.png'
  cardPack.append(cards)

  buttonPush = document.createElement('button')
  buttonPush.textContent = 'Comprar'
  cardPack.appendChild(buttonPush)

  buttonStop = document.createElement('button')
  buttonStop.textContent = 'Parar'
  cardPack.appendChild(buttonStop)

  pushCards(playerHand, playerCards, 2)
  pushCards(computerHand, computerCards, 2, true)

  playerScore.textContent = playerCards.reduce((sum, {valor}) => sum += valor, 0)
  computerScore.textContent = computerCards[0].valor + ' + ???'
  computerScore.textContent = playerCards.reduce((sum, {valor}) => sum += valor, 0)

  gameBoard.removeEventListener('click', start)
  buttonPush.addEventListener('click', playerPushCards)
  buttonStop.addEventListener('click', computerPushCards)

}

const unhideCards = (element, hand) => {
  element.childNodes.forEach( (img, index) => {
    console.log(`${typeof img.src} => ${img.src} tem black dentro? ${img.src.includes('back')}`)
    if(img.src.includes('red_back')) {
      let cardText = hand[index].texto
      console.log(`Tem red_black na card: ${cardText}`)
      img.src = img.src.replace('red_back', cardText) 
    }
  })
}

const playerPushCards = e => {
  pushCards(playerHand, playerCards)
  score = getPlayerScore()
  playerScore.textContent = score
  if (score > 21) {
    endGame('Computador')
  } else if (score === 21) {
    //computer time
    computerPushCards()
  }
  console.log(score)
}

const endGame = winner => {
  let endMsg
  if (winner === 'player') {
    endMsg = 'Parabéns, você ganhou!'
  } else {
    endMsg = 'Perdeu, tente novamente...'
  }
  let endElement = document.createElement('span')
  endElement.textContent = endMsg
  endElement.classList.add('final-message')
  gameBoard.appendChild(endElement)
  console.log(`End game, winner: ${winner}`)
}

const getPlayerScore = () => {
  return playerCards.reduce((sum, {valor}) => sum += valor, 0)
}

const scoreReduce = (sum, {valor}) => sum += valor
const getScore = side => values.reduce(scoreReduce, 0)

//pegando score do jogador:
//getScore(playerScore)

const computerPushCards = e => {
  buttonPush.removeEventListener('click', playerPushCards)
  unhideCards(computerHand, computerCards)
  pushCards(computerHand, computerCards)
}

const buildDeck = () => {
}

const buildPlayerHand = amount => {
  while(amount--) {
    playerCards.push(comprarCarta())
  }

  for (card of playerCards) {
    let suit = card.texto.charAt(card.texto.length - 1)
    let cardText = card.texto.charAt(0)
    card.texto = card.texto.replace('♦️','D')
    card.texto = card.texto.replace('♥️','H')
    card.texto = card.texto.replace('♣️','C')
    card.texto = card.texto.replace('♠️','S')

    let newCard = document.createElement('img')

    newCard.src = `./png/${card.texto}.png`
    playerHand.append(newCard)

    const naipes = ["♦️", "♥️", "♣️", "♠️"]
  }
}

const buildComputerHand = amount => {
  for (card of computerCards) {
    let suit = card.texto.charAt(card.texto.length - 1)
    let cardText = card.texto.charAt(0)
    card.texto = card.texto.replace('♦️','D')
    card.texto = card.texto.replace('♥️','H')
    card.texto = card.texto.replace('♣️','C')
    card.texto = card.texto.replace('♠️','S')

    let newCard = document.createElement('img')

    newCard.src = `./png/${card.texto}.png`
    playerHand.append(newCard)

    const naipes = ["♦️", "♥️", "♣️", "♠️"]
  }
}

const pushCards = (side = 'player', amount = 1, hide = false) => {
  //computerHand, playerHand
  //computerCards, playerCards
  //computerScore, playerScore
  let array = []
  let element, score
  if (side === 'player') {
    array = playerCards
    element = playerHand
    score = playerScore
  } else {
    array = computerCards
    element = computerHand
    score = computerScore
  }

  let previusValue = array.length || 0
  let count = 0
  if (!amount) count = 1
  else count = amount
  
  while(count--) array.push(comprarCarta())

  for (let i = previusValue; i < array.length; i++) {
    array[i].texto = array[i].texto.replace('♦️','D')
    array[i].texto = array[i].texto.replace('♥️','H')
    array[i].texto = array[i].texto.replace('♣️','C')
    array[i].texto = array[i].texto.replace('♠️','S')

    let newCard = document.createElement('img')
    if (!hide) {
      newCard.src = `./png/${array[i].texto}.png`
    } else if(array.length >= 2 && count === -1) {
      newCard.src = `./png/${array[i].texto}.png`
      //newCard.src = `./png/red_back.png`
    } else {
      newCard.src = `./png/red_back.png`
    }
    element.append(newCard)
    score = getScore(side)
    count++
  }
}

gameBoard.addEventListener('click', start)
