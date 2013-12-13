express = require 'express'
require 'coffee-script'
fs = require 'fs'
restify = require 'express-restify-mongoose'

env = process.env.NODE_ENV  || 'development'
config = require('./config/config')[env]

mongoose = require 'mongoose'
mongoose.connect config.db

app = express()
app.config = config
app.env = env
app.models = {}
require('./config/express')(app, config)

models_path = __dirname + '/app/models'
fs.readdirSync(models_path).forEach (file) ->
  model = require(models_path + '/' + file)()
  app.models[model.modelName] = model if model.modelName
  restify.serve app, model,
    plural: true,
    lowercase: true

modules = ['api']
for module in modules
  require("./app/#{module}")(app)

app.listen app.get('port')
console.log "Express server listening on port #{app.get('port')}"

exports = module.exports = app