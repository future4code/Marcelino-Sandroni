import axios from 'axios'

const APIKey = 'AIzaSyDNzP1D6X-Z_Iclie-EGHU9EGe8ITko-r4'
let videoCount = 1
const URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${videoCount}&key=${APIKey}&q=`

const getYoutubeVideo = async (query = 'random', amount = 1) => {
  try {
    const r = await axios.get(URL)
    const video = []
    
    for (let i of r.data.items) {
      const info = {
        title: i.snippet.title,
        channel: i.snippet.channelTitle,
        image: i.snippet.thumbnails.high.url,
        link: i.id.videoID
      }

      video.push(info)
    }

    return video
  } catch(e) {
    alert('acabou minha quota do youtube, vou por imagens msm')
    console.log(e)

  }
}

export default getYoutubeVideo 