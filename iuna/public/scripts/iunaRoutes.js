(function() {

    'use strict';

    function routesConfig ($routeProvider) {

        $routeProvider.
            when('/welcome', {
                templateUrl: '/templates/views/welcome.html',
                controller: 'WelcomeController',
                activeTab: 'welcome'
            }).
            when('/how', {
                templateUrl: '/templates/views/how.html',
                activeTab: 'how'
            }).
            when('/who', {
                templateUrl: '/templates/views/who.html',
                activeTab: 'who'
            }).
            when('/contact', {
                templateUrl: '/templates/views/contact.html',
                activeTab: 'contact'
            })
            .otherwise({
                redirectTo: 'welcome'
            });
    }

    angular.module('iunaApp').config(['$routeProvider', routesConfig]);
})();