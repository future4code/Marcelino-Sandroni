import styled from 'styled-components'
import backgroundHome from 'assets/images/background-home.png'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${backgroundHome});
  background-size: 100%;
`

export const Content = styled.main`
  width: clamp(350px, 80%, 1280px);
  margin: auto;
  padding: ${({ theme }) => theme.spacing(1)};
`
