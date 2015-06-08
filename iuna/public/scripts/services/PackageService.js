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
            },
            add: function(pack){
                return $http.put(BASE_API_ADDRESS + '/createPackage',pack);
            },
            delete: function (id) {
                return $http.delete(BASE_API_ADDRESS + '/deletePackage/' + id);
            }
        };
    }

    angular.module('iunaApp.services').service('PackageService', ['$http', 'BASE_API_ADDRESS', packageService]);
})();