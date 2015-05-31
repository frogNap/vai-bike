(function() {

    'use strict';

    function bikeCtrl($scope) {

        $scope.listBikes = 'Lista de bikes';
    }

    angular.module('kokaosApp.controllers').controller('BikeController', bikeCtrl);
})();