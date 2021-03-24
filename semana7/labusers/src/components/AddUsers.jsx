import { useState } from 'react'
import * as api from 'utils/api'
import { InputContainer, Wraper } from 'styles/Containers'
import { InputName, InputMail } from 'styles/Inputs'
import { Title } from 'styles/Texts'
import { PrimaryButton, SecondaryButton } from 'styles/Buttons'
import { useInput } from 'utils/useInput'

export const AddUsers = ({list}) => {
  const [input, setInput, controlInput] = useInput({name: '', email: ''})

  const registerUser = e => api.createUser({...input}).then(r =>
    alert(`cadastrado!`))

  return <Wraper>
      <Title>Cadastra ai parcero</Title>
      <InputContainer>
        <InputName name='name' label='Nome'
        value={input.name} onChange={controlInput} />
        <InputMail name='email' label='Email'
        value={input.email} onChange={controlInput} />
        <SecondaryButton onClick={registerUser} >
          Cadastrar
        </SecondaryButton>
      </InputContainer>
      <PrimaryButton onClick={list}>
        Lista de Users
      </PrimaryButton>
    </Wraper>
}