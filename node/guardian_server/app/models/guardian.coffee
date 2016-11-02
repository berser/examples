mongoose = require 'mongoose'
Schema = mongoose.Schema
troop = require 'mongoose-troop'

module.exports = ->

  GuardianSchema = new Schema
    name:
      type: String

  GuardianSchema.plugin troop.timestamp,
    createdPath: 'created_at'
    modifiedPath: 'updated_at'
    useVirtual: false


  mongoose.model 'Guardian', GuardianSchema

