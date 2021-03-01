// Incorporando o naomexer dentro da classe Game para controlar a board
import comprarCarta from './naoMexer.js'

class Game {
  //some information first
  static name = 'Black Jack'
  static version = '0.01'
  static author = 'Marcelino Sandroni'
  static github = 'https://github.com/marcelinosandroni/blackjack'

  //primary properties
  static round = 0
  static board = this.createElement('div', 'game-board')

  // dinheiro na banca, TODO:implementar apostas, allin or nothing xd
  static cash = 1000

  // the players, TODO: implement multiplayer 1 - 4 players at same time
  static player1
  static player2
  static player3
  static player4

  static dealer

  static start() {
    // distribuir cartas, contar score, montar tudo na tela

  }

  static createElement(tagName, ...classList) {
    let element = document.createElement(tagName)
    element.classList.add(...classList)
  }

  static pushCards(player, amount) {
  }
}
