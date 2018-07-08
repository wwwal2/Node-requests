console.log('starting app');

setTimeout(function () {console.log('asynchron execution')}, 1000);

setTimeout(() => {console.log('asynchron execution 2')}, 0);

console.log('finishing app');

// Callback realization
const getUser = (id, callback) => {
    let user = {
        idNumber: id,
        name: 'al2'
    };
    callback(user);
};
getUser(222, (userObject) => {
    console.log(userObject));
});

// Living example (needs NPM)
// const helpFromNpm = require('request');
//
// helpFromNpm({
//     url: 'https://jsonplaceholder.typicode.com/users',
//     json: true
// }, (error, response, body) => {
//     console.log(JSON.stringify(body));      // stringify - to see all tabs in console
// });


