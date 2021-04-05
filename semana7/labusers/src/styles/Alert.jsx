import { useState } from 'react'
import styled from 'styled-components'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

const useAlert = () => {
  const [open, setOpen] = useState(false)

  return [open, setOpen]
}

const UserAlert = styled(Snackbar).attrs({
  autoHideDuration: 10000, anchorOrigin: {vertical: 'top', horizontal: 'center'}
})``

const Success = styled(MuiAlert).attrs({
  elevation: 6, variant: 'filled', severity: 'success'
})``

const Error = styled(MuiAlert).attrs({
  elevation: 6, variant: 'filled', severity: 'error'
})``

const SuccessAlert = ({open, onClose, children}) =>
  <UserAlert open={open} onClose={onClose}>
    <Success onClose={onClose}>{children}</Success>
  </UserAlert>

const ErrorAlert = ({children}) => <UserAlert><Error>{children}</Error></UserAlert>
  
export { SuccessAlert, ErrorAlert , UserAlert }
