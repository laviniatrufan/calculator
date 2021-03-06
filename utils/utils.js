
exports.login = require('connect-ensure-login');

exports.query = require('querystring');

exports.generateUID = function(length){
	var len = length || 32;
	var uid = [];
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (var i = 0; i < len; ++i) {
		uid.push(chars[getRandomInt(0, chars.length - 1)]);
	}
	return uid.join('');
};

var getRandomInt = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};