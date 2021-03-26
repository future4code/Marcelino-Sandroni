import { useState, useEffect } from 'react'
import { MainContainer } from 'containers/main-container'
import { ListPlaylists } from 'components/ListPlaylists'
import { CreatePlaylists } from 'components/CreatePlaylists'
import { Title } from 'styles/texts'

import * as labefy from 'utils/api'
import * as youtube from 'utils/apis/youtube'
import * as utilidades from 'utils'

labefy.getPlaylists()


const Home = ({name}) => {
  const [page, setPage] = useState()

  const back = value => setPage(value)
  
  const currentPage = !page ? ListPlaylists : CreatePlaylists
  
  let a, b, c, d
  const function1 = () => {}
  const variavel1 = 10
  const variavel2 = 20

  return (
    <MainContainer>
      <Title>Labefy</Title>
      <currentPage {...{function1, variavel1, variavel2}}/>
      <p>teste</p>
        
    </MainContainer>
  );
}

export default Home;
