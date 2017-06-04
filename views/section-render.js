var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('lodash');

var Section = function(options) {
	this.options = options;
};

_.extend(Section.prototype, Backbone.Events, {

	el: function() {
		return $(this.options.el);
	},

	section: function(view) {
		// Remove the previous view
		this.el().empty();

		// Render the view and attach the events that were dropped on `.empty()`
		view.render().delegateEvents();

		// Show the view
		this.el().append(view.el);
	}

});

var sectionRender = {

	_main: new Section({ el: '.main-content' }),

	_nav: new Section({ el: '.nav-bar' }),

	main: function(view) {
		return this._main.section(view);
	},

	nav: function(view) {
		return this._nav.section(view);
	},

};

_.extend(sectionRender, Backbone.Events);

module.exports = sectionRender;
module.exports.Section = Section;
