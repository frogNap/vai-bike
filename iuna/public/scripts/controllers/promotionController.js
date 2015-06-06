(function(){

    function promotionCtrl($scope,PromotionService, $modal,AlertService, $route) {

        $scope.promotions = [];

        PromotionService.getAll().then(function(result) {
            $scope.promotions = result.data;
        });
    }

    angular.module('kokaosApp.controllers').controller('PromotionController', promotionCtrl);
})();