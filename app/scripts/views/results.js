/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var ResultsView = Backbone.View.extend({
        template: JST['app/scripts/templates/results.ejs'],

        tagName: 'div',

        id: 'results-content',

        el: '#results-content',

        className: '',

        events: {},

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
        }
    });

    return ResultsView;
});
