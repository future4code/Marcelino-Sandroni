import * as S from './styles'
import moonImage from 'assets/images/moon-full.png'

const SectionMoon = () => {
  return (
    <S.Container>
      <S.SectionContent>
        <S.Title>Life is a cycle</S.Title>
        <S.Subtitle>The end is the begin</S.Subtitle>
        <S.MoonStagesImage />
        <S.MessageContainer>
          <S.LeftMessage>
            Time pass <S.Strong>fast</S.Strong>
          </S.LeftMessage>
          <S.MoonImage src={moonImage} />
          <S.RightMessage>
            But a new <S.Strong>experience</S.Strong> in another planet, maybe{' '}
            <S.Strong>is</S.Strong> all that you need in your{' '}
            <S.Strong>life</S.Strong>.
          </S.RightMessage>
        </S.MessageContainer>
      </S.SectionContent>
    </S.Container>
  )
}

export default SectionMoon
