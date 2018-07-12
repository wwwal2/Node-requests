const helpFromNpm2 = require('request');

const inputIp = (ip) => {
    return new Promise((resolve, reject) => {
        helpFromNpm2({
            url: `http://api.ipstack.com/${ip}?access_key=a690d859ca69cf463ec76784323e294b`,
            json: true
        },(error, response, body) => {
            if (error) {
                reject(error);
            } else if (body.continent_name === null) {
                reject('There is no such IP. Try to use \'134.101.250.155\'');
            } else {
                resolve({
                    Continent: body.continent_name,
                    City: body.city,
                    Latitude: body.latitude,
                    Longitude: body.longitude
                });
            }
        });
    });
};

module.exports = {
    inputIp,

};