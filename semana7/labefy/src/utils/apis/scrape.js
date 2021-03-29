import axios from 'axios'
import interceptor from './interceptor'

const baseURL = 'http://youtube-scrape.herokuapp.com/api/search'
const scrape = axios.create({baseURL})

interceptor(scrape, 'youtube')

export const getVideo = async q => {
  try {
    const r = scrape.get('', {params: {q}})
    return r
  } catch(e) {
    console.log(e)
  }
}