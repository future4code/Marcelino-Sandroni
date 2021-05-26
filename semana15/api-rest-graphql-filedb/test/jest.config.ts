import rootConfig from '../jest.config'
export default {
  ...rootConfig,
  displayName: 'functional test',
  setupFilesAfterEnv: ['./setup.ts'],
  testMath: ['./**/*.test.ts']
}
