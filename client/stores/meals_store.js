var Reflux = require('reflux');
var _ = require('lodash');

var Actions = require('../actions/all_actions');

/**
 * A list of all the meals
 */
module.exports = Reflux.createStore({

	init: function () {
		this._meals = {};
		this.listenTo(Actions.setMeals, this.onSetMeals);
	},

	getInitialState: function() {
		return this._meals;
	},
	onSetMeals : function(meals){
		this._meals = meals;
		this.trigger(this._meals);
	}
});
