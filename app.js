(function() {

    'use strict';

    var express = require('express');
    var path = require('path');
    var bodyParser = require('body-parser');

    var kokaosApp = express();
    var iunaApp = express();

    kokaosApp.use(bodyParser.json());
    kokaosApp.use(bodyParser.urlencoded({extended: false}));
    kokaosApp.use(express.static(path.join(__dirname, 'kokaos/public')));

    iunaApp.use(bodyParser.json());
    iunaApp.use(bodyParser.urlencoded({extended: false}));
    iunaApp.use(express.static(path.join(__dirname, 'iuna/public')));

    kokaosApp.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    iunaApp.use(function (req, res, next) {
        var err = new Error('Not Found 1');
        err.status = 404;
        next(err);
    });

    if (kokaosApp.get('env') === 'development') {
        kokaosApp.use(function (err, req, res, next) {
            res.status(err.status || 500);
            res.send({
                message: err.message,
                error: err
            });
        });
    }
    if (iunaApp.get('env') === 'development') {
        iunaApp.use(function (err, req, res, next) {
            res.status(err.status || 500);
            res.send({
                message: err.message,
                error: err
            });
        });
    }

    kokaosApp.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.send({
            message: err.message,
            error: {}
        });
    });

    iunaApp.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.send({
            message: err.message,
            error: {}
        });
    });

    kokaosApp.listen(3000, function () {
        console.log('Sup nerd! Kokaos here, i\'m at port %s --- See ya\'', 3000);
    });

    iunaApp.listen(3010, function () {
        console.log('Sup son! Iuna here, i\'m at port %s --- Go check me out ;)', 3010);
    });
})();