var Backbone  = require('backbone');
var $         = require('jquery');
var AppRouter = require('./app-router');

$(function() {

	var appRouter = new AppRouter();
	Backbone.history.start();
	// Allows urls to be accessed directly
	appRouter.navigate(location.hash, { trigger: true, replace: true });

});
