import http from 'http'
import https from 'https'
import app from './server'

http
  .createServer(app)
  .listen(3001, () => console.log('HTTP server ON port 3001'))
https
  .createServer(app)
  .listen(3002, () => console.log('HTTPS SERVER ON PORT 3001'))
