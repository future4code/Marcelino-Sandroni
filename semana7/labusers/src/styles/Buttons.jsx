import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import {default as Delete} from '@material-ui/icons/HighlightOff';
import {default as Edit} from '@material-ui/icons/Edit';

const PhoneButton = styled(Button)`
  @media(max-width: 500px) {

  }
`
export const PrimaryButton = styled(PhoneButton).attrs({
  variant: 'contained', color: 'primary', size: 'large'
})`
  margin: 0 auto;
`

export const SecondaryButton = styled(PhoneButton).attrs({
  variant: 'contained', color: 'secondary', size: 'large'
})`
  margin: 0 auto;

`

export const DeleteButton = styled(PhoneButton).attrs({
  variant: 'outlined', color: 'secondary', size: 'small', startIcon: <Delete/>
})`
  @media(max-width: 500px) {
    flex-basis: 20%;
    height: 40px;
    margin: 0 5px;
  }
`

export const EditButton = styled(PhoneButton).attrs({
  variant: 'outlined', color: 'secondary', size: 'small', startIcon: <Edit/>
})`
  @media(max-width: 500px) {
    flex-basis: 20%;
    height: 40px;
  }
`