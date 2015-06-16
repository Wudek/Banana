var React = require('react');
var Actions = require('../actions/all_actions');

module.exports = React.createClass({

	initialize: function() {},
	handleClick : function(){
		Actions.incrementCounter();
	},
	render: function() {
		return (
			<a className="button" onClick={this.handleClick} >Increment</a>
		);
	}
});
