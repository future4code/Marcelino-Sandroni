import {SetupServer} from './infra/http/server'
import {PingController} from './adapters/controllers/ping'

import colors from 'colors'
colors.enable()

const server = new SetupServer(3001)

const ping = new PingController()

server.addControllers(ping)

server.init('Pai ta ON na PORT')
