import React from 'react'
import * as api from 'utils/api'

export class CreatePlaylist extends React.Component {
  //api request createuser
  //controlar o input
  
  state = {
    inputCriar: ''
  }
  
  atualizarInput = event => {
    const {value, name} = event.target
    this.setState({ [name]: value })
    
  }
  
  criar = () => {
    
  }

  render() {
    return (

      <div>
        <h1>Criar playlist</h1>
        <input
          name='inputCriar'
          value={this.state.inputCriar}
          onChange={this.atualizarInput} 
        />
        <button onChange={}>Criar</button>
      </div>
    )
  }
}

