var _ = require('lodash');

var id = 0;
class MealElement {
	constructor(name, mealId) {
		this._name = name;
		this._mealId = mealId;
		this._id = id++;
	}
	get name() {
		return this._name;
	}
	get id(){
		return this._id;
	}
	get mealId(){
		return this._mealId;
	}
}

module.exports = MealElement;

