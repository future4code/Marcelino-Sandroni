import styled from 'styled-components'
import '@fontsource/roboto'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@background-color': 'tomato'
      }
    }
  }
})

export const MainContainer = ({children: content}) => {
  
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container>{content}</Container>
  </ThemeProvider>
}

export const InputContainer = styled.div`
  width: 50%;
  min-height: 50vh;
  min-width: 350px;
  max-width: 1280px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 50px auto;

  border: 1px solid gold;
`