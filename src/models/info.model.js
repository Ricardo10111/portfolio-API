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
    unique: false
  },
  phoneNumber: {
    type: String,
    value: '',
    required: false,
    unique: false
  },
  service: {
    type: String,
    required: true
  },
  textArea: {
    type: String,
    value: '',
    required: false
  }
})

module.exports = mongoose.model(modelName, infoSchema)
