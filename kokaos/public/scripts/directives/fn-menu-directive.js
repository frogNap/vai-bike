(function() {

    'use strict';

    function menuDirective($location) {

        return {
            restrict: 'E',
            templateUrl: '../templates/partials/fn-menu.html',
            link: function(scope) {

                scope.changeView = function(newView) {

                    $location.url(newView);
                    scope.showMenu = false;
                }
            }
        };
    }

    angular.module('kokaosApp.directives').directive('fnMenu', ['$location', menuDirective]);
})();
