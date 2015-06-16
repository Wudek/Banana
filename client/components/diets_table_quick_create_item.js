var React = require('react');
var Reflux = require('reflux');
var _ = require('lodash');

var Actions = require('../actions/all_actions');
var Diet = require('../classes/diet');

var UsersStore = require('../stores/users_store');

var DietsTableItem = React.createClass({
	mixins : [Reflux.connect(UsersStore, 'users')],
	handleDeleteClick : function () {
		Actions.createDiet(new Diet(this.state.dietName, this.state.selectedUserID));
	},
	getInitialState : function () {
		return {
			selectedUserID : null,
			dietName : ''
		};
	},
	onSelectedUserChange : function (e) {
		this.setState(
			{
				selectedUserID : e.target.value
			});
	},
	onDietNameChange : function (e) {
		this.setState(
			{
				dietName : e.target.value
			});
	},
	render : function () {
		var users = _.sortBy(_.values(this.state.users), 'name');
		var dietName = this.state.dietName;
		var selectedUserID = this.state.selectedUserID;
		var isButtonDisabled = _.isEmpty(dietName) || _.isNull(selectedUserID);
		return (
			<tr>
				<td />
				<td>
					<select className="form-control" value={selectedUserID} onChange={this.onSelectedUserChange}>
						<option value="" disabled defaultValue>Select Client</option>
						{users.map(function (user) {
							return <option key={user.id} value={user.id}>{user.name}</option>;
						})}
					</select>
				</td>
				<td>
					<input type="text" className="form-control" id="diet_name" placeholder="Enter diet name" value={dietName} onChange={this.onDietNameChange}/>
				</td>
				<td></td>
				<td>
					<button type="button" className="btn btn-success" onClick={this.handleDeleteClick} disabled={isButtonDisabled}>
						<span className="glyphicon glyphicon-plus"/>
					</button>
				</td>
			</tr>

		);
	}
});

module.exports = DietsTableItem;
