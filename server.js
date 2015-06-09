(function() {

    'use strict';

    var express = require('express');
    var mysql = require('mysql');
    var cartoDb = require('cartodb');
    var cartoDbConfig = require('./cartodb_config');
    var cors = require('cors');

    var kokaosApp = express();
    var iunaApp = express();

    kokaosApp.use(cors());

    var pool  = mysql.createPool({
        connectionLimit : 30,
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'app',
        password : process.env.DB_PASS || '',
        port : process.env.DB_PORT || 3306,
        database: process.env.DB_NAME || 'vai_bike'
    });

    var cartoDbClient = new cartoDb({user: cartoDbConfig.USER, api_key: cartoDbConfig.API_KEY});

    var dbHandler = require('./dbHandler')(pool, cartoDbClient);

    require('./kokaos/app_start')(kokaosApp, dbHandler);
    require('./iuna/app_start')(iunaApp, dbHandler);
})();