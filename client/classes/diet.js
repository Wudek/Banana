var _ = require('lodash');

var id = 0;
class Diet {
	constructor(name, userId, calorieCount = 0) {
		this._name = name;
		this._id = id++;
		this._userId = userId;
		this._calorieCount = calorieCount;
	}
	get name() {
		return this._name;
	}
	get id(){
		return this._id;
	}
	get userId(){
		return this._userId;
	}
	get calorieCount(){
		return this._calorieCount;
	}
}

module.exports = Diet;

