var Backbone = require('backbone'),
	$ = require('jquery'),
	HomePage = require('./home'),
	sectionRender = require('../section-render');

var Router   = Backbone.Router.extend({

	routes: {
		'': 'homePage'
	},

	homePage: function() {
		$.get('/api/testmodel', function(data) {
			sectionRender.main(new HomePage({
				data: data,
				section: 'homepage'
			}));
		});
	}

});

module.exports = Router;
