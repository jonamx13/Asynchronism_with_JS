//* Exercise 1

//? You have to make a callback function that will be executed within 2s

function execCallback(callback) {
    setTimeout(callback, 2000);
}

const myFunc = () => console.log('Log after 2s');
execCallback(myFunc);

//* Excercise 2

//? Make a function that delays 2 and 3 seconds to print a message

delay(2000, "Hello after 2s")
.then((message) => console.log(message));

delay(3000, "Hello after 3s")
.then((message) => console.log(message))

function delay(time, message) {
    return new Promise(() => {
        setTimeout(()=> {console.log(message)}, time);
    });
}

//* Exercise 3

//? Throw an error from a function, calling an API that does not exist

import fetch from 'node-fetch';

async function runCode() {
    const url = 'https://domain-api-com';

    try {
        await fetch(url)
    } catch {
        throw new Error('API not found')
    }
}

runCode();