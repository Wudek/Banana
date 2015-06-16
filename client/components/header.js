var React = require('react');

//var Link = require('react-router-component').Link

var Link = require('react-router').Link;

var Header = React.createClass({

	render : function () {
		return (
			<header>
				<nav className="navbar navbar-default">
					<div className="container-fluid">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-content">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="#">My Site</a>
						</div>
						<div className="collapse navbar-collapse" id="navbar-content">
							<ul className="nav navbar-nav">
								<li><Link to="/">Home</Link></li>
								<li><Link to="/about">About</Link></li>
								<li><Link to="/diets">My Diets</Link></li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		);
	}
});

module.exports = Header;
