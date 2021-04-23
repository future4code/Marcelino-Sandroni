import * as S from './styles'
import logo from 'assets/images/logo.png'

const Footer = () => {
  const menuItems = [
    'Facebook',
    'Instagram',
    'Youtube',
    'Twitter',
    'Linkedin',
    'Privacy Policy',
  ]

  const renderMenuItems = menuItems.map(i => <S.MenuItem>{i}</S.MenuItem>)

  const alt =
    'Imagem escrito labex com o L grande de forma bem estilosa, so confia'

  const src = logo

  return (
    <S.Container>
      <S.Content>
        <S.Logo {...{ src, alt }} />
        <S.Menu>{renderMenuItems}</S.Menu>
      </S.Content>
    </S.Container>
  )
}

export default Footer
