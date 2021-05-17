const http = require('http')
const countries = require('./src/assets/countries')
const [node, filename, ...args] = process.argv
const query = process.argv.slice(2)

// if (!query.length) process.exit(1)

const verifyCountry = (name, query) =>
  name.toLowerCase().includes(query.toLowerCase())

const filterCountry = query =>
  countries.filter(
    country =>
      verifyCountry(country.name, query) || verifyCountry(country.id, query)
  )

// let result
// if (query.length === 1) {
//   result = filterCountry(query[0])
// } else {
//   // result = countries.reduce((list, country) => verifyCountry
//   result = query.reduce((list, item) => [...list, ...filterCountry(item)], [])
// }

// if (!result.length) console.log('Nao achei')
// else console.table(result)

http
  .createServer((req, res) => {
    console.log(
      `new request from ${req.headers.host} endpoint ${req.url} method ${req.method}`
    )
    console.log(req.url.split('/'))
    if (req.method === 'GET' && req.url.includes('/countries')) {
      let query
      if (req.url.includes('?')) {
        query = req.url.slice(req.url.indexOf('?'))
        console.log({query})
        const params = new URLSearchParams(query)
        console.log(`I get this params: ${params.get('name')}`)
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(filterCountry(params.get('name'))))
        return
      }

      if (req.url === '/countries') {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(countries))
      }
      if (/^\/countries\/\./.test(req.url)) {
        const search = req.url.slice(11)
        const filtered = filterCountry(search)
        if (filtered.length) {
          res.writeHead(200, {'Content-Type': 'application/json'})
          res.end(JSON.stringify(filtered, null, 2))
        } else {
          res.writeHead(404, {'Content-Type': 'plain/text'})
          res.end(`Not found country ${search}`)
        }
      }
    } else {
      res.writeHead(404, {'Content-Type': 'plain/text'})
      res.end('Method not supported for this endpoint')
    }
  })
  .listen(3001)

console.warn('listering on port 3001')
