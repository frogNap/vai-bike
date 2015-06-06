/**
 * Created by grodriguesb on 29/05/2015.
 */
(function() {

    'use strict';

    module.exports = function(dbHandler) {

        return {
            getAll: function() {

                return dbHandler.queryFromPool(function(deferred, connection) {

                    connection.query('SELECT * FROM estacao', null, function(queryError, rows) {

                        if(queryError)
                            deferred.reject();
                        else
                            deferred.resolve(rows);
                    });
                });
            },
            getById: function(id) {

                return dbHandler.queryFromPool(function(deferred, connection) {

                    connection.query('SELECT * FROM estacao where id = ?', [id], function(queryError, rows) {

                        if(queryError)
                            deferred.reject(queryError);
                        else
                            deferred.resolve(rows[0]);
                    });
                });
            },
            update: function(id,descricao){

                return dbHandler.queryFromPool(function(deferred, connection) {

                    connection.query('update estacao set descricao = ? where id = ?', [descricao, id], function(queryError, rows) {

                        if(queryError)
                            deferred.reject(queryError);
                        else
                            deferred.resolve(rows[0]);
                    });
                });
            },
            save: function (descricao, lat, lng) {

                return dbHandler.queryFromPool(function(deferred, connection) {

                    connection.query('insert into estacao (lat,lng,descricao) values(?,?,?)', [lat, lng, descricao], function(queryError, rows) {

                        if(queryError)
                            deferred.reject(queryError);
                        else
                            deferred.resolve(rows[0]);
                    });
                });
            },
            delete: function(id){

                return dbHandler.queryFromPool(function(deferred, connection) {

                    connection.query('delete from estacao where id = ?', [id], function(queryError, rows) {

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