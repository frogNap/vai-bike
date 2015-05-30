/**
 * Created by grodriguesb on 29/05/2015.
 */
(function() {

    'use strict';

    module.exports = function(stationRepository) {

        return {
            getAll: function(req, res) {

                stationRepository.getAll()
                    .then(function(result) {

                        res.send(result);
                    });
            }
        };
    };
})();