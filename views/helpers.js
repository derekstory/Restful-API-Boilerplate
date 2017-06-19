var Backbone  = require('backbone');
var $         = require('jquery');
var AppRouter = require('./app-router');

$(function() {

	var appRouter = new AppRouter();

	/*
	// Make elements act as links without wrapping in an anchor tag
	// 1. give data-attribute "data-href"
	// 2. app " data-href="urlPath" "
	// example: <spandata-href="#linkhere">Linked Text</span>
	*/
	$('body').on('click', '[data-href]', function() {
		var linkedUrl = $(this).data('href');
		appRouter.navigate(linkedUrl, { trigger: true });
	});


	/*
	// Prevent Default
	*/
	$('body').on('click', 'button', function(e) {
		e.preventDefault();
	});


	// Delete Request
	$.delete = function(url, data, callback, type){
		if ( $.isFunction(data) ){
			type = type || callback;
			callback = data;
			data = {};
		}
		return $.ajax({
			url: url,
			type: 'DELETE',
			success: callback,
			data: data,
			contentType: type
		});
	};

});
