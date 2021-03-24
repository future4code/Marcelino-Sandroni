import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import {default as Delete} from '@material-ui/icons/HighlightOff';
import {default as Edit} from '@material-ui/icons/Edit';

export const PrimaryButton = styled(Button).attrs({
  variant: 'contained', color: 'primary', size: 'large'
})`
  margin: 0 auto;
`

export const SecondaryButton = styled(Button).attrs({
  variant: 'contained', color: 'secondary', size: 'large'
})`
  margin: 0 auto;
`

export const DeleteButton = styled(Button).attrs({
  variant: 'outlined', color: 'secondary', size: 'small', startIcon: <Delete/>
})`
`

export const EditButton = styled(Button).attrs({
  variant: 'outlined', color: 'secondary', size: 'small', startIcon: <Edit/>
})`
`