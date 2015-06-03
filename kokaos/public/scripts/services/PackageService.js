/**
 * Created by grodriguesb on 01/06/2015.
 */
(function() {

    'use strict';

    function packageService($http, BASE_API_ADDRESS) {

        return {
            getAll: function() {
                return $http.get(BASE_API_ADDRESS + '/package');
            },
            getById: function(id) {
                return $http.get(BASE_API_ADDRESS + '/package/' + id);
            },
            update: function(id, pack){
                return $http.put(BASE_API_ADDRESS + '/package/' + id, pack);
            }
        };
    }

    angular.module('kokaosApp.services').service('PackageService', ['$http', 'BASE_API_ADDRESS', packageService]);
})();