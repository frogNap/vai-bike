(function() {

    'use strict';

    var express = require('express');
    var path = require('path');
    var bodyParser = require('body-parser');

    module.exports = function(app, dbHandler) {

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(express.static(path.join(__dirname, './public')));

        require('./api-mapping')(app, dbHandler);

        app.use(function (req, res, next) {
            var err = new Error('Not Found');
            err.status = 404;
            next(err);
        });

        if (app.get('env') === 'development') {

            app.use(function (err, req, res) {
                res.status(err.status || 500);
                res.send({
                    message: err.message,
                    error: err
                });
            });
        } else {

            app.use(function (err, req, res) {
                res.status(err.status || 500);
                res.send({
                    message: err.message,
                    error: {}
                });
            });
        }
    };
})();