const URL= 'https://api.thecatapi.com/v1/images/search'

fetch(URL) //promesa
.then(res => res.json()) //convierte datos a Json
.then(data => {
    const img= document.querySelector('img');
    img.src= data[0].url;
})