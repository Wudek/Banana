var Reflux = require('reflux');

var Actions = require('../actions/all_actions');
var User = require('../classes/user');

/**
 * A list of all users
 */
module.exports = Reflux.createStore({

	init: function () {
		this._users = {};
		this.listenTo(Actions.createUser, this.onCreateUser);
		this.listenTo(Actions.deleteUser, this.onDeleteUser);
		this.listenTo(Actions.setUsers, this.onSetUsers);
	},

	getInitialState: function() {
		return this._users;
	},

	onDeleteUser: function (user) {
		delete this._users[user.id];
		this.trigger(this._users);
	},

	onSetUsers: function (users) {
		this._users = users;
		this.trigger(this._users);
	}
});
