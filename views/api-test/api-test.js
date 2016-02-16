var Backbone = require('backbone');
var _ = require('lodash');
var $ = require('jquery');
var template = require('./api-test.handlebars');

var AppView = Backbone.View.extend({

    className: 'test-page',

    initialize: function() {
        $('body').html(this.el);
        this.render();
    },

    render: function(){
        this.$el.empty().append(template());
        $('#js-boilerplate-app').html('testing');
    }
});

module.exports = AppView;
