import './utils/module-alias'
import app from './server'
import colors from 'colors'

colors.enable()

enum CONFIG {
  PORT = 3001,
  MESSAGE = 'App listering',
}

app.listen(CONFIG.PORT, () => {
  console.log(`${CONFIG.MESSAGE} on port ${CONFIG.PORT}`.blue)
})
