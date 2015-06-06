(function() {

    'use strict';

    module.exports = function(router, dbHandler, passport) {

        var administratorRepository = require('../zanos/repository/administratorRepository')(dbHandler);
        var stationRepository = require('../zanos/repository/stationRepository')(dbHandler);
        var bikeRepository = require('../zanos/repository/bikeRepository')(dbHandler);
        var packageRepository = require('../zanos/repository/packageRepository')(dbHandler);
        var promotionRepository = require('../zanos/repository/promotionRepository')(dbHandler);
        var trackingRepository = require('../zanos/repository/trackingRepository')(dbHandler);

        var administratorController = require('./service/administratorController')(administratorRepository);
        var stationController = require('./service/stationController')(stationRepository);
        var bikeController = require('./service/bikeController')(bikeRepository);
        var packageController = require('./service/packageController')(packageRepository);
        var promotionController = require('./service/promotionController')(promotionRepository);
        var trackingController = require('./service/trackingController')(trackingRepository);

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

        router.route('/administrator/:id_administrator')
            .get(ensureAuthenticated, administratorController.getById)
            .put(ensureAuthenticated, administratorController.update);

        router.route('/createAdministrator')
            .put(ensureAuthenticated, administratorController.add);

        router.route('/deleteAdministrator/:id_administrator')
            .delete(ensureAuthenticated, administratorController.delete);

        router.route('/station')
            .get(ensureAuthenticated, stationController.getAll);

        router.route('/station/:id_station')
            .get(ensureAuthenticated, stationController.getById)
            .put(ensureAuthenticated, stationController.update);

        router.route('/createStation')
            .put(ensureAuthenticated, stationController.add);

        router.route('/deleteStation/:id_station')
            .delete(ensureAuthenticated, stationController.delete);

        router.route('/bike')
            .get(ensureAuthenticated, bikeController.getAll);

        router.route('/bike/:id_bike')
            .get(ensureAuthenticated, bikeController.getById)
            .put(ensureAuthenticated, bikeController.update);

        router.route('/createBike')
            .put(ensureAuthenticated, bikeController.add);

        router.route('/deleteBike/:id_bike')
            .delete(ensureAuthenticated, bikeController.delete);

        router.route('/promotion')
            .get(ensureAuthenticated, promotionController.getAll);

        router.route('/promotion/:id_promotion')
            .get(ensureAuthenticated, promotionController.getById)
            .put(ensureAuthenticated, promotionController.update);

        router.route('/createPromotion')
            .put(ensureAuthenticated, promotionController.add);

        router.route('/deletePromotion/:id_promotion')
            .delete(ensureAuthenticated, promotionController.delete);

        router.route('/package')
            .get(ensureAuthenticated, packageController.getAll);

        router.route('/package/:id_package')
            .get(ensureAuthenticated, packageController.getById)
            .put(ensureAuthenticated, packageController.update);

        router.route('/createPackage')
            .put(ensureAuthenticated, packageController.add);

        router.route('/deletePackage/:id_package')
            .delete(ensureAuthenticated, packageController.delete);

        router.route('/trackingData')
            .post(trackingController.createTrackingData);
    };
})();
