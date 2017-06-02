var Backbone = require('backbone');
var $        = require('jquery');
var TestPage = require('./api-test');
var sectionRender = require('../section-render');

var Router = Backbone.Router.extend({

	routes: {
		'testing/:id': 'testRoute'
	},

	testRoute: function (id) {
		$.get('/api/test-model?_id=' + id, function(data) {
			sectionRender.main(new TestPage({ data: data }));
		});
	},

});

module.exports = Router;
