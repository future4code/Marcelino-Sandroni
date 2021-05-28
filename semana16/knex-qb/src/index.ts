import {app} from './server'
import {AddressInfo} from 'net'
import colors from 'colors'

const server = app.listen(3000)
colors.enable()

if (server) {
  const address = server.address() as AddressInfo
  console.log(`Pai tá ON na porta ${address.port}`.green)
} else {
  console.log('Erro iniciando o server!'.red)
}
