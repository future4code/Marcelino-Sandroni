import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'


export const Title = styled(Typography).attrs({
  variant: 'h1'
})`

`

export const InputNumber = styled.input.attrs({
  type: 'number', min: 10, max:100})`

  `