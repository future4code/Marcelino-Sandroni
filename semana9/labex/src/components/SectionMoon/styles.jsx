import styled from 'styled-components'
import moonStages from 'assets/images/moon-stages.png'
import moonStagesCropped from 'assets/images/moon-stages-cropped.png'

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #1a110c;
`

export const SectionContent = styled.div`
  width: clamp(350px, 80%, 1280px);
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  gap: 2rem;
  padding: 5rem;
  text-transform: uppercase;
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.h1};
  text-align: center;
`

export const Subtitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.h2};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
`

export const MoonStagesImage = styled.img`
  width: 100%;
  height: 200px;
  background: url(${moonStagesCropped});
  background-size: cover;
  border: none;
`

export const MessageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  place-items: center;
`

export const LeftMessage = styled.p`
  font-size: ${({ theme }) => theme.typography.h3};
  font-height: bold;
`

export const MoonImage = styled.img`
  width: 100%;
`

export const RightMessage = styled.p`
  font-size: ${({ theme }) => theme.typography.body1};
`

export const Strong = styled.strong`
  color: ${({ theme }) => theme.colors.primary};
`
