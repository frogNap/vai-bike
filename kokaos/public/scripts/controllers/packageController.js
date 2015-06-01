/**
 * Created by grodriguesb on 01/06/2015.
 */
(function() {

    'use strict';

    function packageCtrl($scope,PackageService) {

        $scope.packages = [];

        PackageService.getAll().then(function(result) {

            $scope.packages = result.data;
        });
    }

    angular.module('kokaosApp.controllers').controller('PackageController', packageCtrl);
})();