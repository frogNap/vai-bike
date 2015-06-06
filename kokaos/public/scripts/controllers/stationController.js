(function() {

    'use strict';

    function stationEditController($scope, StationService, stationId, $modalInstance,AlertService, $route) {

        $scope.station = {};
        $scope.station_id = 0;

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

        $scope.updateStation = function () {
            StationService.update(stationId, $scope.station);
            AlertService.addSuccess('Estacao atualizada com sucesso!');
            $modalInstance.dismiss('cancel');
            $route.reload();
        };
    }

    function stationInsertController($scope, StationService, $modalInstance,AlertService, $route) {

        $scope.station = {};

        $scope.dismiss = function() {
            $modalInstance.dismiss('cancel');
        };

        $scope.save = function() {
            StationService.add($scope.station)
            AlertService.addSuccess('Estacao cadastrada com sucesso!');
            $modalInstance.dismiss('cancel');
            $route.reload();
        }
    }

    function stationCtrl($scope, StationService, $modal,AlertService, $route) {

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

        $scope.insertStation = function() {

            var modalInstance = $modal.open({
                templateUrl: '../../templates/views/station/stationInsert.html',
                controller: stationInsertController
            });

            modalInstance.result.then(function () {
                console.log('closed!');
            }, function () {
                console.log('dismissed!');
            });
        }

        $scope.deleteStation = function(stationId){
            StationService.delete(stationId);
            AlertService.addSuccess('Estacao excluida com sucesso!');
            $route.reload();
        };
    }

    angular.module('kokaosApp.controllers').controller('StationController', stationCtrl);
})();