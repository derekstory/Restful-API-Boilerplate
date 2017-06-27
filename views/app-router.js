var Backbone = require('backbone'),
	$ = require('jquery'),
	Navbar = require('./common/navbar'),
	HomeRouter = require('./home/home-router'),
	ApiTestRouter = require('./api-test/api-test-router');

var AppRouter = Backbone.Router.extend({

	initialize: function() {
		new Navbar();
		new HomeRouter();
		new ApiTestRouter();
	},

});


module.exports = AppRouter;
