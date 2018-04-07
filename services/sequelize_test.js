const Sequelize = require('sequelize');
const sqlite = new Sequelize('sqlite:/Users/user/workspace/dbTradeProject.db');

module.exports = sqlite, Sequelize