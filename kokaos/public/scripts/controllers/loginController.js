(function() {

    'use strict';

    function loginCtrl($scope, $cookies, LoginService) {

        $scope.credentials = {
            username: undefined,
            password: undefined
        };

        $scope.login = function() {

            LoginService.attemptLogin($scope.credentials)
                .success(function() {

                });
        };
    }

    angular.module('kokaosApp.controllers').controller('LoginController', loginCtrl);
})();