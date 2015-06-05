(function() {

    'use strict';

    module.exports = function(dbHandler) {

        return {
            getAll: function() {

                return dbHandler.queryFromPool(function(deferred, connection) {

                    connection.query('SELECT * FROM administrador', null, function(queryError, rows) {

                        if(queryError)
                            deferred.reject();
                        else
                            deferred.resolve(rows);
                    });
                });
            },
            getByUsername: function(username) {

                return dbHandler.queryFromPool(function(deferred, connection) {

                        connection.query('SELECT * FROM administrador where login = ?', [username], function(queryError, rows) {

                        if(queryError)
                            deferred.reject(queryError);
                        else
                            deferred.resolve(rows[0]);
                    });
                });
            },
            getById: function(id) {

                return dbHandler.queryFromPool(function(deferred, connection) {

                    connection.query('SELECT * FROM administrador where id = ?', [id], function(queryError, rows) {

                        if(queryError)
                            deferred.reject(queryError);
                        else
                            deferred.resolve(rows[0]);
                    });
                });
            },
            update: function(id,login,senha,nome,departamento,email){

                return dbHandler.queryFromPool(function(deferred, connection) {

                    connection.query('update administrador set login = ?, nome = ?, departamento = ?, email = ? where id = ?', [login,nome,departamento,email,id], function(queryError, rows) {

                        if(queryError)
                            deferred.reject(queryError);
                        else
                            deferred.resolve(rows[0]);
                    });
                });
            },
            save: function (login,senha, nome,departamento, email) {

                return dbHandler.queryFromPool(function(deferred, connection) {

                    connection.query('insert into administrador (login,senha,nome,departamento,email) values(?,?,?,?,?)', [login,senha,nome,departamento,email], function(queryError, rows) {

                        if(queryError)
                            deferred.reject(queryError);
                        else
                            deferred.resolve(rows[0]);
                    });
                });
            },
            delete: function(id){

                return dbHandler.queryFromPool(function(deferred, connection) {

                    connection.query('delete from administrador where id = ?', [id], function(queryError, rows) {

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