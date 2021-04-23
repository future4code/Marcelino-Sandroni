import styled from 'styled-components'
import '@fontsource/roboto'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import {default as MuiContainer} from '@material-ui/core/Container'

const dark = createMuiTheme({
  palette: {
    mode: 'dark',
  }
})

console.log(dark)

export const MainContainer = props => {
  return (
    <ThemeProvider theme={dark}>
      <CssBaseline />
      <MuiContainer maxWidth='lg' >{props.children}</MuiContainer>
    </ThemeProvider>
  )
}