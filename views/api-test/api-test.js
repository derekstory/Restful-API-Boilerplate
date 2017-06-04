var Backbone = require('backbone');
var _ = require('lodash');
var $ = require('jquery');
var template = require('./api-test.handlebars');

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
