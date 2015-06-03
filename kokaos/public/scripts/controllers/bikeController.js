(function() {

    'use strict';

    function bikeEditController($scope, BikeService, bikeId, $modalInstance,AlertService) {

        $scope.bike = {};
        $scope.bike_id = 0;

        BikeService.getById(bikeId)
            .success(function(bike) {

                $scope.bike = bike;
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
            AlertService.addSuccess('Bicleta atualizada com sucesso!');
            $modalInstance.dismiss('cancel');
        };

    }

    function bikeCtrl($scope,BikeService, $modal) {

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
    }

    angular.module('kokaosApp.controllers').controller('BikeController', bikeCtrl);
})();