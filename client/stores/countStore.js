var Reflux = require('reflux');

var Actions = require('../actions/all_actions');


module.exports = Reflux.createStore({

	init: function () {
		this._count = -1;
		this.listenTo(Actions.incrementCounter, this.onIncrementCounter);
	},

	getInitialState: function() {
		return this._count;
	},

	onIncrementCounter: function (data) {
		this._count++;
		this.trigger(this._count);
	}

});
