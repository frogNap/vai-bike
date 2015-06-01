/**
 * Created by grodriguesb on 01/06/2015.
 */
(function() {

    'use strict';

    module.exports = function(bikeRepository) {

        return {
            getAll: function(req, res) {

                bikeRepository.getAll()
                    .then(function(result) {

                        res.send(result);
                    });
            }
        };
    };
})();