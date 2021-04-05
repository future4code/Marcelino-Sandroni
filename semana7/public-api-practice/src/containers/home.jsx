import { MainContainer } from 'containers/main-container'
import { Title, SubTitle, Container } from 'styles'
import { useEffect, useState } from 'react'
import { bored } from 'utils/api'

import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import {default as stack} from '@material-ui/core/Stack';

import {default as card} from '@material-ui/core/Card'
import {default as cardActions} from '@material-ui/core/CardActions'
import {default as cardContent} from '@material-ui/core/CardContent'
import {default as button} from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Button = styled(button)`
  display: block;
  margin: 20px auto;
`

const Stack = styled(stack)`
  height: 65vh;
  width: 100%;
`
const Card = styled(card)`
  flex-basis: 32%;
  display: flex;
  flex-flow: column;
  align-items: center;
`

const CardContent = styled(cardContent)`
  flex-basis: 80%;
  display: grid;
  grid: 

`
const CardActions = styled(cardActions)`
  flex-basis: 20%;
`

const Item = styled(Paper).attrs({
  elevation: 3,
  


})`
  
`

export default function Home() {
  //const [page, setPage] = useState()
  const [data, setData] = useState(['', '', ''])
  const [next, setNext] = useState(false)
  
  const random = (pos) => {
    bored.random().then(r => {
      if (r.status === 200) {
        const verify = () => {
          const d = [...data]
          if (!data[0] || pos === 0) {
            d.splice(0, 1, r.data)
            return d
          }
          if (!data[1] || pos === 1) {
            d.splice(1, 1, r.data)
            return d
          }
          if (!data[2] || pos === 2) {
            d.splice(2, 1, r.data)
            return d
          }
        }
        setData(verify())
      } else {
        const {status, statusText} = r
        setData({status, statusText})
      }
    })
  }
  
  useEffect(() => {
    if (next) {
      setData(['', '', ''])
      setNext(false)
    }
  }, [next])
  
  useEffect(() => {
    if (!data[2]) {
      random()
    }
  }, [data])

  //let showData = []
  
  // for (let key in data) {
  //   showData = [...showData, {name: key, desc: data[key]}]
  // }
  console.log(data)
  
  const showData = data.map((item, index) =>
    (
      <Card>
      <CardContent>
        <Typography variant='h3'>
          {item.activity}
        </Typography>
        <Typography>
          {item.type}
        </Typography>
        <Typography>
          {item.participants}
        </Typography>
        <Typography>
          {item.price}
        </Typography>
        <Typography>
          {item.accessibility}
        </Typography>
      {/* {Object.entries(item).map(i => (
        <SubTitle key={i.[0]}>{i.[0]}: {i.[1]}</SubTitle>
      ))} */}
      </CardContent>
      <CardActions>
        <Button variant='contained' color='secondary'
          onClick={() => random(index)}
        >
          Another One
        </Button>
      </CardActions>
      </Card>
    )
  )

  return (
    <MainContainer>
      <Container>
      <Title>Bored? No more!</Title>
      {/* <p>{page}</p> */}
      <Stack direction='row' justifyContent='space-between'>
        {showData}
      </Stack>
      <Button
        variant='contained' color='primary' size='large'
        onClick={() => setNext(true)}
      >
        Something else plox
      </Button>
      </Container>
    </MainContainer>
  );
}