//* Exercise 1

//? You have to make a callback function that will be executed within 2s

function execCallback(callback) {
    setTimeout(callback, 2000);
}

const myFunc = () => console.log('Log after 2s');
execCallback(myFunc);