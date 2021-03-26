import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const dark = createMuiTheme({
  palette: {
    mode: 'dark'
  }
})

const Wraper = styled(Container).attrs({
})`
  width: 80%, minmax(350px, 1280px);
  border: 3px solid tomato;
  /* min-width: 350px;
  max-width: 1280px; */
  margin: 10px auto;
  padding: 2%;
  color: red;
`

export const MainContainer = (props) => {
  return (
    <ThemeProvider theme={dark}>
      <CssBaseline />
      <Wraper>
        {props.children}
      </Wraper>
    </ThemeProvider>
  )
}

