import { useState, useEffect } from 'react'
import * as labefy from 'utils/apis/labefy'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { useInput } from 'utils/useInput'

export const PlaylistContent = (props) => {
  const [playlist, setPlaylist] = useState({})
  const [input, inputControl] = useInput({
    music: '', link: ''
  })
  
  useEffect(() => {
    labefy.getPlaylistsTracks(props.id).then(r => {
      console.log(r)
      setPlaylist(r)
    })
    console.log(playlist)
  },[])
  
  const addTrack = () => {}
  
  const removeTrack = () => {}
  
  console.log(playlist)

  return (
    <Card>
      <CardContent>
        <Typography>Musicas</Typography>
        
      </CardContent>
    <CardActions>
      
    <TextField
      name='music'
      variant='filled'
      label='Nova Musica'
      value={input.music}
      onChange={inputControl}
    />

    <TextField 
      name='link'
      variant='filled' 
      label='Link da Musica'
      value={input.link}
      onChange={inputControl}
    />

    <Button
      variant='contained' 
      color='secondary'
      onClick={addTrack}
    >
      Adicionar
    </Button>
    <Button variant='contained' color='secondary'
      onClick={() => props.back(false)}
    >
      Voltar
    </Button>
    </CardActions>
    </Card>
  )

}

const PlaylistContainer = styled.div`
  display: flex;
`