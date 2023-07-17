const url = "../data/data.json";
const product = document.getElementById("product");
const item = document.getElementById("item");
const description = document.getElementById("description");
const price = document.getElementById("price");
const oldPrice = document.getElementById("oldPrice");

fetch(url)
    .then(response => response.json())
    .then(data => use(data));


function use(data){
    console.log(data);

    let text = "";
    let prices = 123456.789;
    data.forEach(element => {
        text = document.createTextNode((element.product).toUpperCase());
        product.appendChild(text);
        
        text = document.createTextNode(element.item);
        item.appendChild(text);

        text = document.createTextNode(element.description);
        description.appendChild(text);

        prices = document.createTextNode(new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(element.price));
        price.appendChild(prices);

        prices = document.createTextNode(new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(element.oldPrice));
        oldPrice.appendChild(prices);
    });
}