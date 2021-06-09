import {getCep} from './services/search-cep'
import {app} from './server'
import db from './database/models'

app.listen(3050, async () => {
  await db.sequelize.sync()
  console.log('database initialized with sequelize')
  console.log('server on in port 3050')
})
