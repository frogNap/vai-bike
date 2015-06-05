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
            },
            getById: function(req,res){
                promotionRepository.getById(req.params.id_promotion)
                    .then(function(result){
                        res.send(result);
                    });
            },
            update: function(req,res){
                promotionRepository.update(req.body.id, req.body.descricao, req.body.desconto)
                    .then(function(result){
                        res.send(result);
                    });
            },
            add: function (req,res) {
                promotionRepository.save(req.body.descricao,req.body.desconto)
                    .then(function(result){
                        res.send(result);
                    });
            }
        };
    };
})();