var Reflux = require('reflux');
var _ = require('lodash');

var Actions = require('../actions/all_actions');

/**
 * A list of all the foods
 */
module.exports = Reflux.createStore({

	init : function () {
		this._foods = {};
		this.listenTo(Actions.setFoods, this.onSetFoods);
	},

	getInitialState : function () {
		return this._foods;
	},

	onSetFoods : function (foods) {
		this._foods = foods;
		this.trigger(this._foods);
	}
});
