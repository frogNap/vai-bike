(function() {

    'use strict';

    function routesConfig ($routeProvider) {

        $routeProvider
            .when('/dashboard', {
                templateUrl: '/templates/views/dashboard.html',
                controller: 'DashboardController'
            })
            .when('/station', {
                templateUrl: '/templates/views/station.html',
                controller: 'StationController'
            })
            .when('/bike', {
                templateUrl: '/templates/views/bikes.html',
                controller: 'BikeController'
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