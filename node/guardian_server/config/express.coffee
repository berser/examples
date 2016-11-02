express = require 'express'

module.exports = (app) ->
  port = app.config.port  || 3000
  app.set 'showStackError', true

  app.set 'port', port
  app.use express.logger('dev')
  app.use express.bodyParser()
  app.use express.methodOverride()
  app.use express.static("#{app.config.root}/public")



