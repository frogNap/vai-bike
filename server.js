(function() {

    'use strict';

    var express = require('express');
    var mysql = require('mysql');

    var kokaosApp = express();
    var iunaApp = express();

    var pool  = mysql.createPool({
        connectionLimit : 30,
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'app',
        password : process.env.DB_PASS || '',
        port : process.env.DB_PORT || 3306,
        database: process.env.DB_NAME || 'vai_bike'
    });

    var dbHandler = require('./dbHandler')(pool);

    require('./kokaos/app_start')(kokaosApp, dbHandler);
    require('./iuna/app_start')(iunaApp, dbHandler);
})();