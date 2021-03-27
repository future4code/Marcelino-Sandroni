import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const dark = createMuiTheme({
  palette: {
    type: 'dark',
    mode: 'dark',
  }
})

console.log(dark)

const Wraper = styled(Container).attrs({
})`
  width: 80%, minmax(350px, 1280px);
  height: 100vh;
  border: 3px solid tomato;
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

