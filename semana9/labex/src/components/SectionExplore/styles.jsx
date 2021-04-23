import styled from 'styled-components'
import backgroundHome from 'assets/images/background-home.png'

export const ContainerBackground = styled.section`
  width: 100%;
  min-height: 100vh;
  background: url(${backgroundHome});
  background-size: cover;
`
export const SectionContainer = styled.div`
  width: clamp(350px, 80%, 1280px);
  margin: auto;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing(1)};
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 3rem;
  padding-top: 80px;
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.h1};
  font-weight: bold;
  width: 60%;
`

export const Message = styled.h2`
  font-size: ${({ theme }) => theme.typography.h2};
  color: ${({ theme }) => theme.colors.text.secondary};
  width: 60%;
`

export const Button = styled.button`
  width: max(350px, 10%);
  height: max(80px, 1vh);
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 3px solid ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.button1};
  text-transform: uppercase;
`
