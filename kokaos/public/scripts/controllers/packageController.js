/**
 * Created by grodriguesb on 01/06/2015.
 */
(function() {

    'use strict';

    function packageEditController($scope, PackageService, packageId, $modalInstance,AlertService) {

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
        };

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
    }

    angular.module('kokaosApp.controllers').controller('PackageController', packageCtrl);
})();