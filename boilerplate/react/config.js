const path = require('path')

require('dotenv').load({
  path: path.resolve(process.env.CONFIG_ENV || '.env')
})

module.exports = {
  publicPath: process.env.WEBPACK_PUBLIC_PATH,
  outputPath: path.resolve(process.cwd(), 'dist')
}
