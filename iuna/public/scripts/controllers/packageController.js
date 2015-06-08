(function(){

    function packageCtrl($scope,PackageService, $modal,AlertService, $route) {

        $scope.packages = [];

        PackageService.getAll().then(function(result) {
            $scope.packages = result.data;
        });
    }

    angular.module('iunaApp.controllers').controller('PackageController', packageCtrl);
})();