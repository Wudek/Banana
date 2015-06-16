var _ = require('lodash');

var id = 0;
class Food {
	constructor(name, proteinPer100Gram, fatsPer100Gram, carbsPer100Gram) {
		this._name = name;
		this._proteinPer100Gram = proteinPer100Gram;
		this._fatsPer100Gram = fatsPer100Gram;
		this._carbsPer100Gram = carbsPer100Gram;
		this._id = id++;
	}

	get name() {
		return this._name;
	}

	get id() {
		return this._id;
	}

	get proteinPer100Gram() {
		return this._proteinPer100Gram;
	}

	get fatsPer100Gram() {
		return this._fatsPer100Gram;
	}

	get carbsPer100Gram() {
		return this._carbsPer100Gram;
	}
}

module.exports = Food;

