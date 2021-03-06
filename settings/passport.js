
module.exports = function(passport){

	var LocalStrategy           = require('passport-local').Strategy;
	var User       		        = require('../handler').user;
	var config                  = require('../config');



	// ****************************************** //
	// ********* PASSPORT SESSION SETUP ********* //
	// ****************************************** //

	// used to serialize the user for the session
	passport.serializeUser(function(user, done) {
		done(null, user._id);
	});

	// used to deserialize the user
	passport.deserializeUser(function(id, done) {
		User.findById(id, done);
	});



	// ****************************************** //
	// *********** MAIN LOGIN SETUP ********** //
	// ****************************************** //

	// main login
	passport.use('main', new LocalStrategy({
				usernameField : 'username',
				passwordField : 'password',
				passReqToCallback : true
			},
			function(req, username, password, done) {
				User.login(req, done);
			}
	));


	// ****************************************** //
	// ******* MAIN REGISTRATION SETUP ******* //
	// ****************************************** //

	passport.use('main-register', new LocalStrategy({
				usernameField : 'username',
				passwordField : 'password',
				passReqToCallback : true
			},
			function(req, username, password, done) {
				process.nextTick(function() {
					User.register(req, done);
				});
			}
	));
};