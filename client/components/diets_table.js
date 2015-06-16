var React = require('react');
var Reflux = require('reflux');

var DietsTableItem = require('./diets_table_item');
var DietsTableQuickCreateItem = require('./diets_table_quick_create_item');
var UserDietsStore = require('../stores/user_diets_store');

var DietsTable = React.createClass({
	mixins: [Reflux.connect(UserDietsStore, 'userDiets')],
	render : function () {
		console.log('diets_table - render : ', this.state);
		var userDiets = this.state.userDiets;
		return (
			<table className="table table-responsive">
				<thead>
					<tr>
						<th />
						<th>Client Name</th>
						<th>Diet Name</th>
						<th>Calories</th>
						<th />
					</tr>
				</thead>
				<tbody>
					<DietsTableQuickCreateItem />
					{userDiets.map(function(userDiet) {
						return <DietsTableItem key={userDiet.diet.id} user={userDiet.user} diet={userDiet.diet} />;
					})}
				</tbody>
			</table>
		);
	}
});

module.exports = DietsTable;
