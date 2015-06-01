/**
 * Created by grodriguesb on 27/05/2015.
 */
(function() {

    'use strict';

    function stationCtrl($scope,StationService) {

        $scope.stations = StationService.getAll();

        $scope.stationName = 'Estação';

    }

    angular.module('kokaosApp.controllers').controller('StationController', stationCtrl);
})();