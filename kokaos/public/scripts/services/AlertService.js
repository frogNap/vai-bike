(function() {

    'use strict';

    function alertService($rootScope, $timeout) {

        $rootScope.alerts = [];

        $rootScope.closeAlert = function (index) {
            $rootScope.alerts.splice(index, 1);
        };

        function addAlert(alert) {
            $rootScope.alerts.push(alert);
            $timeout(function () {
                var index = $rootScope.alerts.indexOf(alert);
                if (index != -1) {
                    $rootScope.alerts.splice(index, 1);
                }
            }, 5000);
        }

        return {
            addWarning: function(errorMessage) {

                var alert = {
                    type: 'warning',
                    msg: errorMessage,
                    lockScreen: false
                };

                addAlert(alert);
            },
            addError: function(errorMessage) {

                var alert = {
                    type: 'danger',
                    msg: errorMessage,
                    lockScreen: false
                };

                addAlert(alert);
            },
            addSuccess: function(errorMessage) {

                var alert = {
                    type: 'success',
                    msg: errorMessage,
                    lockScreen: false
                };

                addAlert(alert);
            }
        }
    }

    angular.module('kokaosApp.services').service('AlertService', ['$rootScope', '$timeout', alertService]);
})();