/**
 * Created by grodriguesb on 01/06/2015.
 */
(function() {

    'use strict';

    module.exports = function(dbHandler) {

        return {
            getAll: function() {

                return dbHandler.queryFromPool(function(deferred, connection) {

                    connection.query('select * from pacote', null, function(queryError, rows) {

                        if(queryError)
                            deferred.reject();
                        else
                            deferred.resolve(rows);
                    });
                });
            },
            getById: function(id) {

                return dbHandler.queryFromPool(function(deferred, connection) {

                    connection.query('SELECT * FROM pacote where id = ?', [id], function(queryError, rows) {

                        if(queryError)
                            deferred.reject(queryError);
                        else
                            deferred.resolve(rows[0]);
                    });
                });
            }
        };
    };
})();