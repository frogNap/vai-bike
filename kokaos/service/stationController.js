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
            },
            add: function (req,res) {
                stationRepository.save(req.body.descricao,req.body.lat,req.body.lng)
                    .then(function(result){
                        res.send(result);
                    });
            },
            delete: function(req,res){
                console.log(req.body);
                stationRepository.delete(req.params.id_station)
                    .then(function(result){
                        res.send(result);
                    })
            }
        };
    };
})();