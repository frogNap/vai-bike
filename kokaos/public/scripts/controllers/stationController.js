/**
 * Created by grodriguesb on 27/05/2015.
 */
(function() {

    'use strict';

    function stationCtrl($scope,StationService) {

        $scope.stationName = 'Estação';

        $scope.stations = StationService.getAll();

    }

    angular.module('kokaosApp.controllers').controller('StationController', stationCtrl);
})();