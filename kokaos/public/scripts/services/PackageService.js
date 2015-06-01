/**
 * Created by grodriguesb on 01/06/2015.
 */
(function() {

    'use strict';

    function packageService($http, BASE_API_ADDRESS) {

        return {
            getAll: function() {
                return $http.get(BASE_API_ADDRESS + '/package');
            }
        };
    }

    angular.module('kokaosApp.services').service('PackageService', ['$http', 'BASE_API_ADDRESS', packageService]);
})();