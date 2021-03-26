import axios from 'axios'

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
axios.defaults.baseURL = baseUrl
axios.defaults.headers.common['Authorization'] = 'marcelino-sandroni-cruz'


export const pegarTodasPlaylists = async () => {
  try {
    const resultado = await axios.get()
    if (resultado.status >= 200 && resultado.status <= 201) {
      return resultado.data
    } else {
      console.warn(`Algo de certo deu errado: ${resultado.status} - ${resultado.statusText}`)
    }
  } catch(e) {
    console.error(e)
  }
}

export const procurarPlaylists = () => {

}

export const a = 'a'
export const b = 'b'