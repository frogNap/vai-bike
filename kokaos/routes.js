(function() {

    'use strict';



    module.exports = function(app, dbHandler) {

        var administratorRepository = require('../zanos/repository/administratorRepository')(dbHandler);
        var administratorController = require('./service/administratorController')(administratorRepository);

        app.get('/administrator', administratorController.getAll);
    };
})();
