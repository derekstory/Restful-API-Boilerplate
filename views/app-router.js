var Backbone = require('backbone');
var $ = require('jquery');
var Navbar = require('./common/navbar');
var HomeRouter    = require('./home/home-router');
var ApiTestRouter = require('./api-test/api-test-router');

var AppRouter = Backbone.Router.extend({

	initialize: function() {
		new Navbar();
		new HomeRouter();
		new ApiTestRouter();
	},

});


module.exports = AppRouter;
