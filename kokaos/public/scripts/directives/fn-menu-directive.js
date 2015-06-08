(function() {

    'use strict';

    function menuDirective($location, LoginService) {

        return {
            restrict: 'E',
            templateUrl: '../templates/partials/fn-menu.html',
            link: function(scope) {

                scope.changeView = function(newView) {

                    $location.url(newView);
                    scope.showMenu = false;
                };

                scope.logout = function() {

                    LoginService.logout()
                        .success(function() {

                            $location.url('/login');
                        });
                };
            }
        };
    }

    angular.module('kokaosApp.directives').directive('fnMenu', ['$location', 'LoginService', menuDirective]);
})();
