(function() {

    'use strict';

    var administratorRepository = require('../zanos/repository/administratorRepository');
    var administratorController = require('./service/administratorController')(administratorRepository);

    module.exports = function(app) {

        app.get('/administrator', administratorController.getAll);
    };
})();
