(function() {

    'use strict';

    function bikeEditController($scope, BikeService, bikeId, $modalInstance, AlertService, $route, StationService) {

        $scope.bike = {};
        $scope.bike_id = 0;
        $scope.stations = [];
        $scope.selected_station = {};

        BikeService.getById(bikeId)
            .success(function(bike) {
                $scope.bike = bike;
            });

        StationService.getAll().then(function(result) {
            $scope.stations = result.data;
        });

        StationService.getById($scope.bike.estacao_id)
            .success(function(station) {
                $scope.selected_station = station;
            });

        $scope.dismiss = function() {
            $modalInstance.dismiss('cancel');
        };

        $scope.save = function() {
            console.log('SAAAAVE MEEEE!!!');
            $modalInstance.close();
        }

        $scope.updateBike = function () {
            BikeService.update(bikeId, $scope.bike);
            AlertService.addSuccess('Bicicleta atualizada com sucesso!');
            $modalInstance.dismiss('cancel');
            $route.reload();
        };
    }

    function bikeInsertController($scope, BikeService, $modalInstance, AlertService, $route) {

        $scope.bike = {};

        $scope.dismiss = function() {
            $modalInstance.dismiss('cancel');
        };

        $scope.save = function() {
            BikeService.add($scope.bike)
            AlertService.addSuccess('Bicicleta cadastrada com sucesso!');
            $modalInstance.dismiss('cancel');
            $route.reload();
        }
    }

    function bikeCtrl($scope,BikeService, $modal, AlertService, $route) {

        $scope.listBikes = 'Lista de bikes';
        $scope.bikes = [];

        BikeService.getAll().then(function(result) {

            $scope.bikes = result.data;
        });

        $scope.editBike = function(bikeId) {

            var modalInstance = $modal.open({
                templateUrl: '../../templates/views/bike/bikeEdit.html',
                controller: bikeEditController,
                resolve: {
                    bikeId: function () {
                        return bikeId;
                    }
                }
            });

            modalInstance.result.then(function () {
                console.log('CLOSED!');
            }, function () {
                console.log('DISMISSED!');
            });
        }

        $scope.insertBike = function() {

            var modalInstance = $modal.open({
                templateUrl: '../../templates/views/bike/bikeInsert.html',
                controller: bikeInsertController
            });

            modalInstance.result.then(function () {
                console.log('CLOSED!');
            }, function () {
                console.log('DISMISSED!');
            });
        }

        $scope.deleteBike = function(bikeId){
            BikeService.delete(bikeId);
            AlertService.addSuccess('Bicicleta excluida com sucesso!');
            $route.reload();
        };
    }

    angular.module('kokaosApp.controllers').controller('BikeController', bikeCtrl);
})();