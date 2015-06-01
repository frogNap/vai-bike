(function() {

    'use strict';

    module.exports = function(router, dbHandler, passport) {

        var administratorRepository = require('../zanos/repository/administratorRepository')(dbHandler);
        var stationRepository = require('../zanos/repository/stationRepository')(dbHandler);
        var bikeRepository = require('../zanos/repository/bikeRepository')(dbHandler);
        var packageRepository = require('../zanos/repository/packageRepository')(dbHandler);
        var promotionRepository = require('../zanos/repository/promotionRepository')(dbHandler);

        var administratorController = require('./service/administratorController')(administratorRepository);
        var stationController = require('./service/stationController')(stationRepository);
        var bikeController = require('./service/bikeController')(bikeRepository);
        var packageController = require('./service/packageController')(packageRepository);
        var promotionController = require('./service/promotionController')(promotionRepository);

        router.route('/login')
            .post(passport.authenticate('local'), function(req, res) {
                delete req.user.senha;
                res.send(req.user);
            });

        router.route('/logout')
            .get(function(req, res){
                req.logout();
                res.redirect('/');
            });

        router.route('/loggedIn')
            .get(function(req, res) {

                if(req.isAuthenticated()) {
                    delete req.user.senha;
                    res.send(req.user);
                } else {
                    res.send('0');
                }
            });

        function ensureAuthenticated(req, res, next) {

            if (req.isAuthenticated()) { return next(); }
            req.session.error = 'Voc� precisa se logar primeiro ;)';
            res.redirect('/');
        }

        router.route('/administrator')
            .get(ensureAuthenticated, administratorController.getAll);

        router.route('/station')
            .get(ensureAuthenticated, stationController.getAll);

        router.route('/bike')
            .get(ensureAuthenticated, bikeController.getAll);

        router.route('/promotion')
            .get(ensureAuthenticated, promotionController.getAll);

        router.route('/package')
            .get(ensureAuthenticated, packageController.getAll);
    };
})();
