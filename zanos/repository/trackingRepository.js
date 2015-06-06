(function() {

    'use strict';

    module.exports = function(dbHandler) {

        return {
            createTrackingData: function(trackingData) {
                return dbHandler.queryFromCartoDb(function(deferred, cartoDbClient) {

                    var query = 'UPDATE {table} set latitude = {latitude}, longitude = {longitude}, the_geom = ST_SetSRID(ST_Point({longitude}, {latitude}), 4326) ' +
                        'where bike_id = {bike_id}';

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