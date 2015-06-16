var Reflux = require('reflux');
var _ = require('lodash');

var Actions = require('../actions/all_actions');
var UserStore = require('./users_store');
var DietsStore = require('./diets_store');

/**
 * A list of objects that has a diet property and a user property which point to the real objects
 */
module.exports = Reflux.createStore({

	init : function () {
		this._userDiets = [];
		this._users = null;
		this._diets = null;
		this.listenTo(UserStore, this.onUserStoreChange);
		this.listenTo(DietsStore, this.onDietsStoreChange);
	},

	getInitialState : function () {
		return this._userDiets;
	},

	refreshData : function () {
		if (this._users && this._diets) {
			var users = this._users;
			this._userDiets = _.map(this._diets, function (diet) {
				return {
					diet : diet,
					user : users[diet.userId]
				};
			});
			console.log('user_diets_store - refreshData : ', this._users, this._diets, this._userDiets);
			this.trigger(this._userDiets);
		}
	},

	onUserStoreChange : function (users) {
		console.log('user_diets_store - onUserStoreChange : ', users);
		this._users = users;
		this.refreshData();
	},

	onDietsStoreChange : function (diets) {
		console.log('user_diets_store - onDietsStoreChange : ', diets);
		this._diets = diets;
		this.refreshData();
	}
});
