import styled from 'styled-components'
import '@fontsource/roboto'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  },
})

export const MainContainer = ({children: content}) => {
  
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container>{content}</Container>
  </ThemeProvider>
}

export const Wraper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin: 0 auto;
  max-height: 100vh;
  position: relative;
`

export const InputContainer = styled.div`
  width: 50%;
  min-height: 60vh;
  min-width: 350px;
  max-width: 1280px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 50px auto;

  border: 1px solid gold;
`

export const ListContainer = styled(InputContainer)`
  display: flex;
  //flex-flow: row wrap;
  //justify-content: space-around;
  overflow: hidden;
`

export const SecondListContainer = styled(ListContainer)`
  flex-flow: column nowrap;
  border: none;
  width: 100%;
  height: 80%;
  margin: 0;
  padding: 0;
`

export const EditContainer = styled(InputContainer)`
  //background-color: rgba(0,0,0,0.5);
  background-color: #333;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  border: none;

  @media(max-width: 500px) {
    div {
      width: 80%;
      min-width: 330px;
    }
  }
`