const promise = new Promise(function (resolve, reject) {
    resolve('Hey!')
});

const cows = 15;

const countCows = new Promise(function (resolve, reject) { //Check if a promise is fulfilled or rejected under a conditional
    if(cows > 10) {
        resolve(`We have ${cows} cows in the farm`)
    } else {
        reject('There\'s not enough cows in the farm')
    }
});

countCows.then((result) => { // if fulfilled
    console.log(result);
}).catch((error) => { // if rejected
    console.log(error);
}).finally(() => console.log('Finally')); // what we do when promised has finished