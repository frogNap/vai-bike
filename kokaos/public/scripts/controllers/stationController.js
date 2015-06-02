(function() {

    'use strict';

    function stationCtrl($scope,StationService) {

        $scope.stationName = 'Estação';
        $scope.stations = [];
        $scope.id_estacao = 0;
        $scope.station = stationCtrl.getById(id_estacao);

        StationService.getAll().then(function(result) {
            $scope.stations = result.data;
        });

        StationService.getById(id).then(function(result){
            $scope.station = result.data;
        });
    }

    angular.module('kokaosApp.controllers').controller('StationController', stationCtrl);
})();