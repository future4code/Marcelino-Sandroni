import { useState, useEffect } from 'react'
import { MainContainer } from 'containers/main-container'
import { ListPlaylists } from 'components/ListPlaylists'
import { CreatePlaylists } from 'components/CreatePlaylists'

const Home = () => {
  const [page, setPage] = useState()
  
  const back = (value) => {
    setPage(value)
  }
  
  const currentPage = !page ? ListPlaylists : CreatePlaylists

  return (
    <MainContainer>
      <h1></h1>
      <currentPage back={back} />
        
    </MainContainer>
  );
}

export default Home;
