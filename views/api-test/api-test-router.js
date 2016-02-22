var Backbone = require('backbone');
var $        = require('jquery');
var TestPage = require('./api-test');

var Router = Backbone.Router.extend({

	routes: {
		'testing/:id': 'testRoute'
	},

	testRoute: function (id) {
		$.get('/api/test-model?_id=' + id, function(data) {
			new TestPage({ el: $('#js-boilerplate-app'), data: data }).render();
		});
	},

});

module.exports = Router;
