/**
 * Created by grodriguesb on 01/06/2015.
 */
(function() {

    'use strict';

    function packageEditController($scope, PackageService, packageId, $modalInstance,AlertService,$route) {

        $scope.package = {};
        $scope.package_id = 0;

        PackageService.getById(packageId)
            .success(function(pack) {

                $scope.package = pack;
            });

        $scope.dismiss = function() {

            $modalInstance.dismiss('cancel');
        };

        $scope.save = function() {
            console.log('SAAAAVE MEEEE!!!');
            $modalInstance.close();
        }

        $scope.updatePackage = function () {
            PackageService.update(packageId, $scope.package);
            AlertService.addSuccess('Pacote atualizado com sucesso!');
            $modalInstance.dismiss('cancel');
            $route.reload();
        };

    }

    function packageInsertController($scope, PackageService, $modalInstance,AlertService, $route) {

        $scope.package = {};

        $scope.dismiss = function() {
            $modalInstance.dismiss('cancel');
        };

        $scope.save = function() {
            PackageService.add($scope.package)
            AlertService.addSuccess('Pacote cadastrado com sucesso!');
            $modalInstance.dismiss('cancel');
            $route.reload();
        }
    }

    function packageCtrl($scope,PackageService, $modal) {

        $scope.packages = [];

        PackageService.getAll().then(function(result) {

            $scope.packages = result.data;
        });

        $scope.editPackage= function(packageId) {

            var modalInstance = $modal.open({
                templateUrl: '../../templates/views/package/packageEdit.html',
                controller: packageEditController,
                resolve: {
                    packageId: function () {
                        return packageId;
                    }
                }
            });

            modalInstance.result.then(function () {
                console.log('CLOSED!');
            }, function () {
                console.log('DISMISSED!');
            });
        }

        $scope.insertPackage = function() {

            var modalInstance = $modal.open({
                templateUrl: '../../templates/views/package/packageInsert.html',
                controller: packageInsertController
            });

            modalInstance.result.then(function () {
                console.log('closed!');
            }, function () {
                console.log('dismissed!');
            });
        }

    }

    angular.module('kokaosApp.controllers').controller('PackageController', packageCtrl);
})();