
var Backbone = require('backbone');
var $ = require('jquery');
var AppRouter = require('./app-router');

$(function() {

    var conductor = new AppRouter();
    Backbone.history.start();
    // This allows urls to be accessed directly
    conductor.navigate(location.hash, { trigger: true, replace: true });

});
