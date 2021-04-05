import { useState } from 'react'
import { MainContainer } from 'styles/Containers'
import { AddUsers, ListUsers } from 'components'

function Home() {
  const [screen, setScreen] = useState(true)
  const ActiveScreen = screen ? AddUsers : ListUsers

  return <MainContainer>
    <ActiveScreen
      list={() => setScreen(false)}
      add={() => setScreen(true)}
    />
  </MainContainer>
}

export default Home