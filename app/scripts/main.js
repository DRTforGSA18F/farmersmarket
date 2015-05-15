/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'Bootstrap'
        },
        selectize: {
            deps: ['jquery', 'bootstrap', 'sifter', 'microplugin'],
            exports: 'Selectize'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
        selectize: '../bower_components/selectize/dist/js/selectize',
        sifter: '../bower_components/sifter/sifter',
        microplugin: '../bower_components/microplugin/src/microplugin'
    }
});

require([
    'backbone', 'views/header', 'views/footer', 'views/search', 'views/results'
], function(Backbone, HeaderView, FooterView, SearchView, ResultsView) {
    Backbone.history.start();

    new HeaderView();
    new FooterView();
    new SearchView();
    new ResultsView();

});