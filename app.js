const helpFromNpm2 = require('yargs');
const helpFromHdd = require('./data_stash/requestMechanic')


const parsedYargs = helpFromNpm2
    .option('i', {
        alias: 'ipAddress',
        demandOption: true,
        describe: 'Ip to show a location ***.***.***.***',
        string: true
    })
    .help().alias('h', 'help')
    .argv;




helpFromHdd.userIpInput(parsedYargs.ipAddress, (errorMessage, callbackResults) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(callbackResults, undefined, 2));
    }
});



// Existing Ips "134.101.250.155", "114.101.250.125"