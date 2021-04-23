import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  background: linear-gradient(to right, #1d1e1f, #2e3338);
`
export const Content = styled.section`
  width: clamp(350px, 80%, 1280px);
  margin: auto;
  display: grid;
  grid: auto / repeat(auto-fit, minmax(150px, max-content));
  place-items: center;
  place-content: center;
  gap: 2rem;
  padding: ${({ theme }) => theme.spacing(2)};
`

export const Logo = styled.img``

export const Menu = styled.nav``

export const MenuItem = styled.span``
