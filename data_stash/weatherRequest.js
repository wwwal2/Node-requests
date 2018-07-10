const helpFromNpm = require('request');

const geoData = (coordinates, callback2) => {

    helpFromNpm({
        url: `https://api.darksky.net/forecast/073d97889b4f5f2a3f94926c1f025b91/${coordinates.Latitude},${coordinates.Longitude}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback2('Something wrong with weather block in app', undefined)
        } else if (body.code === 400) {
            callback2('The coordinates are wrong', undefined)
        } else if (body.currently.temperature) {
            callback2(undefined, {
                weather: body.currently.summary,
                temperature: body.currently.temperature
            });
        }
    });

};


module.exports = {
    geoData,

};
