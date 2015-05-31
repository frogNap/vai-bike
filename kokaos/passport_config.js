(function() {

    'use strict';

    var LocalStrategy = require('passport-local').Strategy;
    var bcrypt = require('bcrypt-nodejs');

    module.exports = function(passport, dbHandler) {

        var administratorRepository = require('../zanos/repository/administratorRepository')(dbHandler);

        passport.serializeUser(function(user, done) {
            done(null, user.id);
        });

        passport.deserializeUser(function(id, done) {
            administratorRepository.getById(id)
                .then(function(user) {
                    done(null, user);
                }, function(err) {
                    done(err);
                });
        });

        passport.use(new LocalStrategy(function (username, password, done) {



            administratorRepository.getByUsername(username)
                .then(function(user) {

                    if (!user)
                        done(null, false, { message: 'Incorrect username.' });

                    bcrypt.compare(password, user.senha, function(err, res) {
                        if(err)
                            done(err);

                        if(!res)
                            done(null, false, { message: 'Incorrect password.' });

                        done(null, user);
                    });

                }, function(err) {

                    done(err);
                });
        }));
    };
})();