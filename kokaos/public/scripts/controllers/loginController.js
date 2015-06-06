(function() {

    'use strict';

    function loginCtrl($scope, $location, LoginService, AlertService) {

        $scope.credentials = {
            username: undefined,
            password: undefined
        };

        $scope.setOnLoginScreen(true);

        $scope.invalidGrant = false;

        $scope.login = function() {

            LoginService.attemptLogin($scope.credentials)
                .success(function() {

                    $scope.setOnLoginScreen(false);
                    $location.path('/dashboard');
                })
                .error(function() {

                    AlertService.addError('Usu\u00e1rio e\/ou senha errados! Sorry mate :(');
                });
        };
    }

    angular.module('kokaosApp.controllers').controller('LoginController', loginCtrl);
})();