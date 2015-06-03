/**
 * Created by grodriguesb on 01/06/2015.
 */
(function() {

    'use strict';

    function promotionEditController($scope, PromotionService, promotionId, $modalInstance,AlertService) {

        $scope.promotion = {};
        $scope.promotion_id = 0;

        PromotionService.getById(promotionId)
            .success(function(promotion) {

                $scope.promotion = promotion;
            });

        $scope.dismiss = function() {

            $modalInstance.dismiss('cancel');
        };

        $scope.save = function() {
            console.log('SAAAAVE MEEEE!!!');
            $modalInstance.close();
        }

        $scope.updatePromotion = function () {
            PromotionService.update(promotionId, $scope.promotion);
            AlertService.addSuccess('Promocao atualizada com sucesso!');
            $modalInstance.dismiss('cancel');
        };

    }

    function promotionCtrl($scope,PromotionService, $modal) {

        $scope.promotions = [];

        PromotionService.getAll().then(function(result) {

            $scope.promotions = result.data;
        });

        $scope.editPromotion = function(promotionId) {

            var modalInstance = $modal.open({
                templateUrl: '../../templates/views/promotion/promotionEdit.html',
                controller: promotionEditController,
                resolve: {
                    promotionId: function () {
                        return promotionId;
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

    angular.module('kokaosApp.controllers').controller('PromotionController', promotionCtrl);
})();