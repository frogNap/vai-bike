(function() {

    'use strict';

    function routesConfig ($routeProvider) {

        $routeProvider.
            when('/dashboard', {
                templateUrl: '/templates/views/dashboard.html',
                controller: 'DashboardController'
            })
            .otherwise({
                redirectTo: 'dashboard'
            });
    }

    angular.module('kokaosApp').config(['$routeProvider', routesConfig])
})();