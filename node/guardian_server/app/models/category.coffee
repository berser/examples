mongoose = require 'mongoose'
Schema = mongoose.Schema
troop = require 'mongoose-troop'

module.exports = ->

  CategorySchema = new Schema
    name:
      type: String
      required: true
    description:
      type: String
      required: true

  CategorySchema.plugin troop.timestamp,
    createdPath: 'created_at'
    modifiedPath: 'updated_at'
    useVirtual: false

  mongoose.model 'Category', CategorySchema

