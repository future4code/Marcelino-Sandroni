import * as S from './styles'
import logo from 'assets/images/logo.png'
import useGo from 'hooks/useGo'

const Header = () => {
  const go = useGo()
  const menuItems = ['Home', 'Trips', 'About', 'History', 'Contat']

  const renderMenuItem = () =>
    menuItems.map(item => <S.MenuItem>{item}</S.MenuItem>)

  return (
    <S.Header padding={50}>
      <S.Logo
        src={logo}
        onClick={go.home}
        alt='Labex escrito com fonte grande com o L maior'
      />
      <S.Menu>
        <S.MenuList>{renderMenuItem()}</S.MenuList>
      </S.Menu>
    </S.Header>
  )
}

export default Header
