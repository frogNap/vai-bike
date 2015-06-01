/**
 * Created by grodriguesb on 01/06/2015.
 */
(function() {

    'use strict';

    function promotionService($http, BASE_API_ADDRESS) {

        return {
            getAll: function() {
                return $http.get(BASE_API_ADDRESS + '/promotion');
            }
        };
    }

    angular.module('kokaosApp.services').service('PromotionService', ['$http', 'BASE_API_ADDRESS', promotionService]);
})();