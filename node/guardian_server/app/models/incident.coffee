mongoose = require 'mongoose'
Schema = mongoose.Schema
troop = require 'mongoose-troop'

module.exports = ->

  IncidentSchema = new Schema
    name:
      type: String
      required: true
    image:
      type: [String]
    tags:
      type: [
        type:Schema.Types.ObjectId
        ref: 'Tag'
      ]
    categories:
      type: [
        type:Schema.Types.ObjectId
        ref: 'Category'
      ]
    location:
      type: [Number]

  IncidentSchema.index
    location: '2d'

  IncidentSchema.plugin troop.timestamp,
    createdPath: 'created_at'
    modifiedPath: 'updated_at'
    useVirtual: false

  mongoose.model 'Incident', IncidentSchema

