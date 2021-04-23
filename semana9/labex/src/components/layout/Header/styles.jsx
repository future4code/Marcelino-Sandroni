import styled from 'styled-components'

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: clamp(350px, 80%, 1280px);
  height: 80px;
  color: ${({ theme }) => theme.colors.text.primary || 'black'};
  display: grid;
  grid: 60px / max-content 1fr;
  gap: 10rem;
`

export const Logo = styled.img`
  width: 180px;
`

export const Menu = styled.nav``

export const MenuList = styled.ul`
  list-style: none;
  display: grid;
  grid: 80px / repeat(auto-fit, minmax(100px, 1fr));
  place-items: end center;
`

export const MenuItem = styled.li`
  font-size: ${({ theme }) => theme.typography.h3};
  font-weight: bold;
  padding: ${({ theme }) => theme.spacing(2)};
  /* border: 3px solid white; */
`
