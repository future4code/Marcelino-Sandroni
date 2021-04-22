import ReactPlayer from 'react-player'
import * as S from './styles'
import earthImage from 'assets/images/earth.png'

const SectionVideo = () => {
  return (
    <S.Container>
      <S.SectionContent>
        <S.Title>The pale blue dot</S.Title>
        <S.Subtitle>Remember your place</S.Subtitle>
        <S.VideoContainer>
          <ReactPlayer
            url='https://www.youtube.com/watch?v=GO5FwsblpT8'
            width='100%'
            height='100%'
          />
        </S.VideoContainer>
        <S.Image src={earthImage} />
      </S.SectionContent>
    </S.Container>
  )
}

export default SectionVideo
