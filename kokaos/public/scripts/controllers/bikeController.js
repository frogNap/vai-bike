/**
 * Created by grodriguesb on 27/05/2015.
 */
(function() {

    'use strict';

    function dashboardCtrl($scope) {

        $scope.listBikes = 'Lista de bikes';
    }

    angular.module('kokaosApp.controllers').controller('BikeController', bikeCtrl);
})();