module.exports = (app) ->
  routes = require('./routes')(app)

  app.use '/api', routes.middleware

  return