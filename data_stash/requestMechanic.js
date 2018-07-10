const helpFromNpm = require('request');

const userIpInput = (ip, callback) => {

    // // UNNESSESARY BLOCK FOR URL ENCODING
    // const encodeUrl =  encodeURIComponent(parsedYargs.address);
    // const decodeUrl =  decodeURIComponent(parsedYargs.address);
    // console.log(`decoded url is ${decodeUrl}`);
    // console.log(`emcoded url is ${encodeUrl}`);

    helpFromNpm({
        url: `http://api.ipstack.com/${ip}?access_key=a690d859ca69cf463ec76784323e294b`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Something wromg with coordinates block in api', undefined);
        } else if (body.continent_name === null) {
            callback('There is no such IP. Try to use \'114.101.250.125\'', undefined);
        } else if (body.continent_name) {
            callback(undefined, {
                Continent: body.continent_name,
                City: body.city,
                Latitude: body.latitude,
                Longitude: body.longitude
            });
        }
    });
};

module.exports = {
    userIpInput,

};
