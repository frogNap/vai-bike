(function() {

    'use strict';

    module.exports = function(router, dbHandler, passport) {

        var administratorRepository = require('../zanos/repository/administratorRepository')(dbHandler);
        var stationRepository = require('../zanos/repository/stationRepository')(dbHandler);

        var administratorController = require('./service/administratorController')(administratorRepository);
        var stationController = require('./service/stationController')(stationRepository);

        router.route('/login')
            .post(passport.authenticate('local'), function(req, res) {
                delete req.user.senha;
                res.json(req.user);
            });

        router.route('/logout')
            .get(function(req, res){
                req.logout();
                res.redirect('/');
            });

        function ensureAuthenticated(req, res, next) {

            return next();
            //if (req.isAuthenticated()) { return next(); }
            //req.session.error = 'Please sign in!';
            //res.redirect('/#/login');
        }

        router.route('/administrator')
            .get(ensureAuthenticated, administratorController.getAll);

        router.route('/station')
            .get(ensureAuthenticated, stationController.getAll);
    };
})();
