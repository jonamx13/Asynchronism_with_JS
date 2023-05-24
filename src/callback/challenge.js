// XMLHTTPRequest usage
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.con/api/v1';

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true); // open a connection with the API
    xhttp.onreadystatechange = function (event) { // listen different states of the request to know when data is ready
        if (xhttp.readyState === 4) { // 4 stands for 'Completed' state (There are 5)
            if(xhttp.status === 200) { // 200 stands for 'OK' request has been correct
                callback(null, JSON.parse(xhttp.responseText)); // Parsing receiving text into an object
            } else {
                const error = new Error('Error' + urlApi) // Error comes from an API's element
                return callback(error, null);
            }
        }
    }
    xhttp.send(); // Send request
}

fetchData(`${API}/products`, function (error1, data1) { // get products
    if (error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) { // get first product's id
        if (error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) { // optional chaining
            if (error3) return console.error(error3);
            console.log(data1[0]); // prints first object from products
            console.log(data2.title); // prints its category
            console.log(data3.name); // prints its name
        });
    });
});