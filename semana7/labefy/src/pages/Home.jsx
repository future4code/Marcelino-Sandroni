import { useState, useEffect, useRef } from 'react'
import { MainContainer } from 'containers/main-container'
import { ListPlaylists } from 'components/ListPlaylists'
import { CreatePlaylists } from 'components/CreatePlaylists'
import { Title } from 'styles/texts'

const Home = ({name}) => {
  const [page, setPage] = useState()
  const audio = useRef()

  const back = value => setPage(value)
  
  const CurrentPage = !page ? ListPlaylists : CreatePlaylists

  return (
    <MainContainer>
      {/* <audio ref={audio} src="http://spoti4.future4.com.br/2.mp3" /> */}
      <Title>Labefy</Title>
      <CurrentPage {...{back}} />
        
    </MainContainer>
  );
}

export default Home;
