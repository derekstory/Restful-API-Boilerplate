var Backbone = require('backbone');
var $ = require('jquery');
var AppRouter = require('./app-router');

$(function() {
	var appRouter = new AppRouter();
	Backbone.history.start();
});
