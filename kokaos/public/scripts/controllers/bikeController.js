(function() {

    'use strict';

    function bikeCtrl($scope,BikeService) {

        $scope.listBikes = 'Lista de bikes';
        $scope.bikes = [];

        BikeService.getAll().then(function(result) {

            $scope.bikes = result.data;
        });
    }

    angular.module('kokaosApp.controllers').controller('BikeController', bikeCtrl);
})();