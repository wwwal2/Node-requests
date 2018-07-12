const helpFromNpm = require('request');

const inputCoordinates = (coordinates) => {
    return new Promise ((resolve, reject) => {
        helpFromNpm({
            url: `https://api.darksky.net/forecast/073d97889b4f5f2a3f94926c1f025b91/${coordinates.Latitude},${coordinates.Longitude}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Something wrong with weather block in app')
            } else if (body.code === 400) {
                reject('The coordinates are wrong')
            } else if (body.currently.temperature) {
                resolve({
                    weather: body.currently.summary,
                    temperature: body.currently.temperature
                });
            }
        });
    });
};

module.exports = {
    inputCoordinates,

};