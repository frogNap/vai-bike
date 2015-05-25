(function() {

    'use strict';

    function routesConfig ($routeProvider) {

        $routeProvider.
            when('/welcome', {
                templateUrl: '/templates/views/welcome.html',
                controller: 'WelcomeController'
            })
            .otherwise({
                redirectTo: 'welcome'
            });
    }

    angular.module('iunaApp').config(['$routeProvider', routesConfig]);
})();