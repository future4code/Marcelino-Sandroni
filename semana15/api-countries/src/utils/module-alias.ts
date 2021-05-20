// import path from 'path'
// import moduleAlias from 'module-alias'
// import { compilerOptions } from '../../tsconfig.json'

// const root = path.resolve(__dirname, '../..')
// console.log('base', compilerOptions.baseUrl)
// console.log({ root })

// for (const [alias, location] of Object.entries(compilerOptions.paths)) {
//   const target = path.join(root, location[0])
//   console.log(alias, target)
//   moduleAlias.addAlias(alias.replace('*', ''), target.replace('*', ''))
// }

import * as path from 'path'
import moduleAlias from 'module-alias'

const files = path.resolve(__dirname, '../..')

moduleAlias.addAliases({
  '@controller': path.join(files, 'controller'),
  '@test': path.join(files, 'test'),
})
