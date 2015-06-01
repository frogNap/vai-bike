/**
 * Created by grodriguesb on 01/06/2015.
 */
(function() {

    'use strict';

    module.exports = function(packageRepository) {

        return {
            getAll: function(req, res) {

                packageRepository.getAll()
                    .then(function(result) {

                        res.send(result);
                    });
            }
        };
    };
})();