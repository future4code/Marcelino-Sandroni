// Classe player (jogador) para gerenciar os metodos e prop dos jogadores
// Tentando praticar o que aprendi de funcoes, objetos e classes
// Estou exportanto esta classe para utilizar no arquivo principal
// Tentando deixar organizado e legivel, que nao eh o meu forte rsrs

// classe Game para gerenciar o jogo
import Game from './game.js'

class Player {
  constructor(name) {
    // variaveis com _ no comeco para poder usar get/set com o msm nome
    
    // Nome do jogador, normalmente user ou computer
    // TODO: implementar escolha de nomes, para ranks no game
    this._name = name

    // Criando os elementos usados no HTML ja no construtor do jogador
    this._hand = document.createElement('div')
    this._hand.classList.add(this._name + '-hand')

    this._score = document.createElement('div')
    this._score.classList.add(this._name + '-score')

    // Jogar na mesa a hand (mao do jogador) e score (pontuacao)
    gameBoard.append(this._hand, this._score)

    // Array com os cards atuais do jogador
    this._cards = Game.pushCards(this._name, 2)
  }
  get name() {
    if (this._name) {
      return this_name
    } else {
      return "Nome desconhecido, deve ser um estranho"
    }
  }
  set name(name) {
    if (this._name) { // TODO: implementar mudanca de nome para refletir no rank
      throw "nome ja foi definido antes, nao pode mudar"
    } else {
      this._name = name
    }
  }

  get score() {
    this._score = this._cards.reduce( (sum, {valor}) => sum += card, 0 )
    return this_score
  }
  set score(value) {
    throw "Score nao pode ser definido manualmente"
  }


}

export default Game
