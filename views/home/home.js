var Backbone = require('backbone');
var _ = require('lodash');
var $ = require('jquery');
var template = require('./home.handlebars');

var AppView = Backbone.View.extend({

    initialize: function() {
        $('#js-boilerplate-app').html(this.el);
    },

    render: function(){
        this.$el.empty().append(template());
    }
    
});

module.exports = AppView;
