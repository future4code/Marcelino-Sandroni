import { useRouter } from "next/router"
import styled from "styled-components"

export default function NotFound(props) {
  const router = useRouter()
  return (
    <div>
      <Title>Mals ai, nao achei essa page aew...</Title>
      <Subtitle>
        <Strong>{router.asPath.replace("/", "")}</Strong> NO ECXISTE...
      </Subtitle>
      <HomeButton onClick={() => router.push("/")}>
        Volte pra casinha
      </HomeButton>
    </div>
  )
}

export async function getStaticProps(context) {
  return {
    props: {},
  }
}

const Title = styled.h1`
  font-size: 5rem;
  margin: 10% auto;
  text-align: center;
`

const Subtitle = styled.h2`
  font-size: 4rem;
  margin: 10% auto;
  text-align: center;
`

const Strong = styled.strong`
  font-size: 4rem;
  color: tomato;
`

const HomeButton = styled.button`
  display: block;
  margin: 10% auto;
  font-size: 3rem;
  background-color: #444;
  color: tomato;
  width: clamp(300px, 30%, 500px);
  height: 150px;
  border-radius: 10px;
  border: gold 3px solid;
  cursor: pointer;
`
