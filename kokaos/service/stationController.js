(function() {

    'use strict';

    module.exports = function(stationRepository) {

        return {
            getAll: function(req, res) {

                stationRepository.getAll()
                    .then(function(result) {

                        res.send(result);
                    });
            },
            getById: function(req,res){
                stationRepository.getById(req.params.id_station)
                    .then(function(result){
                        res.send(result);
                    });
            },
            update: function(req,res){
                stationRepository.update(req.body.id, req.body.descricao)
                    .then(function(result){
                        res.send(result);
                    });
            }
        };
    };
})();