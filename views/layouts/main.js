var Backbone = require('backbone');
var _ 	     = require('lodash');
var $ 		 = require('jquery');
var template = require('./main.handlebars');

var AppView = Backbone.View.extend({

	tagName: 'body',

	initialize: function() {
		$('body').html(this.el);
		this.render();
	},

	render: function(){
		this.$el.empty().append(template());
		return this;
	}
});

module.exports = AppView;
