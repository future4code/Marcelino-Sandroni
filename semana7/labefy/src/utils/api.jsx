import axios from 'axios'

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
axios.defaults.baseURL = baseUrl
axios.defaults.headers.common['Authorization'] = 'marcelino-sandroni-cruz'

const verifyStatus = r => {
  if (r.status >= 200 && r.status <= 201) {
    return r
  } else {
    console.warn(`Algo de certo deu errado: ${r.status} - ${r.statusText}`)
    return -1
  }
}

export const getPlaylists = async () => {
  try {
    const r = await axios.get()
    return verifyStatus(r)
  } catch(e) {
    console.error(e)
  }
}

export const searchPlaylist = async name => {

}

export const newPlaylist = async name => {
  try {
    const r = await axios.post({name})
    return verifyStatus(r)
  } catch(e) {
    console.error(e)
  }

  
}

export const a = 'a'
export const b = 'b'