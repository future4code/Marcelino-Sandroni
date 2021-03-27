import { useState, useEffect } from 'react'
import * as labefy from 'utils/apis/labefy'
import styled from 'styled-components'
import { Title } from 'styles/texts'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

export const CreatePlaylists = (props) => {
  const [inputCriar, setInputCriar] = useState('')
  
  const [input, setInput] = useState({})
  
  const controlInput = e => {
    const {value, name} = e.target
    setInput({ [name]: value })
  }
  
  
  const atualizarInput = e => setInputCriar(e.target.value)
  const criar = () => {

    console.log(inputCriar)
    inputCriar && labefy.createPlaylist(inputCriar)
  }

  return (
    <AddContainer>
      <Typography align='center' variant='h3'>Criar playlist</Typography>
      <TextField
        variant='filled'
        label='Nova Play'
        name='criar'
        value={inputCriar}
        onChange={atualizarInput} 
      />
      <Button variant='contained' color='secondary' onClick={criar} >Criar</Button>
      <Button variant='contained' color='secondary' onClick={() => props.back(false)}>Volta</Button>
    </AddContainer>
  )
}

const AddContainer = styled.div`
  margin: 0 auto;
  width: 50%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: schretch;
`