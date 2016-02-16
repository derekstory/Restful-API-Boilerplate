$(document).ready(function(){var Backbone = require('backbone');

var AppView = Backbone.View.extend({

    initialize: function(){
        this.render();
    },

    render: function(){
        console.log('Yupd');
    }
});

//module.exports = AppView;

var appView = new AppView();

});