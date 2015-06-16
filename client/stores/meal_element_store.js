var Reflux = require('reflux');
var _ = require('lodash');

var Actions = require('../actions/all_actions');

/**
 * A list of all the meal elements
 */
module.exports = Reflux.createStore({

	init: function () {
		this._mealElements = {};
		this.listenTo(Actions.setMealElements, this.onSetMealElements);
	},

	getInitialState: function() {
		return this._mealElements;
	},
	onSetMealElements : function(mealElements){
		this._mealElements = mealElements;
		this.trigger(this._mealElements);
	}
});
