/**
 * Created by grodriguesb on 01/06/2015.
 */
(function() {

    'use strict';

    module.exports = function(promotionRepository) {

        return {
            getAll: function(req, res) {

                promotionRepository.getAll()
                    .then(function(result) {

                        res.send(result);
                    });
            }
        };
    };
})();