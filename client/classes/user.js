var _ = require('lodash');

var id = 0;
class User {
	constructor(name) {
		this._name = name;
		this._id = id++;
	}
	get name() {
		return this._name;
	}
	get id(){
		return this._id;
	}
}

module.exports = User;
