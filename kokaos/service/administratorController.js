(function() {

    'use strict';

    module.exports = function(administratorRepository) {

        return {
            getAll: function(req, res) {

                administratorRepository.getAll();
                res.send();
            }
        };
    };
})();