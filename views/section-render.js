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
		view.render();
		this.el().html(view.$el[0]);
	}
});

var sectionRender = {

	_main: new Section({ el: '#js-boilerplate-app' }),

	main: function(view) {
		return this._main.section(view);
	}

};

_.extend(sectionRender, Backbone.Events);

module.exports = sectionRender;
module.exports.Section = Section;
