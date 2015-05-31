(function() {

    'use strict';

    module.exports = function(app, dbHandler) {

        var path = require('path');
        var bodyParser = require('body-parser');
        var express = require('express');

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(express.static(path.join(__dirname, './public')));

        app.use(function (req, res, next) {
            var err = new Error('Not Found');
            err.status = 404;
            next(err);
        });

        app.use(function (err, req, res) {
            res.status(err.status || 500);
            res.send({
                message: err.message,
                error: err
            });
        });

        app.listen(3010, function () {
            console.log('Sup son! Iuna here, i\'m at port %s --- Go check me out ;)', 3010);
        });
    };
})();