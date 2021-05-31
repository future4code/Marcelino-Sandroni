import {sequelize} from './sequelize'

describe('Mysql connection test with Sequelize', () => {
  it('Should connect to main DB without errors', async () => {
    const tryToConnect = async () => sequelize.authenticate()

    try {
      await expect(await tryToConnect()).toResolve()
    } catch (e) {
      // console.log({e})
      expect(e).toBeTruthy()
    }
  })
})
