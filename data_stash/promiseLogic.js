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
        resolve('promise worked. Asynchron check!');
        reject('promise failed, error');
    }, 2500);

});

somePromise2.then((message) => {
    console.log('Success: ', message);
}, (errorMessage) =>{
    console.log('Fail: ', errorMessage)
});

// advanced promise
const inputPromise = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Wrong arguments input. Input numbers')
            }

        },2000);
    });
};

inputPromise(4, 7).then((success) => {
    console.log('The result is: ', success)
}, (error) => {
    console.log(error);
});
