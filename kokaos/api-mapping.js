(function() {

    'use strict';

    var passport = require('passport');

    module.exports = function(app, dbHandler) {

        var administratorRepository = require('../zanos/repository/administratorRepository')(dbHandler);
        var administratorController = require('./service/administratorController')(administratorRepository);

        app.post('/login', passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login'
        }));

        function ensureAuthenticated(req, res, next) {

            return next();
            //if (req.isAuthenticated()) { return next(); }
            //req.session.error = 'Please sign in!';
            //res.redirect('/login');
        }

        app.get('/administrator', ensureAuthenticated, administratorController.getAll);
    };
})();
