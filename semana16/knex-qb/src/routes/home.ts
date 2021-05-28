import {Router} from 'express'
import {connection} from '../database/connection'

export const indexRoute = Router()

indexRoute.get('/', async (req, res) => {
  // const count = await connection('Actor')
  //   .select('gender')
  //   .count('* as amount')
  //   .groupBy('gender')

  // res.send(count.map(item => `${item.gender}: ${item.amount}`))

  const [r] = await connection.raw('show tables')
  const tables = r.map((table: any[]) => `<li>${Object.values(table)}</li>`)
  const htmlList =
    tables.reduce((acc: string, item: string[]) => (acc += item), '<ul>') +
    '</ul>'

  res.send(htmlList)
})
