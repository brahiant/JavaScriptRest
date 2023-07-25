console.log("Ingresa primer ves")

const API_URL= 'https://api.thecatapi.com/v1/images/search?limit=3' //Se ingresa queryparameter limit

async function reload(){
    const res= await fetch(API_URL); //llamado al fetch
    const data= await res.json();//convierte datos a Json
    console.log(data);
    // DOM tomar la imagen
    const img1= document.getElementById('img1'); 
    const img2= document.getElementById('img2');
    const img3= document.getElementById('img3'); 
    //tomar la url del servicio
    img1.src= data[0].url; 
    img2.src= data[1].url;
    img3.src= data[2].url;
}

reload(); //llamado inicial de imagen