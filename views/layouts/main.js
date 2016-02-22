var Backbone = require('backbone');
var _ 	     = require('lodash');
var $ 		 = require('jquery');
var template = require('./main.handlebars');

var AppView = Backbone.View.extend({

	initialize: function() {
		this.render();
	},

	render: function(){
		this.$el.empty().append(template());
		return this;
	}
});

module.exports = AppView;
