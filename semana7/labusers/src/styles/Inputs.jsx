import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'


export const InputName = styled(TextField).attrs({
  type: 'text', label: 'Nome'
})`
  width: 80%;
`

export const InputMail = styled(InputName).attrs({
  type: 'email', label: 'Email'
})`
`

export const InputSearch = styled(InputName).attrs({
  type: 'search', label: 'Pesquisar por nome...'
})`
  width: 50%;
  min-width: 350px;
  margin: 0 auto;

`