/**
 * Created by grodriguesb on 01/06/2015.
 */
(function() {

    'use strict';

    function promotionCtrl($scope,PromotionService) {

        $scope.promotions = [];

        PromotionService.getAll().then(function(result) {

            $scope.promotions = result.data;
        });
    }

    angular.module('kokaosApp.controllers').controller('PromotionController', promotionCtrl);
})();