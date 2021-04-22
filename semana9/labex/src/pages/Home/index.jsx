import * as S from './styles'
import SectionExplore from 'components/SectionExplore'
import SectionMoon from 'components/SectionMoon'
import SectionVideo from 'components/SectionVideo'

const Home = () => (
  <S.Container>
    <SectionExplore />
    <SectionMoon />
    <SectionVideo />
  </S.Container>
)

export default Home
