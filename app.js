const helpFromNpm = require('request');
const helpFromNpm2 = require('yargs');

const parsedYargs = helpFromNpm2
    .option('i', {
        alias: 'ip',
        demandOption: true,
        describe: 'Ip to show a location ***.***.***.***',
        string: true
    })
    .help().alias('h', 'help')
    .argv;

// // UNNESSESARY BLOCK FOR URL ENCODING
// const encodeUrl =  encodeURIComponent(parsedYargs.address);
// const decodeUrl =  decodeURIComponent(parsedYargs.address);
// console.log(`decoded url is ${decodeUrl}`);
// console.log(`emcoded url is ${encodeUrl}`);

let userIpInput = parsedYargs.ip;


helpFromNpm({
    url: `http://api.ipstack.com/${userIpInput}?access_key=a690d859ca69cf463ec76784323e294b`,
    json: true
}, (error, response, body) => {
    if (error) {
        console.log('Something wrong with node api');
    } else if (body.continent_name === null) {
        console.log('There is no such IP. Try to use \'114.101.250.125\'');
    } else if (body.continent_name) {
        console.log(`Continent: ${body.continent_name}, City: ${body.city}`);
        console.log(`Latitude: ${body.latitude}, Longitude: ${body.longitude}`);
    }
});


// Existing Ips "134.101.250.155", "114.101.250.125"