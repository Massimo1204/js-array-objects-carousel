/**
 *
 *
 *
Riprendiamo l'esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice scritto oggi insieme a lezione, che troverete direttamente nella mia repository di github a questo link: [link github]

Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto dei tre array separati, con una sola regola: non è possibile modificare l'HTML ma solamente JS e CSS.
Ricordiamo sempre l'importanza dell'integrità del dato.

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?

 *
 */

const images = [
    {
        url : 'https://getwallpapers.com/wallpaper/full/4/4/b/1178094-gorgerous-sweden-desktop-wallpaper-1920x1200-windows-10.jpg',
        description : 'Lake',
    },
    {
        url : 'https://getwallpapers.com/wallpaper/full/b/4/6/300928.jpg',
        description : 'Waterfall',
    },
    {
        url : 'https://www.bwallpaperhd.com/wp-content/uploads/2019/06/ManitobaSky.jpg',
        description : 'Thunder',
    },
    {
        url : 'https://getwallpapers.com/wallpaper/full/9/b/a/410201.jpg',
        description : 'Big Rock',
    }, 
    {
        url : 'https://www.bwallpaperhd.com/wp-content/uploads/2019/07/SecondBeach.jpg',
        description : 'Wilson',
    }
];

const carouselImage = document.querySelector('#my-carousel .my-carousel-images');
const carousel = document.getElementById('my-carousel');
const thumbnail = document.querySelector('div.my-thumbnails');
const previousButton = document.querySelector('.my-thumbnails .my-previous');
const nextButton = document.querySelector('div.my-thumbnails div.my-next');
let counter = 0;

for(let i=0; i<images.length; i++){
    const newThumbnailPreview = document.createElement('div');
    newThumbnailPreview.classList.add('my-thumbnail-preview');
    newThumbnailPreview.innerHTML = "<img src='"+images[i].url+"'>";
    thumbnail.append(newThumbnailPreview);
}


addImage(images,carouselImage,counter);


function addImage(images,carouselImage,counter){
    const img = "<img src='"+images[counter].url+"'>";
    const title = document.createElement('p');
    title.innerHTML = images[counter].description;
    carouselImage.innerHTML= img;
    carouselImage.append(title);
}

function swipeNext(){
    if(counter>0 && counter<images.length){
        counter--;
    }else if(counter <= 0){
        counter = images.length-1;
    }
    console.log(counter);
    addImage(images,carouselImage,counter);
}

function swipePrevious(){
    if(counter>=0 && counter<images.length-1){
        counter++;
    }else if(counter >= images.length-1){
        counter = 0;
    }
    addImage(images,carouselImage,counter);
    console.log(counter);
}

nextButton.addEventListener('click',swipeNext);
previousButton.addEventListener('click',swipePrevious);

