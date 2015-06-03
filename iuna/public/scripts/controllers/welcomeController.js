(function() {

    'use strict';

    function welcomeCtrl($scope) {

        function createMap() {

            cartodb.createVis('map', 'https://lpiscello.cartodb.com/api/v2/viz/440cf4e8-0982-11e5-9041-0e0c41326911/viz.json', {
                search: false,
                shareable: false
            });
        }

        createMap();
    }

    angular.module('iunaApp.controllers').controller('WelcomeController', welcomeCtrl);
})();