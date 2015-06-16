var React = require('react');
var DietsTable = require('../components/diets_table');

var DietPage = React.createClass({
	initialize : function () {},
	render : function () {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="panel panel-default">
							<div className="panel-heading">My Diets</div>
							<div className="panel-body">
								<p>...</p>
							</div>
							<DietsTable />
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = DietPage;
