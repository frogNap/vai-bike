(function() {

    'use strict';

    var sql = require('mssql');

    var config = {
        user: 'sa',
        password: '@#vaidebike#@',
        server: 'localhost\\DEV',
        database: 'VaiBike'
    };

    module.exports = {
        getConnection: function(callback) {

            var connection = new sql.Connection(config, function(err) {

                if(err) {
                    console.log(err);
                    throw "FODEU!";
                }

                callback(connection);
            });
        }
    };
})();