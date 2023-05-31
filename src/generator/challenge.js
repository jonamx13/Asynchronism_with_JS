import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

async function* genFetch(urlApi) {
    const products = await fetchData(`${urlApi}/products`);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

    const data =[products[10], product.title, category.name];

    for (let value of data) {
        yield console.log(value);
    }
}

const genData = genFetch(API);

genData.next();
genData.next();
genData.next();