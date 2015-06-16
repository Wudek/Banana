var React = require('react');
var Actions = require('../actions/all_actions');

var Link = require('react-router').Link;

var DietsTableItem = React.createClass({
	handleDeleteClick : function () {
		Actions.deleteDiet(this.props.diet);
	},
	render : function () {
		return (
			<tr>
				<td>
					<Link to="diet" params={{dietId:this.props.diet.id}} className="btn btn-primary">
						<span className="glyphicon glyphicon-edit" />
					</Link>
				</td>
				<td>{this.props.user.name}</td>
				<td>{this.props.diet.name}</td>
				<td>{this.props.diet.calorieCount}</td>
				<td>
					<button type="button" className="btn btn-danger" onClick={this.handleDeleteClick}>
						<span className="glyphicon glyphicon-trash" />
					</button>
				</td>
			</tr>
		);
	}
});

module.exports = DietsTableItem;
