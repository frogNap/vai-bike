(function() {

    'use strict';

    function stationEditController($scope, StationService, stationId, $modalInstance) {

        $scope.station = {};

        StationService.getById(stationId)
            .success(function(station) {

                $scope.station = station;
            });

        $scope.dismiss = function() {

            $modalInstance.dismiss('cancel');
        };

        $scope.save = function() {

            console.log('SAAAAVE MEEEE!!!');
            $modalInstance.close();
        }
    }

    function stationCtrl($scope, StationService, $modal) {

        $scope.stationName = 'Estação';
        $scope.stations = [];

        StationService.getAll().then(function(result) {
            $scope.stations = result.data;
        });

        $scope.editStation = function(stationId) {

            var modalInstance = $modal.open({
                templateUrl: '../../templates/views/station/stationEdit.html',
                controller: stationEditController,
                resolve: {
                    stationId: function () {
                        return stationId;
                    }
                }
            });

            modalInstance.result.then(function () {
                console.log('CLOSED!');
            }, function () {
                console.log('DISMISSED!');
            });
        }
    }

    angular.module('kokaosApp.controllers').controller('StationController', stationCtrl);
})();