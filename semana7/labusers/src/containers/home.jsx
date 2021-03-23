import { useState, useEffect, useRef } from 'react'
import { MainContainer, InputContainer } from 'styles/Containers'
import { InputName, InputMail } from 'styles/Inputs'
import { Title } from 'styles/Texts'
import { CadastrarButton, ListButton } from 'styles/Buttons'
import Button from '@material-ui/core/Button'
import * as api from 'utils/api'


function Home() {
  const [telinhas, mudarTelinhas] = useState({tela: 'inicio'})
  
  const mudarTelinha = tela => mudarTelinhas({ tela })

  console.log(api.getAll())
  console.log(telinhas)
  //api.createUser('marcelino', 'marcelino.sandroni@gmail.com')
  return <MainContainer>
    <Title>Cadastra ai parcero</Title>
    <InputContainer>
      <InputName label='Nome' />
      <InputMail label='Email' />
      <Button
        variant='contained'
        color='secondary'
        size='large'
        onClick={() => mudarTelinha('lista')}
      >
        Cadastrar
      </Button>
    </InputContainer>
    
    <ListButton>Lista de Users</ListButton>


  </MainContainer>
}

export default Home
