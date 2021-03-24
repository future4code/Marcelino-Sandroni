import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

export const Title = styled(Typography).attrs({
  variant: 'h2', component: 'h2'
})`
  text-align: center;
  margin: 50px auto;

  @media(max-width: 500px) {
    font-size: 2rem;
    margin: 0 auto;
    margin-top: 50px;
  }
`