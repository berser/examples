const path = require('path')
const webpack = require('webpack')
const express = require('express')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const config = require('../webpack/dev.config')

const app = express()
const compiler = webpack(config)

app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  noInfo: true,
  silent: true,
  stats: 'errors-only',
}))

app.use(hotMiddleware(compiler))

app.get('*', function (req, res, next) {
  const filename = path.join(compiler.outputPath, 'index.html')
  compiler.outputFileSystem.readFile(filename, function (err, result) {
    if (err) {
      return next(err)
    }

    res.set('content-type', 'text/html')
    res.send(result)
    res.end()
  })
})

app.listen(3000, function (err) {
  if (err) {
    return console.error(err)
  }

  console.log('Listening at http://localhost:3000/')
})
