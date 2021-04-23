import * as S from './styles'

const Container = ({ children }) => {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  )
}

export default Container
