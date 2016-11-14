const path = require('path')
const express = require('express')
const compression = require('compression')
const config = require('../config')

const app = express()
app.use(compression());
app.use(config.publicPath, express.static(config.outputPath));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(config.outputPath, 'index.html'))
})

app.listen(3000, function (err) {
  if (err) {
    return console.error(err)
  }

  console.log('Listening at http://localhost:3000/')
})
