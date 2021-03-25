import axios from 'axios'

const baseURL = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
axios.defaults.baseURL = baseURL
axios.defaults.headers.common['Authorization'] = 'marcelino-sandroni-cruz'

// Base para usar paradigma funcional com CURRYING!
const base = ({method = 'get', url = '', params = '', data = ''}) => {
  return async () => {
    try {
      const r = await axios({method, url, params, data})
      if (r.status >= 200 && r.status <= 204) {
        console.log(`retornando data`)
        return r.data
      } else {
        console.log(`ve o sinal`)
        return r
      }
    } catch(e) {
      console.error('catcha')
      console.error(e)
      return e.response
    }
  }
}

const getAll = base({})

const getById = id => base({url: id})()

const getByNameEmail = ({name, email}) => 
  base({url: 'search', params: {name, email}})()

const createUser = ({name, email}) => 
  base({method: 'post', params: '', data: {name, email}})()

const editUser = ({id, name, email}) =>
  base({method: 'put', url: id, data: {name, email}})()

const deleteUser = id => base({method: 'delete', url: id})()

export { getAll, getById, getByNameEmail, createUser, editUser, deleteUser }