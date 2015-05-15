/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',
    'selectize',
    'templates'
], function($, _, Backbone, Bootstrap, Selectize, JST) {
    'use strict';

    var SearchView = Backbone.View.extend({
        template: JST['app/scripts/templates/search.ejs'],

        tagName: 'div',

        id: 'search-content',

        el: '#search-content',

        className: '',

        events: {},

        initialize: function() {
            //this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function() {
            this.$el.html(this.template());

            $("#select-car").selectize({
                options: [{
                    id: 'avenger',
                    make: 'dodge',
                    model: 'Avenger'
                }, {
                    id: 'caliber',
                    make: 'dodge',
                    model: 'Caliber'
                }, {
                    id: 'caravan-grand-passenger',
                    make: 'dodge',
                    model: 'Caravan Grand Passenger'
                }, {
                    id: 'challenger',
                    make: 'dodge',
                    model: 'Challenger'
                }, {
                    id: 'ram-1500',
                    make: 'dodge',
                    model: 'Ram 1500'
                }, {
                    id: 'viper',
                    make: 'dodge',
                    model: 'Viper'
                }, {
                    id: 'a3',
                    make: 'audi',
                    model: 'A3'
                }, {
                    id: 'a6',
                    make: 'audi',
                    model: 'A6'
                }, {
                    id: 'r8',
                    make: 'audi',
                    model: 'R8'
                }, {
                    id: 'rs-4',
                    make: 'audi',
                    model: 'RS 4'
                }, {
                    id: 's4',
                    make: 'audi',
                    model: 'S4'
                }, {
                    id: 's8',
                    make: 'audi',
                    model: 'S8'
                }, {
                    id: 'tt',
                    make: 'audi',
                    model: 'TT'
                }, {
                    id: 'avalanche',
                    make: 'chevrolet',
                    model: 'Avalanche'
                }, {
                    id: 'aveo',
                    make: 'chevrolet',
                    model: 'Aveo'
                }, {
                    id: 'cobalt',
                    make: 'chevrolet',
                    model: 'Cobalt'
                }, {
                    id: 'silverado',
                    make: 'chevrolet',
                    model: 'Silverado'
                }, {
                    id: 'suburban',
                    make: 'chevrolet',
                    model: 'Suburban'
                }, {
                    id: 'tahoe',
                    make: 'chevrolet',
                    model: 'Tahoe'
                }, {
                    id: 'trail-blazer',
                    make: 'chevrolet',
                    model: 'TrailBlazer'
                }, ],
                optgroups: [{
                    id: 'dodge',
                    name: 'Dodge'
                }, {
                    id: 'audi',
                    name: 'Audi'
                }, {
                    id: 'chevrolet',
                    name: 'Chevrolet'
                }],
                labelField: 'model',
                valueField: 'id',
                optgroupField: 'make',
                optgroupLabelField: 'name',
                optgroupValueField: 'id',
                optgroupOrder: ['chevrolet', 'dodge', 'audi'],
                searchField: ['model'],
                plugins: ['optgroup_columns']
            });
        }
    });

    return SearchView;
});