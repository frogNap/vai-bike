(function() {

    'use strict';

    function dashboardCtrl($scope) {

        $scope.helloMessage = 'Sup bitches! My name is KOKAOS and I\'m running like a boss!!';
    }

    angular.module('kokaosApp.controllers').controller('DashboardController', dashboardCtrl);
})();