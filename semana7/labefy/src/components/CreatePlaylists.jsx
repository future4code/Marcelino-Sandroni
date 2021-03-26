import { useState, useEffect } from 'react'
import * as api from 'utils/api'
import { Title } from 'styles/texts'

export const CreatePlaylists = (props) => {
  const [inputCriar, setInputCriar] = useState('')
  
  const [input, setInput] = useState({})
  
  const controlInput = e => {
    const {value, name} = e.target
    setInput({ [name]: value })
  }
  
  
  const atualizarInput = e => setInputCriar(e.target.value)
  const criar = () => inputCriar && api.newPlaylist(inputCriar)

  return (
    <div>
      <h1>Criar playlist</h1>
      <input
        name='criar'
        value={inputCriar}
        onChange={atualizarInput} 
      />
      <button onChange={criar} >Criar</button>
      <button onClick={() => props.back(false)}>Volta</button>
    </div>
  )
}