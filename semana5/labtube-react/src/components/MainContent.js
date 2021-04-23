import { React, useState, useEffect } from 'react'
import Video from './Video'
import getYoutubeVideo from './Youtube'
import styled from 'styled-components'


const MainContent = ({videoAmount}) => {
  const [video = [{title: ''}], setVideo] = useState([])
  
  useEffect( () => {
    const getVideos = async () => {
      const list = await getYoutubeVideo('video memes', 5)
      if(list) setVideo(list)
      else sendImages()
    }
    getVideos()
  }, [])

  const playVideo = e => {
    
  }
  
  const sendImages = () => {
    const videoImage = []
    
    for (let i = 0; i < 8; i++) {
      const info = {
        title: 'title' + i,
        channel: '',
        image: 'https://picsum.photos/300/300?a=' + i,
        link: ''
      }
      videoImage.push(info)
    }
    
    console.log(videoImage)
    setVideo(videoImage)
  }

  const Section = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    justify-items: flex-start;
    font-size: 2rem;
    text-align: center;
  
    & div {
      display: flex;
      flex-flow: column;
    }
  `

  return <Section>
      {video.map((item, index) => (
        <Video title={item.title}
        image={item.image}
        link={item.link}
        onMouseOver={playVideo}
        key={index}/>
      ))}
    </Section>
}

export default MainContent