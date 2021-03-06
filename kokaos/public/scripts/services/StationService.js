(function() {

    'use strict';

    function stationService($http, BASE_API_ADDRESS) {

        return {
            getAll: function() {
                return $http.get(BASE_API_ADDRESS + '/station');
            },
            getById: function(id) {
                return $http.get(BASE_API_ADDRESS + '/station/' + id);
            },
            update: function(id, station){
                return $http.put(BASE_API_ADDRESS + '/station/' + id, station);
            },
            add: function(station){
                return $http.put(BASE_API_ADDRESS + '/createStation',station);
            },
            delete: function (id) {
                return $http.delete(BASE_API_ADDRESS + '/deleteStation/' + id);
            }
        };
    }

    angular.module('kokaosApp.services').service('StationService', ['$http', 'BASE_API_ADDRESS', stationService]);
})();