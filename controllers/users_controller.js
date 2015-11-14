var User = require('../models/user.js')

//create action to display all users
function index(req, res) {
	User.find({}, function (err,users){
		if (err) console.log(err)
		res.json(users)
	})
}

//create a new user
function create(req, res) {
	var user = new User()
	user.user_name = req.body.user_name
	user.email = req.body.email
	user.age = req.body.age

	user.save(function(err){
		if (err) console.log(err)
		res.json({success:true, message: 'User created - Hooray!'})
	})

}

//create action to show a single user
function show(req, res) {
	User.find({email: req.params.email}, function(err,user){
		if (err) console.log(err)
		res.json(user)
	})
}

//create action to edit a single user
function update(req, res) {

	//put your code here

}

//create action to delete a single user
function destroy(req, res) {

	//put your code here

}

module.exports = {
	index: index,
	create: create,
	show: show
}
