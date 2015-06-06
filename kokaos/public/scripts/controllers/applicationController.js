(function() {

    'use strict';

    function appController($scope) {

        $scope.loginScreen = false;

        $scope.setOnLoginScreen = function(isOnLoginScreen) {

            $scope.loginScreen = isOnLoginScreen;
        }

    }

    angular.module('kokaosApp.controllers').controller('ApplicationController', appController);
})();