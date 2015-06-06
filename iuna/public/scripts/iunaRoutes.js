(function() {

    'use strict';

    function routesConfig ($routeProvider) {

        $routeProvider.
            when('/welcome', {
                templateUrl: '/templates/views/welcome.html',
                controller: 'WelcomeController'
            })
            .when('/promotions',{
                templateUrl: '/templates/views/promotions.html',
                controller: 'PromotionController'
            })
            .when('/packages',{
                templateUrl: '/templates/views/packages.html',
                controller: 'PackageController'
            })
            .otherwise({
                redirectTo: 'welcome'
            });
    }

    angular.module('iunaApp').config(['$routeProvider', routesConfig]);
})();