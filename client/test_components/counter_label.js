var React = require('react');
var Reflux = require('reflux');
var countStore = require('../stores/countStore');

module.exports = React.createClass({
	//mixins: [Reflux.listenTo(countStore, 'onCountChange')],
	//getInitialState: function () {
	//	return {
	//		count: countStore.count
	//	};
	//},
	mixins: [Reflux.connect(countStore, 'count')],
	onCountChange: function (count) {
		this.setState({
			count: count
		});
	},
	render: function () {
		return (
			<h6>Counter: {this.state.count}</h6>
		);
	}
});
