const config = require('./config')

const Sequelize = require('sequelize')
const dbConnector = new Sequelize(config.db.sqlite)

module.exports = dbConnector