import axios from 'axios'

const boredBaseUrl = 'http://www.boredapi.com/api/activity'

axios.defaults.baseURL = boredBaseUrl

const random = async () => {
  try {
    const r = await axios.get()
    return r
  } catch(e) {
    console.error(e)
  }
}

export {random}