import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'


export const InputName = styled(TextField).attrs({
  type: 'text'
})`
  width: 80%;
`

export const InputMail = styled(TextField).attrs({
  type: 'email'
})`
  width: 80%;
`