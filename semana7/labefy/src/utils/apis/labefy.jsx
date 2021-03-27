import axios from 'axios'

//Coloque o seu nome-sobrenome-turma
const AUTH = 'marcelino-sandroni-cruz'

axios.defaults.baseURL = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
axios.defaults.headers.common['Authorization'] = AUTH

//verificao dos status
const verifyStatus = r => {
  if (r.status >= 200 && r.status <= 201) {
    return r
  } else {
    console.warn(`Algo de certo deu errado: ${r.status} - ${r.statusText}`)
    return -1
  }
}
//method = metodo requisicao: get/post/put/delete
//url: endpoint adicional para ir na baseUrl
//params = parametros a ser passados na url como ?name=etc
//data = body/corpo da requisicao com o dados
const base = ({method = 'get', url = '', params = '', data = ''}) => {
  return async () => {
    try {
    const r = await axios({method, url, params, data})
    return verifyStatus(r)
    } catch(e) {
      console.error(e)
    }
  }
}
export const getPlaylists = base({})
export const searchPlaylist = name => base({url: 'search?', params: {name}})()
export const getPlaylistsTracks = id => base({url: `${id}/tracks`})()
export const createPlaylist = name => base({method: 'post', data: {name}})()
export const addTrackPlaylist = (id,data) => base({url:`${id}/tracks`, data})() 
export const deletePlaylist = id => base({method: 'delete', url: id})
export const removeTrack = (id, track) =>
  base({method: 'delete', url: `${id}/tracks/${track}`})