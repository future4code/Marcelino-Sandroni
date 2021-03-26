import { useState, useEffect } from 'react'
import * as api from 'utils/api'

export const CreatePlaylists = (props) => {
  const [inputCriar, setInputCriar] = useState('')

  
  const atualizarInput = e => setInputCriar(e.target.value)
  
  const criar = () => inputCriar && api.newPlaylist(inputCriar)

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