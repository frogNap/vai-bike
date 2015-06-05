(function() {

    'use strict';

    module.exports = function(trackingRepository) {

        return {
            createTrackingData: function(req, res) {

                trackingRepository.createTrackingData(req.body)
                    .then(function(data) {
                        res.send(data);
                    },  function(err) {
                        throw new Error(err);
                    });
            }
        };
    }
})();