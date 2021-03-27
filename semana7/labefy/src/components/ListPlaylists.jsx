import { useState, useEffect } from 'react'
import * as labefy from 'utils/apis/labefy'
import styled from 'styled-components'
import { PlaylistContent } from 'components/PlaylistContent'

//material-ui
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Stack from '@material-ui/core/Stack'

export const ListPlaylists = (props) => {
  const [playlist, setPlaylist] = useState([])
  const [content, setContent] = useState(false)
  
  useEffect(() => {
    labefy.getPlaylists().then(r =>
      r.data && setPlaylist(r.data.result.list)
    )
  }, [])
  
  const openContent = (name) => setContent(name)

  return (
    <ListContainer>
    <Typography align='center' variant='h3'>Lista das playlist</Typography>
    {content && <PlaylistContent play={content} back={openContent} />}
    <List
      direction='row'
      spacing={3}
      justifyContent='center'
    >
        {playlist.map(play => 
          <Item key={play.name}
          onClick={() => openContent({...play})}>
            <Typography variant='h4'>
              {play.name}
            </Typography>
          </Item>
        )}
    </List>
    <AddButton
      variant="contained"
      color="secondary"
      onClick={() => props.back(true)}
    >
      Nova Playlist
    </AddButton>
      
    </ListContainer>
  )
}

const List = styled(Stack)`
  width: 100%;
  height: 50vh;
`

const Item = styled(Paper)`
  flex-basis: 20%;
  height: 10vh;
  text-align: center;
  padding: 20px;
  cursor: pointer;
`

const AddButton = styled(Button)`
  margin: 0 auto;

`

const ListContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
`