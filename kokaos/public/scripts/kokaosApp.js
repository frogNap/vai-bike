(function() {

    'use strict';

    angular.module('kokaosApp.controllers', []);
    angular.module('kokaosApp.services', []);

    var kokaosApp = angular.module('kokaosApp', ['kokaosApp.controllers', 'kokaosApp.services', 'ngRoute', 'ngCookies', 'ui.bootstrap']);

    kokaosApp.constant('BASE_API_ADDRESS', 'http://localhost:3000');
})();