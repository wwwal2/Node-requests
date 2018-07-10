const helpFromNpm2 = require('yargs');
const helpFromHdd = require('./data_stash/requestMechanic');
const helpFromHdd2 = require('./data_stash/weatherRequest');

const parsedYargs = helpFromNpm2
    .option('i', {
        alias: 'ipAddress',
        demandOption: true,
        describe: 'Ip to show a location ***.***.***.***',
        string: true
    })
    .help().alias('h', 'help')
    .argv;


helpFromHdd.userIpInput(parsedYargs.ipAddress, (errorMessage, coordinatesResult) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(coordinatesResult, undefined, 2));

        // weather block
        helpFromHdd2.geoData(coordinatesResult, (errorMessage2, weatherResults) => {
            if (errorMessage2) {
                console.log(errorMessage2)
            } else {
                console.log(`The weather is ${weatherResults.weather}, the temperature is ${weatherResults.temperature} F`)
            }
        });
    }
});



// Existing Ips "134.101.250.155", "114.101.250.125"