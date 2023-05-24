const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.con/api/v1';

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true); // open a connection with the API
    xhttp.onreadystatechange = function (event) { // listen different states of the request to know when data is ready
        if (xhttp.readyState === 4) { // 4 stands for 'Completed' state (There are 5)
            if(xhttp.status === 200) { // 200 stands for 'OK' request has been correct
                callback(null, JSON.parse(xhttp.responseText)); // Parsing receiving text into an object
            }
        } else {
            const error = new Error('Error' + urlApi) // Error comes from an API's element
            return callback(error, null);
        }
    }
    xhttp.send(); // Send request
}