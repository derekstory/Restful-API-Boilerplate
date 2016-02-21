var Backbone = require('backbone');
var _ = require('lodash');
var $ = require('jquery');
var template = require('./home.handlebars');


var TestModel = Backbone.Model.extend({
    urlRoot: '/api/test-model'
});

var AppView = Backbone.View.extend({

    events: {
        'click button': 'postTest'
    },

    initialize: function() {
        $('#js-boilerplate-app').html(this.el);
    },

    render: function(){
        this.$el.empty().append(template());
    },

    postTest: function(){
        var value = $('input[name="test"]').val();
        var name = new TestModel({ "name": value });
        name.save(null , {
            success: function (newModel) {
                console.log("Name added! ID is " + newModel.attributes._id);
            }
        });
    }

});

module.exports = AppView;
