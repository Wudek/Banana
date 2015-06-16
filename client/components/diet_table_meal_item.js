var React = require('react');
var Reflux = require('reflux');
var _ = require('lodash');

var Actions = require('../actions/all_actions');

var MealElementsStore = require('../stores/meal_element_store');

var MealListItem = React.createClass({
	mixins : [Reflux.connect(MealElementsStore, 'mealElements')],
	render : function () {
		var meal = this.props.meal;
		var mealId = meal.id;
		var mealElements = _.filter(_.values(this.state.mealElements), x => x.mealId === mealId);
		return (
			<div>
				<div className="row">
					<div className="col-md-12"><h4>{this.props.meal.name}</h4></div>

					{mealElements.map(function (mealElement) {
						return <div className="col-md-12" key={mealElement.id}>{mealElement.name}</div>;
					})}

					{/*<div className="col-md-3">
						<select className="form-control">
							<option value="" disabled defaultValue>New Meal Element</option>
						</select>
					</div>
					<div className="col-md-9">
					</div>*/}
				</div>
			</div>
		);
	}
});

module.exports = MealListItem;
