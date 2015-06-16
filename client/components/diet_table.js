var React = require('react');
var Reflux = require('reflux');
var _ = require('lodash');

var UsersStore = require('../stores/users_store');
var MealsStore = require('../stores/meals_store');

var DietTableMealItem = require('./diet_table_meal_item');

var DietsTable = React.createClass({
	mixins: [Reflux.connect(UsersStore, 'users'), Reflux.connect(MealsStore, 'meals')],
	render : function () {

		var diet = this.props.diet;
		var dietId = diet.id;
		var user = this.state.users[diet.userId];
		var meals = _.filter(_.values(this.state.meals), x => x.dietId === dietId);
		console.log('diet_table - render: ', dietId, diet, user, meals);
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-4"> <h3>Name</h3></div>
					<div className="col-md-2"> <h3>Protein</h3></div>
					<div className="col-md-2"> <h3>Fats</h3></div>
					<div className="col-md-2"> <h3>Carbs</h3></div>
					<div className="col-md-2"> <h3>Calories</h3></div>
				</div>

				{meals.map(function(meal) {
					return <DietTableMealItem key={meal.id} meal={meal} />;
				})}
			</div>
			//<table className="table table-responsive">
			//	<thead>
			//		<tr>
			//			<th>Name</th>
			//		</tr>
			//	</thead>
			//	<tbody>
			//		{meals.map(function(meal) {
			//			//return <DietsTableItem key={userDiet.diet.id} user={userDiet.user} diet={userDiet.diet} />;
			//			return <tr><td>{meal.name}</td></tr>;
			//		})}
			//	</tbody>
			//	<tfoot>
			//		<tr>
			//			<td>Total</td>
			//		</tr>
			//	</tfoot>
			//</table>
		);
	}
});

module.exports = DietsTable;
