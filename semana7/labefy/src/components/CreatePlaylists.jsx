import { useState, useEffect } from 'react'
import * as api from 'utils/api'

export const CreatePlaylists = (props) => {
  const [inputCriar, setInputCriar] = useState('')

  
  const atualizarInput = e => setInputCriar(e.target.value)
  const criar = () => inputCriar && api.newPlaylist(inputCriar)
  
  const lista
  
  const listaFiltrada = lista.filter()
  listaFiltrada = listaFiltrada.filter()
  
  class listinhaFiltrada {
    constructor(list){
      this.todos = list
      this.filtrados = list
      this.filtrar = callback => this.filtrados.filter(callback)
    }
  }
  
  const listaFiltrada = new listinhaFiltrada(list)
  
  listaFiltrada.filtrar(i => i.valor > 10)
  
  

  return (
    <div>
      <h1>Criar playlist</h1>
      <input
        name='inputCriar'
        value={inputCriar}
        onChange={atualizarInput} 
      />
      <button onChange={criar} >Criar</button>
      <button onClick={() => props.back(false)}>Volta</button>
    </div>
  )
}