/**
 * Created by grodriguesb on 30/05/2015.
 */
(function() {

    'use strict';

    function stationService($http, BASE_API_ADDRESS) {

        return {
            getAll: function() {
                return $http.get(BASE_API_ADDRESS + '/station').
                    success(function(data,status,headers,config){
                        return data;
                    });}
        };
    }

    angular.module('kokaosApp.services').service('StationService', ['$http', 'BASE_API_ADDRESS', stationService]);
})();