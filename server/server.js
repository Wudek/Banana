var koa = require('koa');
//var route = require('koa-route');
var serve = require('koa-static');
var koaLogger = require('koa-logger');
var jsonp = require('koa-jsonp');

var logger = require('./logger');

const port = 3000;

var app = koa();
app.use(koaLogger());
app.use(jsonp());

//Routing
// static file serv
app.use(serve('build'));

module.exports.start = function () {

	app.listen(port);
	logger.info('Listening on port: ' + port);
};


/*
 var parse = require('co-body');
 var db = require('../config/db');
 var wrap = require('co-monk');
 var User = wrap(db.get('user'));

 module.exports = function (app, route) {

 // ALL USERS
 app.use(route.get('/api/user', function *() {
 this.body = yield User.find({});
 }));

 // FIND USER BY ID
 app.use(route.get('/api/user/:id', function *(id) {
 this.body = yield User.find({id: id});
 }));

 // CREATE USER
 app.use(route.post('/api/user', function *(id) {
 var newUser = yield parse(this);
 newUser.createdOn = new Date();
 newUser.updatedOn = new Date();
 this.body = yield User.insert(newUser);
 if (this.body) {
 this.status = 201;
 }
 }));

 // UPDATE USER
 app.use(route.put('/api/user/:id', function *(id) {
 var updatedUser = yield parse(this);
 updatedUser.updatedOn = new Date();
 this.body = yield User.updateById(id, updatedUser);
 }));

 // DELETE USER
 app.use(route.del('/api/user/:id', function *(id) {
 yield User.remove({'_id': id});
 }));

 };

 */
