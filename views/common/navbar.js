var Backbone = require('backbone');
var _ = require('lodash');
var $ = require('jquery');
var template = require('./navbar.handlebars');

var AppView = Backbone.View.extend({

	initialize: function(options) {
		this.options = options;
		this.navbar = $('.navbar');
		this.render();
	},

	render: function(){
		this.navbar.empty().append(template());
		Backbone.Events.on("newSection", this.newSection.bind(this));
		return this;
	},

	newSection: function(section) {
		// Highlight nav option of current section
		this.navbar.find('[data-href]').removeClass('is-selected');
		this.navbar.find('[data-section=' + section + ']').addClass('is-selected');
	}

});

module.exports = AppView;
