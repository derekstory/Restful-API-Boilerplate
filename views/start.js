var Backbone  = require('backbone');
var $         = require('jquery');
var AppRouter = require('./app-router');

$(function() {

	var appRouter = new AppRouter();
	Backbone.history.start();
	// Allows urls to be accessed directly
	appRouter.navigate(location.hash, { trigger: true, replace: true });

	/*
	// Make elements act as links without wrapping in an anchor tag
	// 1. give class name ".link-me" 2.
	// 2. app " data-href="urlPath" "
	// example: <span class="link-me" data-href="#linkhere">Linked Text</span>
	*/
	$('body').on('click', '.link-me', function() {
		var linkedUrl = $(this).data('href');
		appRouter.navigate(linkedUrl, { trigger: true });
	});

	/*
	// Prevent Default
	*/
	$('body').on('click', 'button', function(e) {
		e.preventDefault();
	});

});
