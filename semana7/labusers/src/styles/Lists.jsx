import styled from 'styled-components'

export const ListItem = styled.li`
  list-style: none;
  flex-basis: 100%;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 2rem;

  strong {
    flex-grow: 1;
    text-decoration: underline;
    font-size: 1.5rem;
  }
`