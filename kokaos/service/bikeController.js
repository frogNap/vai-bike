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
            },
            getById: function(req,res){
                bikeRepository.getById(req.params.id_bike)
                    .then(function(result){
                        res.send(result);
                    });
            },
            update: function(req,res){
                bikeRepository.update(req.body.id, req.body.marca, req.body.modelo, req.body.quilometragem)
                    .then(function(result){
                        res.send(result);
                    });
            },
            add: function (req,res) {
                bikeRepository.save(req.body.marca,req.body.modelo,req.body.data_aquisicao,req.body.quilometragem,req.body.estacao_id)
                    .then(function(result){
                        res.send(result);
                    });
            },
            delete: function(req,res){
                console.log(req.body);
                bikeRepository.delete(req.params.id_bike)
                    .then(function(result){
                        res.send(result);
                    })
            }
        };
    };
})();