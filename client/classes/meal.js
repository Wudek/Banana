var _ = require('lodash');

var id = 0;
class Meal {
	constructor(name, dietId) {
		this._name = name;
		this._id = id++;
		this._dietId = dietId;
	}
	get name() {
		return this._name;
	}
	get id(){
		return this._id;
	}
	get dietId(){
		return this._dietId;
	}
}

module.exports = Meal;

