(function() {

    'use strict';

    function routesConfig ($routeProvider) {

        $routeProvider.
            when('/welcome', {
                templateUrl: '/templates/views/welcome.html',
                controller: 'WelcomeController',
                activeTab: 'welcome'
            })
            .when('/promotions',{
                templateUrl: '/templates/views/promotions.html',
                controller: 'PromotionController',
                activeTab: 'promotion'
            })
            .when('/packages',{
                templateUrl: '/templates/views/packages.html',
                controller: 'PackageController',
                activeTab: 'packages'
            })
            .otherwise({
                redirectTo: 'welcome'
            });
    }

    angular.module('iunaApp').config(['$routeProvider', routesConfig]);
})();