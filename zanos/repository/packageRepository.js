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
            },
            update: function(id,descricao,premio){

                return dbHandler.queryFromPool(function(deferred, connection) {

                    connection.query('update pacote set descricao = ?, premio = ? where id = ?', [descricao, premio, id], function(queryError, rows) {

                        if(queryError)
                            deferred.reject(queryError);
                        else
                            deferred.resolve(rows[0]);
                    });
                });
            },
            save: function (descricao, premio, id_promocao) {

                return dbHandler.queryFromPool(function(deferred, connection) {

                    connection.query('insert into pacote (descricao,premio,id_promocao) values(?,?,?)', [descricao,premio,id_promocao], function(queryError, rows) {

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