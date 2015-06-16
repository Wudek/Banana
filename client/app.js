var React = require('react');
var _ = require('lodash');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var HomePage = require('./pages/home_page');
var AboutPage = require('./pages/about_page');
var DietsPage = require('./pages/diets_page');
var DietPage = require('./pages/diet_page');
var Header = require('./components/header');
var Footer = require('./components/footer');

//Generate dummy data
require('./data_generator')();

var App = React.createClass({
	render : function () {
		return (
			<div>
				<Header />
				<main>
					<RouteHandler />
				</main>

			</div>
		);
	}
});

var routes = (
	<Route name="app" path="/" handler={App}>
		<Route name="about" handler={AboutPage}/>
		<Route name="diets" handler={DietsPage}/>
		<Route name="diet" path="diet/:dietId" handler={DietPage}/>
		<DefaultRoute handler={HomePage}/>
	</Route>
);

Router.run(routes, function (Handler) {
	React.render(<Handler/>, document.body);
});
