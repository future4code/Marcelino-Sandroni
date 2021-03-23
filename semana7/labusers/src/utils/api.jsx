import axios from 'axios'

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
const auth = 'marcelino-sandroni-cruz'
const header = {
  Authorization: auth
}
axios.defaults.headers.common['Authorization'] = 'marcelino-sandroni-cruz'

// tentar usar currying
const base = ({method = 'get', params = '', body = ''}) => {
  const url = !params ? baseUrl : baseUrl + params
  
  console.log(url)
  console.log(`body: ${body}`)

  return async () => {
    try {
      const r = await axios({method, url})
      console.log(r.data)
      return r.data
    } catch(e) {
      console.error(e)
    }
  }
  
}
const getAll = base()

const getById = id => base({params: `/${id}`})

const getByNameEmail = (name, email) => {
  if (!name && !email) return

  let param = `search?`
  param += name && !email ? `name=${name}` : `email=${email}`

  return base({body: {name, email}})
}

const createUser = (name, email) => base({body: {name, email}})

export {getAll, getById, getByNameEmail, createUser}