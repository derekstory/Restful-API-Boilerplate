var Backbone = require('backbone'),
	_ = require('lodash'),
	$ = require('jquery'),
	template = require('./api-test.handlebars');

var AppView = Backbone.View.extend({

	className: 'api-test',

	initialize: function(options) {
		this.options = options;
	},

	render: function(){
		this.$el.empty().append(template({
			name: this.options.data[0].name
		}));
		return this;
	}

});

module.exports = AppView;
