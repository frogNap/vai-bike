/**
 * Created by grodriguesb on 01/06/2015.
 */
(function() {

    'use strict';

    module.exports = function(packageRepository) {

        return {
            getAll: function(req, res) {

                packageRepository.getAll()
                    .then(function(result) {

                        res.send(result);
                    });
            },
            getById: function(req,res){
                packageRepository.getById(req.params.id_package)
                    .then(function(result){
                        res.send(result);
                    });
            },
            update: function(req,res){
                packageRepository.update(req.body.id, req.body.descricao, req.body.premio)
                    .then(function(result){
                        res.send(result);
                    });
            },
            add: function (req,res) {
                packageRepository.save(req.body.descricao,req.body.premio,req.body.id_promocao)
                    .then(function(result){
                        res.send(result);
                    });
            }
        };
    };
})();