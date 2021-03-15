import GlobalStyle from './styled/Global'
import { defaultTheme } from './styled/ThemeConfig'
import { ThemeProvider } from 'styled-components'
import { Container, FlexBox } from './styled/Box'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Container max={1280}>
    <FlexBox size='300px' justify='center'>
    <p>Oi</p>
    <p>Oi</p>
    <p>Oi</p>
    <p>Oi</p>
    <p>Oi</p>
    </FlexBox>

    </Container>


    </ThemeProvider>
  );
}

export default App;
