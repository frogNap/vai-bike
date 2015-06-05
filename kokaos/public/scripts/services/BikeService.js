/**
 * Created by grodriguesb on 01/06/2015.
 */
(function() {

    'use strict';

    function bikeService($http, BASE_API_ADDRESS) {

        return {
            getAll: function() {
                return $http.get(BASE_API_ADDRESS + '/bike');
            },
            getById: function(id){
                return $http.get(BASE_API_ADDRESS + '/bike/' + id);
            },
            update: function(id, bike){
                return $http.put(BASE_API_ADDRESS + '/bike/' + id, bike);
            },
            add: function(bike){
                return $http.put(BASE_API_ADDRESS + '/createBike',bike);
            }
        };
    }

    angular.module('kokaosApp.services').service('BikeService', ['$http', 'BASE_API_ADDRESS', bikeService]);
})();