(function() {

    'use strict';

    function administratorService($http, BASE_API_ADDRESS) {

        return {
            getAll: function() {
                return $http.get(BASE_API_ADDRESS + '/administrator');
            },
            getById: function(id) {
                return $http.get(BASE_API_ADDRESS + '/administrator/' + id);
            },
            update: function(id, administrator){
                return $http.put(BASE_API_ADDRESS + '/administrator/' + id, administrator);
            },
            add: function(administrator){
                return $http.put(BASE_API_ADDRESS + '/createAdministrator',administrator);
            },
            delete: function (id) {
                return $http.delete(BASE_API_ADDRESS + '/deleteAdministrator/' + id);
            }
        };
    }

    angular.module('kokaosApp.services').service('AdministratorService', ['$http', 'BASE_API_ADDRESS', administratorService]);
})();