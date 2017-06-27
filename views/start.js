var Backbone = require('backbone'),
	$ = require('jquery');
	AppRouter = require('./app-router');

$(function() {
	new AppRouter();
	Backbone.history.start();
});
