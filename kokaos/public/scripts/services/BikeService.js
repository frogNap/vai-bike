/**
 * Created by grodriguesb on 01/06/2015.
 */
(function() {

    'use strict';

    function bikeService($http, BASE_API_ADDRESS) {

        return {
            getAll: function() {
                return $http.get(BASE_API_ADDRESS + '/bike');
            }
        };
    }

    angular.module('kokaosApp.services').service('BikeService', ['$http', 'BASE_API_ADDRESS', bikeService]);
})();