import { React, useState, useEffect } from 'react'
import Video from './Video'
import getYoutubeVideo from './Youtube'
import styled from 'styled-components'


const MainContent = ({videoAmount}) => {
  const [video = [{title: ''}], setVideo] = useState([])
  
  useEffect( async () => {
      const list = await getYoutubeVideo('video memes', 5)
      setVideo(list)
  }, [])

  const playVideo = e => {
    
  }

  const Section = styled.section`
    display: 'flex';
    flex-flow: 'row wrap';
    justify-content: 'space-evenly';
    align-items: 'center';
    justify-items: 'flex-start';
    font-size: '2rem';
    text-align: 'center';
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