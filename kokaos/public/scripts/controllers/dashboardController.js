(function() {

    'use strict';

    function dashboardCtrl($interval) {

        function createMap() {

            cartodb.createVis('map', 'https://lpiscello.cartodb.com/api/v2_1/viz/8cdfae08-0c12-11e5-b5a2-0e853d047bba/viz.json',
                {
                    search: false,
                    shareable: false
                })
                .done(function(vis, layers) {

                    $interval(function() {

                        layers[1].invalidate();
                    }, 10000);
                });
        }

        createMap();
    }

    angular.module('kokaosApp.controllers').controller('DashboardController', dashboardCtrl);
})();