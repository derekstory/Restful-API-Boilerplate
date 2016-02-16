var Backbone = require('backbone');
var $ = require('jquery');
var HomePage = require('./home');

var Router = Backbone.Router.extend({

    routes: {
        '': 'index'
    },

    index: function() {
        this.loadView(new HomePage());
    },

    loadView : function(view) {
        this.view && this.view.remove();
		this.view = view;
	}

});

module.exports = Router;
