var Backbone = require('backbone');
var $ = require('jquery');
var TestPage = require('./api-test');

var Router = Backbone.Router.extend({

    routes: {
        'testing': 'testRoute'
    },

    testRoute: function () {
        this.loadView(new TestPage());
    },

    loadView : function(view) {
        this.view && this.view.remove();
		this.view = view;
	}

});

module.exports = Router;
