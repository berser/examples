mongoose = require 'mongoose'
Schema = mongoose.Schema
troop = require 'mongoose-troop'

module.exports = ->

  TagSchema = new Schema
    name:
      type: String
      required: true

  TagSchema.plugin troop.timestamp,
    createdPath: 'created_at'
    modifiedPath: 'updated_at'
    useVirtual: false

  mongoose.model 'Tag', TagSchema

