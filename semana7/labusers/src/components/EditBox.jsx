import { InputName, InputMail } from 'styles/Inputs'
import * as api from 'utils/api'
import { EditContainer, InputContainer } from 'styles/Containers'
import { Title } from 'styles/Texts'
import { PrimaryButton, SecondaryButton } from 'styles/Buttons'
import { useInput } from 'utils/useInput'
import { useEffect } from 'react'
import { AlertMessage } from 'components'
import { useState } from 'react'

export function EditBox({id, back}) {
  const [input, setInput, controlInput] = useInput({name: '', email: ''})
  const [resp, setResp] = useState({open: false})
  
  const editUser = () =>
    api.editUser({id, ...input}).then(r => {
      if (!r) {
        setResp({not:true, msg: 'Editado com sucesso!', open:true})
      } else {
        setResp({not:false, msg: 'Deu BO ', open:true})
      }
    })
    
  useEffect( () => {
    const getUserById = () =>
    api.getById(id).then(r => r && setInput({...r}))
    getUserById(id)
  }
  , [id, setInput])
  
  const turnOff = () => {
    setResp({open: false})
  }
  
  //useEffect( () => setResp({open: false}), [resp.open])
  
  console.log(`open no edit: ${resp.open}`)

  return <EditContainer>
      <AlertMessage
        turnOff={turnOff}
        msg={resp.msg} not={resp.not} open={resp.open}
      />
      <Title>Edita ai parça</Title>
      <PrimaryButton onClick={() => back(false)}>
        Fechar
      </PrimaryButton>
      <InputContainer>
        <InputName name='name' label='Novo nominho que tu quer'
        value={input.name} onChange={controlInput} />
        <InputMail name='email' label='Novo email que tu quer'
        value={input.email} onChange={controlInput} />
        <SecondaryButton onClick={editUser} >
          Editar
        </SecondaryButton>
      </InputContainer>
  </EditContainer>
  
}