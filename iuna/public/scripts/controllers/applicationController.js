(function() {

    'use strict';

    function appController($scope, $route, $location) {

        $scope.$route = $route;

        $scope.changeView = function(newView) {

            $location.url(newView);
        };
    }

    angular.module('iunaApp.controllers').controller('ApplicationController', appController);
})();