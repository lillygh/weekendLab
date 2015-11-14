var usersController = require('../controllers/users_controller.js'),
	express			= require('express'),
	userRoutes		= express.Router()

//create routes for /users
userRoutes.route('/')
	.get(usersController.index)

//create routes for /users/:email
userRoutes.route('/:email')
	.get(usersController.show)

module.exports = userRoutes
