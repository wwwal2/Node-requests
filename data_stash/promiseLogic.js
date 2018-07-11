// simple example
const somePromise = new Promise((resolve, reject) => {
    resolve('promise worked!');
    reject('promise failed, error');
});

somePromise.then((message) => {
   console.log('Success: ', message);
}, (errorMessage) =>{
    console.log('Fail: ', errorMessage)
});

// asynchron example
const somePromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise worked!');
        reject('promise failed, error');
    }, 2000);

});

somePromise2.then((message) => {
    console.log('Success: ', message);
}, (errorMessage) =>{
    console.log('Fail: ', errorMessage)
});
