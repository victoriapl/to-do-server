const mongoose = require('mongoose')

const toDoSchema = new mongoose.Schema(
  {
    what: String,
    where: String,
    colour: {
      type: String,
      enum: ['red', 'green', 'yellow']
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = mongoose.model('ToDo', toDoSchema)