var Backbone = require('backbone');
var $        = require('jquery');
var HomePage = require('./home');

var Router   = Backbone.Router.extend({

	routes: {
		'': 'homePage'
	},

	homePage: function() {
		$.get('/api/test-model', function(data) {
			new HomePage({ el: $('#js-boilerplate-app'), data: data }).render();
		});
	}

});

module.exports = Router;
