import Head from "next/head"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"

import * as S from "../styles/index"

export default function Home() {
  const [move, setMove] = useState(false)
  const [show, setShow] = useState(true)
  const router = useRouter()
  const exitAudio = useRef()
  const hoverAudio = useRef()

  useEffect(() => move && playSound(), [move])
  useEffect(() => !show && changePage, [show])

  const playSound = () => exitAudio.current?.play()

  const changePage = () => {
    setShow(false)
    router.push("/match")
  }

  const renderBox = () => (
    <S.Box
      onClick={() => setMove(true)}
      move={move}
      onAnimationEnd={changePage}
    >
      <S.Subtitle>Let's Match?</S.Subtitle>
      <S.TitleBox onMouseOver={() => hoverAudio.current.play()}>
        <S.Title>AstroMatch</S.Title>
      </S.TitleBox>
    </S.Box>
  )

  return (
    <S.Container>
      <audio ref={exitAudio} src='/exitHome.ogg' />
      <audio ref={hoverAudio} src='/hoverButtonHome.ogg' />
      <Head>
        <title>Astromatch</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {show && renderBox()}
    </S.Container>
  )
}

export async function getStaticProps(context) {
  return {
    props: {},
  }
}
