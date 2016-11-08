require('babel-core/register')
require('babel-polyfill')

require('./config')
require('./databases/mongo')

const port = process.env.APP_PORT || 3000
const app = require('./app').default

app.listen(port)
console.log(`App started on port ${port}`)
