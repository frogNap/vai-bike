(function() {

    'use strict';

    function welcomeCtrl($scope) {

        $scope.helloMessage = 'What is up! My name is Iuna and I\'m fucking alive!';
    }

    angular.module('iunaApp.controllers').controller('WelcomeController', welcomeCtrl);
})();