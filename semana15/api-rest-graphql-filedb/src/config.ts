const config = {
  name: process.env.npm_package_name?.toUpperCase().replace(/-/g, ' '),
  port: Number(process.env.PORT) || 3001,
  servers: [
    {protocol: 'HTTP', portChange: false},
    {protocol: 'HTTPS', portChange: 100},
    {protocol: 'GRAPHQL', portChange: false}
  ],
  graphql: {
    playground: true
  },
  fileDB: {
    path: process.cwd()
  }
}

export default config
