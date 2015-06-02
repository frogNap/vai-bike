/**
 * Created by grodriguesb on 01/06/2015.
 */
(function() {

    'use strict';

    module.exports = function(dbHandler) {

        return {
            getAll: function() {

                return dbHandler.queryFromPool(function(deferred, connection) {

                    connection.query('select b.id, b.marca, b.modelo, b.data_aquisicao, b.quilometragem, (select e.descricao from estacao e where e.id = b.estacao_id) as nome_estacao from bicicleta b', null, function(queryError, rows) {

                        if(queryError)
                            deferred.reject();
                        else
                            deferred.resolve(rows);
                    });
                });
            },
            getById: function(id) {

                return dbHandler.queryFromPool(function(deferred, connection) {

                    connection.query('SELECT * FROM bicicleta where id = ?', [id], function(queryError, rows) {

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