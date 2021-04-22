import Router from 'routes/router'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/global'
import theme from 'styles/theme'
import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Router />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
