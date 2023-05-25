//* Exercise 1

//? You have to make a callback function that will be executed within 2s

function execCallback(callback) {
    setTimeout(callback, 2000);
}

const myFunc = () => console.log('Log after 2s');
execCallback(myFunc);

//* Excercise 2

delay(2000, "Hello after 2s")
.then((message) => console.log(message));

delay(3000, "Hello after 3s")
.then((message) => console.log(message))

function delay(time, message) {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {console.log(message)}, time);
    });
}