(function() {

    'use strict';

    var dbHandler = require('../dbHandler');

    module.exports = {

        getAll: function() {

            dbHandler.getConnection(function(connection) {

                connection.request();
                request.query('select * from administrator', function(err, recordSet) {

                    if(err)
                        console.log(err);

                    console.log(recordSet);
                });
            })
        }
    };
})();