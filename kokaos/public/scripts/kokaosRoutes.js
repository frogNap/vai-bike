(function() {

    'use strict';

    function routesConfig ($routeProvider) {

        $routeProvider
            .when('/dashboard', {
                templateUrl: '/templates/views/dashboard.html',
                controller: 'DashboardController'
            })
            .when('/login', {
                templateUrl: '/templates/views/login.html',
                controller: 'LoginController'
            })
            .otherwise({
                redirectTo: '/login'
            });
    }

    angular.module('kokaosApp').config(['$routeProvider', routesConfig])
})();