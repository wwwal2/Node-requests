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

// advanced promise + chaining promise
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
    console.log('The result is: ', success);
    return inputPromise(success, 25)        //chaining
}, (error) => {
    console.log(error);
}).then((success2) => {                     //chaining
    console.log('Chained result: ', success2);
}, (error2) => {
    console.log(error2);
});

//advanced promise + fixing chaining multiple errors
const inputPromise2 = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Wrong arguments input2. Input numbers')
            }

        },2000);
    });
};

inputPromise2(200, 75).then((success) => {
    console.log('The result is: ', success);
    return inputPromise(success, 30);
}).then((success2) => {                     //chaining
    console.log('Chained result: ', success2);
}).catch((error) => {                       //complex error action for all errors
    console.log(error);
});
