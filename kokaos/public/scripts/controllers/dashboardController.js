(function() {

    'use strict';

    function dashboardCtrl() {

        function createMap() {

            cartodb.createVis('map', 'https://lpiscello.cartodb.com/api/v2_1/viz/8cdfae08-0c12-11e5-b5a2-0e853d047bba/viz.json', {
                search: false,
                shareable: false
            });
        }

        createMap();
    }

    angular.module('kokaosApp.controllers').controller('DashboardController', dashboardCtrl);
})();