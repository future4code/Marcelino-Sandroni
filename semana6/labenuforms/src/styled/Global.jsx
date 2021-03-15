import { createGlobalStyle } from 'styled-components'
import { defaultTheme } from './ThemeConfig'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    background-color: #333;
  }

  body {
    color: white;
  }
`

export default GlobalStyle
