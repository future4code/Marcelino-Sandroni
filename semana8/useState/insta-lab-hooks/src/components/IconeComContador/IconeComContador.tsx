import styled from "styled-components"

type Props = {
  icone: string
  valorContador: number
  onClickIcone: () => void
}

const IconeComContador: React.FC<Props> = props => {
  return (
    <IconeContainer>
      <img alt={"Icone"} src={props.icone} onClick={props.onClickIcone} />
      <p>{props.valorContador}</p>
    </IconeContainer>
  )
}

const IconeContainer = styled.div`
  display: flex;

  img {
    margin-right: 5px;
  }
`

export default IconeComContador
