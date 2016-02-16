var Backbone = require('backbone');
var _ = require('lodash');
var $ = require('jquery');
var template = require('./home.handlebars');

var AppView = Backbone.View.extend({

    tagName: 'section',

    className: 'home-page',

    initialize: function() {
        $('body').html(this.el);
        this.render();
    },

    render: function(){
        this.$el.empty().append(template());
    }
});

module.exports = AppView;
