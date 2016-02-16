var Backbone = require('backbone');
var $ = require('jquery');
var HomePage = require('./home');
var TestPage = require('./api-test');

var Router = Backbone.Router.extend({

    routes: {
        '': 'index',
        'testing': 'testRoute'
    },

    index: function() {
        this.loadView(new HomePage());
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
