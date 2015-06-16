var _ = require('lodash');
var Robe = require('robe');
var co = require('co');

var logger = require('./logger');
var server = require('./server');

var db;

exports.start = function() {

	//Test robe
	co(function *() {
		logger.info('connecting to db...');
		db = yield Robe.connect('localhost/db');
		logger.info('connected to db');

		server.start();

		//exports.logUsers();

	}).catch(logger.error);

};

exports.logUsers = function() {

	co(function*() {

		var users = db.collection('user');

		//yield users.remove();
		//yield users.insert({name: 'bob'});
		var results = yield users.find();

		var firstUser = _.first(results);
		logger.info(firstUser);
		//logger.info(firstUser._id.id);
		//logger.info(firstUser.name);
	});
};
