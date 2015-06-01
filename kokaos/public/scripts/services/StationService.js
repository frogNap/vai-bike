(function() {

    'use strict';

    function stationService($http, BASE_API_ADDRESS) {

        return {
            getAll: function() {
                return $http.get(BASE_API_ADDRESS + '/station');
            }
        };
    }

    angular.module('kokaosApp.services').service('StationService', ['$http', 'BASE_API_ADDRESS', stationService]);
})();