(function() {

    'use strict';

    var q = require('q');

    module.exports = function(pool, cartoDbClient) {

        return {
            queryFromPool: function(callback) {

                var deferred = q.defer();

                pool.getConnection(function(connectionError, connection){

                    if(connectionError) {

                        deferred.reject();
                    } else {
                        callback(deferred, connection);
                        connection.release();
                    }
                });

                return deferred.promise;
            },
            queryFromCartoDb: function(callback) {

                var deferred = q.defer();

                cartoDbClient.on('connect', function() {

                    callback(deferred, cartoDbClient);
                });

                cartoDbClient.connect();

                return deferred.promise;
            }
        };
    };
})();