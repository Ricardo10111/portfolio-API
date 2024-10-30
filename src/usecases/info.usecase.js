const Info = require('../models/info.model')

async function create(info) {
  const newInfo = await Info.create(info)
  return newInfo
}

async function getAll() {
  const allInfo = await Info.find()
  return allInfo
}

module.exports = { create, getAll }
