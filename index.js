require('dotenv').config()
const server = require('./src/server')
const db = require('./src/lib/db')

const PORT = process.env.PORT || 8080

db.connect()
  .then(() => {
    console.log('Connected to database')
    server.listen(PORT, () => {
      console.log(`Server is running in the port ${PORT}`)
    })
  })
  .catch((error) => {
    console.error('Error:', error.message)
  })
