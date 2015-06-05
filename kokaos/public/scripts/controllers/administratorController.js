(function() {

    'use strict';

    function administratorEditController($scope,AdministratorService,administratorId,$modalInstance,AlertService,$route) {

        $scope.administrator = {};
        $scope.administrator_id = 0;

        AdministratorService.getById(administratorId)
            .success(function(administrator) {
                $scope.administrator = administrator;
            });

        $scope.dismiss = function() {
            $modalInstance.dismiss('cancel');
        };

        $scope.save = function() {
            console.log('SAAAAVE MEEEE!!!');
            $modalInstance.close();
        }

        $scope.updateAdministrator = function () {
            AdministratorService.update(administratorId, $scope.administrator);
            AlertService.addSuccess('Administrador atualizado com sucesso!');
            $modalInstance.dismiss('cancel');
            $route.reload();
        };

    }

    function administratorInsertController($scope,AdministratorService,$modalInstance,AlertService, $route) {

        $scope.administrator = {};

        $scope.dismiss = function() {
            $modalInstance.dismiss('cancel');
        };

        $scope.save = function() {
            AdministratorService.add($scope.administrator)
            AlertService.addSuccess('Administrador cadastrado com sucesso!');
            $modalInstance.dismiss('cancel');
            $route.reload();
        }
    }

    function administratorCtrl($scope, AdministratorService, $modal,AlertService, $route) {

        $scope.administratorName = 'Administrador';
        $scope.administrators = [];

        AdministratorService.getAll().then(function(result) {
            $scope.administrators = result.data;
        });

        $scope.editAdministrator = function(administratorId) {

            var modalInstance = $modal.open({
                templateUrl: '../../templates/views/administrator/administratorEdit.html',
                controller: administratorEditController,
                resolve: {
                    administratorId: function () {
                        return administratorId;
                    }
                }
            });

            modalInstance.result.then(function () {
                console.log('CLOSED!');
            }, function () {
                console.log('DISMISSED!');
            });
        }

        $scope.insertAdministrator = function() {

            var modalInstance = $modal.open({
                templateUrl: '../../templates/views/administrator/administratorInsert.html',
                controller: administratorInsertController
            });

            modalInstance.result.then(function () {
                console.log('closed!');
            }, function () {
                console.log('dismissed!');
            });
        }

        $scope.deleteAdministrator = function(administratorId){
            AdministratorService.delete(administratorId);
            AlertService.addSuccess('Administrador excluido com sucesso!');
            $route.reload();
        };
    }

    angular.module('kokaosApp.controllers').controller('AdministratorController', administratorCtrl);
})();