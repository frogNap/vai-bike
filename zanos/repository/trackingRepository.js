(function() {

    'use strict';

    module.exports = function(dbHandler) {

        return {
            createTrackingData: function(trackingData) {
                return dbHandler.queryFromCartoDb(function(deferred, cartoDbClient) {

                    var query = 'INSERT INTO {table} (bike_id, longitude, latitude, the_geom) ' +
                        'VALUES ({bike_id}, {longitude}, {latitude}, ST_SetSRID(ST_Point({logitude}, {latitude}), 4326))';

                    var params = {
                        table: 'bike_tracking',
                        bike_id: trackingData.bike_id,
                        longitude: trackingData.longitude,
                        latitude: trackingData.latitude
                    };

                    cartoDbClient.query(query, params, function(err, data) {
                        if(err)
                            deferred.reject(err);

                        deferred.resolve(data);
                    });
                });
            }
        };
    };
})();