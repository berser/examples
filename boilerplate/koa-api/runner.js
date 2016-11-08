require('babel-core/register')
require('babel-polyfill')

const server = require('./server').default
const config = require('./config').server

server.listen(config.port, () => {
  console.log(`Server listen at port ${config.port}`)
})
