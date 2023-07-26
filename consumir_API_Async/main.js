const API_URL= 'https://api.thecatapi.com/v1/images/search'

async function reload(){
    const res= await fetch(API_URL); //llamado al fetch
    const data= await res.json();//convierte datos a Json
    const img= document.querySelector('img'); // DOM tomar la imagen
    img.src= data[0].url; //tomar la url del servicio
}

reload(); //llamado inicial de imagen