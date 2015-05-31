(function() {

    'use strict';

    function stationCtrl($scope,StationService) {

        $scope.stationName = 'Estação';
        $scope.stations = [];

        StationService.getAll().then(function(result) {

            $scope.stations = result.data;
        });
    }

    angular.module('kokaosApp.controllers').controller('StationController', stationCtrl);
})();