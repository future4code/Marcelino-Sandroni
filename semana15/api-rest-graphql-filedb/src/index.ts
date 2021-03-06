import http from 'http'
import https from 'https'
import app from './server'
import colors from 'colors'
import config from './config'

// SOLID
// *
// S => single responsability principle
// O => open closed principle
// L => liskov substitution principle (no fixed dependences)
// I => interface agregation principle
// D => dependence inversion principle (can work with any method)

colors.enable()

const message = (protocol: string, port: number) =>
  console.log(`${protocol} server ON port ${port}`.green)

const setup = (count: number): [number, () => void] => {
  const {port, servers} = config
  const {protocol, portChange} = servers[count]
  const setupPort = portChange ? port + (portChange as number) : port
  return [setupPort, () => message(protocol, setupPort)]
}

const servers = [http.createServer(app), https.createServer(app)]
servers.forEach((server, count) => server.listen(...setup(count)))

console.log(`Server Name: ${config.name}`.blue)
console.log(`Path: ${config.fileDB.path}`.yellow)
