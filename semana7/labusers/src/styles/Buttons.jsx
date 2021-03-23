import styled from 'styled-components'
import Button from '@material-ui/core/Button'

export const CadastrarButton = styled(Button)`
  height: 50px;
`

export const ListButton = styled(Button).attrs({
  variant: 'contained', color: 'primary', size: 'large'
})`
  margin: 0 auto;
`