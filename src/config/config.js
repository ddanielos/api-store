require('dotenv').config()

const config = {
  env: process.env.NODE_ENV || 'development',
  dbPort: process.env.DB_PORT,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD
}

module.exports = { config }