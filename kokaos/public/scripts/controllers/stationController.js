/**
 * Created by grodriguesb on 27/05/2015.
 */
(function() {

    'use strict';

    function stationCtrl($scope) {

        $scope.stationName = 'Esta��o';

        $scope.stations = function() {
            StationService.getAll();
        };

    }

    angular.module('kokaosApp.controllers').controller('StationController', stationCtrl);
})();