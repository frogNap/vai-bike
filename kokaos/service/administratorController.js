(function() {

    'use strict';

    module.exports = function(administratorRepository) {

        return {
            getAll: function(req, res) {

                administratorRepository.getAll()
                    .then(function(result) {

                        res.send(result);
                    });
            },
            getById: function(req,res){
                administratorRepository.getById(req.params.id_administrator)
                    .then(function(result){
                        res.send(result);
                    });
            },
            update: function(req,res){
                administratorRepository.update(req.body.id, req.body.login, req.body.senha, req.body.nome,req.body.departamento,req.body.email)
                    .then(function(result){
                        res.send(result);
                    });
            },
            add: function (req,res) {
                administratorRepository.save(req.body.login, req.body.senha, req.body.nome,req.body.departamento,req.body.email)
                    .then(function(result){
                        res.send(result);
                    });
            },
            delete: function(req,res){
                console.log(req.body);
                administratorRepository.delete(req.params.id_administrator)
                    .then(function(result){
                        res.send(result);
                    })
            }
        };
    };
})();