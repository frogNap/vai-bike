(function() {

    'use strict';

    var express = require('express');
    var session = require('express-session');
    var path = require('path');
    var bodyParser = require('body-parser');
    var passport = require('passport');
    var LocalStrategy = require('passport-local').Strategy;
    var cookieParser = require('cookie-parser')

    module.exports = function(app, dbHandler) {

        var administratorRepository = require('../zanos/repository/administratorRepository')(dbHandler);

        passport.serializeUser(function(user, done) {
            done(null, user.id);
        });

        passport.deserializeUser(function(id, done) {
            administratorRepository.getById(id)
                .then(function(user) {

                    done(null, user);
                }, function(err) {

                    done(err);
                });
        });

        passport.use(new LocalStrategy(function (username, password, done) {

            administratorRepository.getByUsername(username)
                .then(function(user) {

                    if (!user)
                        return done(null, false, { message: 'Incorrect username.' });

                    if (user.senha != password)
                        return done(null, false, { message: 'Incorrect password.' });

                    done(null, user);
                }, function(err) {

                    return done(err);
                });
        }));

        app.use(express.static(path.join(__dirname, './public')));
        app.use(cookieParser());
        app.use(session({
            secret: 'flying monkey',
            resave: false,
            saveUninitialized: false
        }));
        app.use(passport.initialize());
        app.use(passport.session());

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: false}));


        require('./api-mapping')(app, dbHandler, passport);

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