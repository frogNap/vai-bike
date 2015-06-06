(function() {

    'use strict';

    function welcomeCtrl($scope, $location) {

        function createMap() {

            cartodb.createVis('map', 'https://lpiscello.cartodb.com/api/v2_1/viz/15b07824-0c82-11e5-90b5-0e9d821ea90d/viz.json', {
                search: false,
                shareable: false
            });
        }


        $scope.goPromotions = function() {
            $location.url = '#/promotions';
        };

        createMap();
    }

    angular.module('iunaApp.controllers').controller('WelcomeController', welcomeCtrl);
})();