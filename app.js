const helpFromNpm2 = require('yargs');
const helpFromHdd = require('./data_stash/requestMechanic');
const helpFromHdd2 = require('./data_stash/weatherRequest');
const helpFromHdd3 = require('./data_stash/requestMechanicPromise');
const helpFromHdd4 = require('./data_stash/weatherRequestPromise')

const parsedYargs = helpFromNpm2
    .option('i', {
        alias: 'ipAddress',
        demandOption: true,
        describe: 'Ip to show a location ***.***.***.***',
        string: true
    })
    .help().alias('h', 'help')
    .argv;

//
// helpFromHdd.userIpInput(parsedYargs.ipAddress, (errorMessage, coordinatesResult) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(coordinatesResult, undefined, 2));
//
//         // weather block
//         helpFromHdd2.geoData(coordinatesResult, (errorMessage2, weatherResults) => {
//             if (errorMessage2) {
//                 console.log(errorMessage2)
//             } else {
//                 console.log(`The weather is ${weatherResults.weather}, the temperature is ${weatherResults.temperature} F`)
//             }
//         });
//     }
// });

helpFromHdd3.inputIp(parsedYargs.ipAddress).then((done) => {
    console.log(done);
    helpFromHdd4.inputCoordinates(done).then((validAnswer) => {
        console.log(`The weather is ${validAnswer.weather}, the temperature is ${validAnswer.temperature} F`);
    }, (errorCoordinates) => {
        console.log(errorCoordinates);
    });
}, (error) => {
    console.log(error)
});



// Existing Ips "134.101.250.155", "114.101.250.125"