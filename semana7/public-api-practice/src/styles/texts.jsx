import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'


const Title = styled(Typography).attrs({
  variant: 'h1', component: 'h1'
})`
  text-align: center;
  flex-basis: 20%;
  @media(max-width: 400px) {
    font-size: 4rem;
  }
`

const SubTitle = styled(Typography).attrs({
  variant: 'subtitle1', component: 'p'
})`
  color: tomato;
`

export {Title, SubTitle}