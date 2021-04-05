import { useState, useEffect } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import Slide from '@material-ui/core/Slide'


export const AlertMessage = props => {
  const [open, setOpen] = useState(false)
  const [notification, setNotification] = useState(true)
  const [msg, setMsg] = useState()
  
  useEffect(() => {
    console.log(`open no alert: ${props.open}`)
    if (props.open) {
      setOpen(true)
      props.not ? okAlert() : errorAlert()
      console.log(`chegou aqui`)
      //props.turnOff()
    }
  }, [props.open])

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

  const closeAlert = (e, r) => 
    r !== 'clickaway' && setOpen(false) && props.turnOff()
  
  console.warn(`carregou alert: ${open} props: ${props.open}`)
  return <Snackbar open={open} onClose={closeAlert}
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
}