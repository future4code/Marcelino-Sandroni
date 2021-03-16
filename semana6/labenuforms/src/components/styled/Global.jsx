import { createGlobalStyle } from 'styled-components'
import { defaultTheme as theme } from './ThemeConfig'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    background-color: #333;
    color: ${theme.textColor};
  }

  body {
    height: 100vh;
  }
`

export default GlobalStyle
