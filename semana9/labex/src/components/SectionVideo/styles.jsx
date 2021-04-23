import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
`

export const SectionContent = styled.div`
  width: clamp(350px, 80%, 1280px);
  min-height: 100%;
  margin: auto;
  display: grid;
  grid: repeat(auto-fit, minmax(50px, 1fr)) / 1fr;
  place-items: center;
  gap: 1vh;
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.h2};
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  font-weight: bold;
`

export const Subtitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.h3};
  color: ${({ theme }) => theme.colors.text.secondary};
`

export const VideoContainer = styled.div`
  width: clamp(350px, 60vw, 100%);
  aspect-ratio: 16/9;
`

export const Image = styled.img`
  margin: auto;
  width: 20vw;
`
