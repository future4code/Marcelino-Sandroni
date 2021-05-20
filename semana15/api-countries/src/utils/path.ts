import tsConfig from '../../tsconfig.json'
import * as tsConfigPaths from 'tsconfig-paths'

console.log(tsConfig.compilerOptions.paths)
console.log({ tsConfigPaths })

const baseUrl = tsConfig.compilerOptions.baseUrl
const paths = tsConfig.compilerOptions.paths

const cleanUp = tsConfigPaths.register({
  baseUrl,
  paths,
})

cleanUp()
