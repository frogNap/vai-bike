(function() {

    'use strict';

    function loginService($http, BASE_API_ADDRESS) {

        return {
            attemptLogin: function(credentials) {

                return $http.post(BASE_API_ADDRESS + '/login', credentials);
            }
        };
    }

    angular.module('kokaosApp.services').service('LoginService', ['$http', 'BASE_API_ADDRESS', loginService]);
})();