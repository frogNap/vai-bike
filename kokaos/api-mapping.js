(function() {

    'use strict';

    module.exports = function(app, dbHandler, passport) {

        var administratorRepository = require('../zanos/repository/administratorRepository')(dbHandler);
        var administratorController = require('./service/administratorController')(administratorRepository);

        app.post('/login', passport.authenticate('local'), function(req, res) {
            res.send('damn!');
        });

        function ensureAuthenticated(req, res, next) {

            return next();
            //if (req.isAuthenticated()) { return next(); }
            //req.session.error = 'Please sign in!';
            //res.redirect('/login');
        }

        app.get('/administrator', ensureAuthenticated, administratorController.getAll);
    };
})();
