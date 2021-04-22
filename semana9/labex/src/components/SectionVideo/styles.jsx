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
  grid: repeat(auto-fit, minmax(100px, 1fr)) / 1fr;
  place-items: center;
  gap: 2rem;
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.h2};
`

export const Subtitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.h3};
`

export const VideoContainer = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
`

export const Image = styled.img`
  margin: auto;
  height: 200px;
`
