import { InputName, InputMail } from 'styles/Inputs'
import * as api from 'utils/api'
import { EditContainer, InputContainer } from 'styles/Containers'
import { Title } from 'styles/Texts'
import { PrimaryButton, SecondaryButton } from 'styles/Buttons'
import { useInput } from 'utils/useInput'
import { useEffect } from 'react'

export const EditBox = ({id, back}) => {
  const [input, setInput, controlInput] = useInput({name: '', email: ''})
  
  const editUser = () =>
    api.editUser({id, ...input}).then(r => !r && alert('Alterado com sucesso!'))
 
  const getUserById = () => api.getById(id).then(r => r && setInput({...r}))
    
  useEffect(() => getUserById(), [])

  return <EditContainer>
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