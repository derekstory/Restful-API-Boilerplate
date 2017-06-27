var Backbone = require('backbone');
	$ = require('jquery'),
	TestPage = require('./api-test'),
	sectionRender = require('../section-render');

var Router = Backbone.Router.extend({

	routes: {
		'testing/:id': 'testRoute'
	},

	testRoute: function (id) {
		$.get('api/testitem/?id=' + id, function(data) {
			sectionRender.main(new TestPage({ data: data, section: 'testpage' }));
		});
	},

});

module.exports = Router;
