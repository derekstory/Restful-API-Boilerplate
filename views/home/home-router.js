var Backbone = require('backbone');
var $ = require('jquery');
var HomePage = require('./home');
var sectionRender = require('../section-render');

var Router   = Backbone.Router.extend({

	routes: {
		'': 'homePage'
	},

	homePage: function() {
		$.get('/api/test-model', function(data) {
			sectionRender.main(new HomePage({
				data: data,
				section: 'homepage'
			}));
		});
	}

});

module.exports = Router;
