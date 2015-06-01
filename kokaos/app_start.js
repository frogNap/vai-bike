(function() {

    'use strict';

    var express = require('express');
    var session = require('express-session');
    var path = require('path');
    var bodyParser = require('body-parser');
    var passport = require('passport');
    var cookieParser = require('cookie-parser');
    var router = express.Router();

    module.exports = function(app, dbHandler) {

        require('./passport_config')(passport, dbHandler);

        app.use(express.static(path.join(__dirname, './public')));

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(cookieParser());

        app.use(session({
            secret: 'flying monkey',
            resave: false,
            saveUninitialized: false
        }));

        app.use(passport.initialize());
        app.use(passport.session());

        require('./api-mapping')(router, dbHandler, passport);

        app.use('/api', router);

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

        app.listen(3000, function () {
            console.log('Sup nerd! Kokaos here, i\'m at port %s --- See ya\'', 3000);
        });
    };
})();