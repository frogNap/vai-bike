(function() {

    'use strict';

    angular.module('kokaosApp.controllers', []);
    angular.module('kokaosApp.services', []);
    angular.module('kokaosApp.directives', []);

    var kokaosApp = angular.module('kokaosApp', ['kokaosApp.controllers', 'kokaosApp.services', 'kokaosApp.directives',
                                                    'ngRoute', 'ngCookies', 'ngAnimate', 'ui.bootstrap']);

    kokaosApp.constant('BASE_API_ADDRESS', 'http://localhost:3000/api');
})();