(function() {

    'use strict';

    function verifyLogin ($q, $location, LoginService, AlertService) {

        var deferred = $q.defer();

        LoginService.verifyLogin()
            .success(function(user){

                if (user !== '0') {

                    deferred.resolve();
                } else {
                    AlertService.addError('\u00c9 necess\u00e1rio efetuar o login!');
                    deferred.reject();
                    $location.url('/login');
                }
            });

        return deferred.promise;
    }

    function routesConfig ($routeProvider) {

        $routeProvider
            .when('/dashboard', {
                templateUrl: '/templates/views/dashboard.html',
                controller: 'DashboardController',
                resolve: { loggedIn: verifyLogin }
            })
            .when('/administrator', {
                templateUrl: '/templates/views/administrator/administrator.html',
                controller: 'AdministratorController',
                resolve: { loggedIn: verifyLogin }
            })
            .when('/station', {
                templateUrl: '/templates/views/station/station.html',
                controller: 'StationController',
                resolve: { loggedIn: verifyLogin }
            })
            .when('/bike', {
                templateUrl: '/templates/views/bike/bikes.html',
                controller: 'BikeController',
                resolve: { loggedIn: verifyLogin }
            })
            .when('/package', {
                templateUrl: '/templates/views/package/package.html',
                controller: 'PackageController',
                resolve: { loggedIn: verifyLogin }
            })
            .when('/promotion', {
                templateUrl: '/templates/views/promotion/promotion.html',
                controller: 'PromotionController',
                resolve: { loggedIn: verifyLogin }
            })
            .when('/login', {
                templateUrl: '/templates/views/login.html',
                controller: 'LoginController'
            })
            .otherwise({
                redirectTo: '/dashboard'
            });
    }

    angular.module('kokaosApp').config(['$routeProvider', routesConfig])
})();