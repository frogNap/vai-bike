(function() {

    'use strict';

    function stationCtrl($scope,StationService) {

        $scope.stationName = 'Esta��o';
        $scope.stations = [];
        $scope.station = [];

        StationService.getAll().then(function(result) {
            $scope.stations = result.data;
        });

        StationService.getById().then(function(result){
            $scope.station = result.data;
        });
    }

    angular.module('kokaosApp.controllers').controller('StationController', stationCtrl);
})();