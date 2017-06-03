var Backbone = require('backbone');
var _        = require('lodash');
var $        = require('jquery');
var template = require('./api-test.handlebars');

var AppView  = Backbone.View.extend({

	initialize: function(options) {
		this.options = options;
	},

	render: function(){
		this.$el.empty().append(template({
			name: this.options.data[0].name
		}));
		return this;
	},

	remove: function() {
		console.log('testing');
		this.remove();
		Backbone.View.prototype.remove.call(this);
	}
});

module.exports = AppView;
