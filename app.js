const helpFromNpm = require('request');
const helpFromNpm2 = require('yargs');

const argv = helpFromNpm2;

helpFromNpm({
    url: 'https://jsonplaceholder.typicode.com/users',
    json: true
}, (error, response, body) => {
    console.log(body[1].address.street);
    console.log(response);
});
