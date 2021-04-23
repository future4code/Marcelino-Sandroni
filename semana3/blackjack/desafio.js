const gameBoard = document.querySelector('.game-board')
const startButton = document.querySelector('.play-button')
const alert = document.querySelector('.alert')
const aces = document.querySelector('.aces')

const cardPack = document.querySelector('.card-pack')

const playerScore = document.querySelector('.player-score')
const computerScore = document.querySelector('.computer-score')
const playerHand = document.querySelector('.player-hand')
const computerHand = document.querySelector('.computer-hand')

let buttonPush, buttonStart, computerTime, round = 0

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

  setTimeout(pushCards('player', 2), 1000)
  setTimeout(pushCards('computer', 2, true), 1000)

  gameBoard.removeEventListener('click', start)
  gameBoard.removeEventListener('keydown', start)
  buttonPush.addEventListener('click', playerPushCards)
  buttonStop.addEventListener('click', computerPushCards)
}

const pushCards = (side = 'player', amount = 1, hide = false) => {
  console.log('Entrou...')
  let array = []
  let element, score

  if (side === 'player') {
    array = playerCards
    element = playerHand
    score = playerScore
    top = 80
    left = 20
  } else {
    array = computerCards
    element = computerHand
    score = computerScore
    top = 20
    left = 80
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
    } else {
      newCard.src = `./png/red_back.png`
    }
    count++



    setTimeout(() => {
      console.log('time1')
      newCard.style.left = '15%'
      newCard.style.top = '36%'

      setTimeout(() => {
        console.log('time2')
        if(side === 'player') {
          newCard.style.left = 20 + i * 4 + '%'
          newCard.style.top = 68 + '%'
        } else {
          newCard.style.left = 60 + i * 4 + '%'
          newCard.style.top = 3 + '%'
        }

        element.append(newCard)
        getScore(side)}, 2000)
        

    }, 2000)
    round++
  }
}

const getScore = side => {
  const scoreReduce = (sum, {valor}) => sum += valor
  let score

  if(side === 'player') {
    score = playerCards.reduce(scoreReduce, 0)
    playerScore.textContent = score
    return score
  }
  else if(!computerTime) {
    score = computerCards.reduce(scoreReduce, 0)
    computerScore.textContent = computerCards[0].valor + ' + ?'
    return score
  } else {
    score = computerCards.reduce(scoreReduce, 0)
    computerScore.textContent = score
    return score
  }
}

const playerPushCards = e => {
  pushCards('player')
  let score = getScore('player')
  console.log(`playerScore: ${score}`)

  if (score > 21) {
    buttonStop.removeEventListener('click', computerPushCards)
    endGame('Computador')
  } else if (score === 21) {
    //computer time
    console.log(`Computer time!`)
    computerPushCards()
  }
}

const computerPushCards = e => {
  buttonPush.removeEventListener('click', playerPushCards)
  buttonStop.removeEventListener('click', computerPushCards)
  unhideCards(computerHand, computerCards)
  computerTime = true
  
  let playerScore = getScore('player')
  let computerScore = getScore('computer')

  while(computerScore <= playerScore) {
    //setTimeout( pushCards(computerHand, computerCards), 1000)
    pushCards('computer')
    computerScore = getScore('computer')
  }

  if(computerScore > playerScore && computerScore <= 21) {
    endGame('Computer')
  } else {
    endGame('Player')
  }
}

const endGame = winner => {
  let endMsg
  if (winner.toLowerCase() === 'player') {
    endMsg = 'Parabéns, você ganhou!'
  } else {
    endMsg = 'Perdeu, tente novamente...'
  }
  let endElement = document.createElement('span')
  endElement.textContent = endMsg
  endElement.classList.add('final-message')
  gameBoard.appendChild(endElement)
  console.log(`End game, winner: ${winner}`)


  let resetButton = document.createElement('button')
  resetButton.classList.add('reset-button')
  resetButton.type = 'button'
  resetButton.textContent = "CLIQUE PARA JOGAR NOVAMENTE"
  gameBoard.appendChild(resetButton)

  resetButton.addEventListener('click', reset)
  // gameBoard.addEventListener('click', reset)
  //gameBoard.onclick = console.log('vamo')
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

const reset = () => {
  console.log('VAMO RESETA!')
  // setTimeout(() => {
  //   playerCards = []
  //   computerCards = []
  //   playerHand.innerHTML = ''
  //   computerHand.innerHTML = ''
  //   setTimeout(start(), 1000)
  // })
}


gameBoard.addEventListener('click', start)
gameBoard.addEventListener('keydown', start)
