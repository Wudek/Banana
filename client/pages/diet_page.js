var React = require('react');
var Reflux = require('reflux');
var _ = require('lodash');

var DietsStore = require('../stores/diets_store');
var UsersStore = require('../stores/users_store');
var MealsStore = require('../stores/meals_store');

var DietTable = require('../components/diet_table');

var DietPage = React.createClass({
	mixins : [Reflux.connect(DietsStore, 'diets'), Reflux.connect(UsersStore, 'users')],
	contextTypes : {
		router : React.PropTypes.func
	},
	initialize : function () {},
	render : function () {
		var dietId = this.context.router.getCurrentParams().dietId;
		var diet = this.state.diets[dietId];
		if (!diet) {
			return <div />;
		}
		var user = this.state.users[diet.userId];
		console.log('diet page : ', dietId, diet, user);
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="panel panel-default">
							<div className="panel-heading">{user.name} | {diet.name}</div>
							<div className="panel-body">
								<p>...</p>
							</div>
							<DietTable diet={diet}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = DietPage;
