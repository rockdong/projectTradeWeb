const Sequelize = require('sequelize')
const dbConnector = require('../services/db_connect')

const Users = dbConnector.define('users', {
	id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false },
	username: { type: Sequelize.STRING, allowNull: false, primaryKey: true },
	password: { type: Sequelize.STRING, allowNull: false },
	login_type: { type: Sequelize.INTEGER, allowNull: false },
	type: { type: Sequelize.INTEGER, allowNull: false }
}, {
		createdAt: false,
		updatedAt: false
	})

module.exports = Users