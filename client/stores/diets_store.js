var Reflux = require('reflux');
var _ = require('lodash');

var Actions = require('../actions/all_actions');

/**
 * A list of all the diets
 */
module.exports = Reflux.createStore({

	init: function () {
		this._diets = {};
		this.listenTo(Actions.deleteDiet, this.onDeleteDiet);
		this.listenTo(Actions.createDiet, this.onCreateDiet);
		this.listenTo(Actions.setDiets, this.onSetDiets);
	},

	getInitialState: function() {
		return this._diets;
	},

	onDeleteDiet: function (diet) {
		delete this._diets[diet.id];
		this.trigger(this._diets);
	},

	onCreateDiet: function (diet) {
		this._diets[diet.id] = diet;
		this.trigger(this._diets);
	},
	onSetDiets : function(diets){
		this._diets = diets;
		this.trigger(this._diets);
	}
});
