import Container from '@material-ui/core/Container'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const dark = createMuiTheme({
  palette: {
    mode: 'dark'
  }
})

export const MainContainer = ({fiote}) => {
  return (
    <ThemeProvider theme={dark}>
    <CssBaseline />
    <Container>
      {fiote}
    </Container>
    </ThemeProvider>
  )
}

