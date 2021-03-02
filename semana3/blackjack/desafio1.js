
//DESAFIO apenas no console
const style = 'color: tomato; font-size: 24px'
const { log } = console
const msg = text => log(`%c${text}`, style)

log(`%cBem vindo ao jogo de BlackJack! \u{1F92B}`, style)
let response = confirm(`Quer iniciar uma nova rodada? \u{1F914}`)

if(response) {
  let cards = []
  let playerScore = computerScore = 0

  let i = 1
  while (i++ <= 4) cards.push(comprarCarta())

  let hand = cards.map(card => card.texto)
  playerScore = cards[0].valor + cards[1].valor
  computerScore = cards[2].valor + cards[3].valor

  msg(`Usuario - cartas: ${hand[0]} ${hand[1]} - ${playerScore}`)
  msg(`Computador - cartas: ${hand[2]} ${hand[3]} - ${computerScore}`)

  if(playerScore > computerScore) {
    msg(`Usuario ganhou!`)
  } else if (playerScore < computerScore) {
    msg(`Computador ganhou!`)
  } else {
    msg(`Parece que temos um empate...`)
  }
} else {
  msg(`O jogo acabou...`)
}
