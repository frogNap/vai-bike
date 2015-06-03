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
            }
        };
    };
})();