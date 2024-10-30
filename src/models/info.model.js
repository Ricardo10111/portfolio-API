const mongoose = require('mongoose')

const modelName = 'info'

const infoSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    unique: false
  },
  lastName: {
    type: String,
    required: true,
    unique: false
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: false,
    unique: true
  },
  service: {
    type: String,
    required: true,
    unique: false
  },
  textArea: {
    type: String,
    required: true,
    unique: false
  }
})

module.exports = mongoose.model(modelName, infoSchema)
