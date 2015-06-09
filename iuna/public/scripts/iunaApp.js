(function () {

    'use strict';

    angular.module('iunaApp.controllers', []);
    angular.module('iunaApp.services', []);

    var iunaApp = angular.module('iunaApp', ['iunaApp.controllers', 'iunaApp.services', 'ngRoute', 'ui.bootstrap']);

    iunaApp.constant('BASE_API_ADDRESS', 'http://localhost:3000/api');
})();