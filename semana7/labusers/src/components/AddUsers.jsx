import * as api from 'utils/api'
import { useState } from 'react'
import { InputContainer, Wraper } from 'styles/Containers'
import { InputName, InputMail } from 'styles/Inputs'
import { Title } from 'styles/Texts'
import { PrimaryButton, SecondaryButton } from 'styles/Buttons'
import { useInput } from 'utils/useInput'
import { UserAlert, SuccessAlert, ErrorAlert } from 'styles/Alert'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import Slide from '@material-ui/core/Slide'

export const AddUsers = ({list}) => {
  const [input, , controlInput] = useInput({name: '', email: ''})
  const [open, setOpen] = useState(false)
  const [notification, setNotification] = useState(true)
  const [msg, setMsg] = useState()

  const registerUser = e => api.createUser({...input})
  .then(r => {
    if (r.status === 500) errorAlert(r)
    else okAlert()
  })
    
  const okAlert = () => {
    setNotification(true)
    setMsg('Cadastrado com sucesso!')
    setOpen(true) 
  }
  
  const errorAlert = ({status, data}) => {
    setNotification(false)
    setMsg(`Deu um erro brabo: ${status} - ${data.message}`)
    setOpen(true) 
  }
  const closeAlert = (e, r) => r !== 'clickaway' && setOpen(false)
  
  console.log(notification, msg, open)

  return <Wraper>
      <Snackbar open={open} onClose={closeAlert}
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        autoHideDuration={6000}
      >
        <MuiAlert variant='filled'
          elevation={6} severity={ notification? 'success' : 'error' }
          onClose={closeAlert}
        >
          {msg}
        </MuiAlert>
      </Snackbar>
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