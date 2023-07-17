const url = "../data/data.json";
fetch(url)
    .then(response => response.json())
    .then(data => tratarData(data));


function tratarData(data){
    console.log(data);
}