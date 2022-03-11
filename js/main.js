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
        title : 'Lake',
        desciption : "Tanti sassi, dell'acqua, un paio di case ed un cielo, rosa",
    },
    {
        url : 'https://getwallpapers.com/wallpaper/full/b/4/6/300928.jpg',
        title : 'Waterfall',
        desciption : "Molto verde e idrogeno e ossigeno soggetti impotenti alla gravità",
    },
    {
        url : 'https://www.bwallpaperhd.com/wp-content/uploads/2019/06/ManitobaSky.jpg',
        title : 'Thunder',
        desciption : "Può essere giorno e notte nello stesso momento? Sì, se c'è un fulmine di mezzo",
    },
    {
        url : 'https://getwallpapers.com/wallpaper/full/9/b/a/410201.jpg',
        title : 'Big Rock',
        desciption : "Voglio essere vostro schiavo e volare tra spazi stellati in catene",
    }, 
    {
        url : 'https://www.bwallpaperhd.com/wp-content/uploads/2019/07/SecondBeach.jpg',
        title : 'Wilson',
        desciption : "Bob, Wilson e un legno grosso su sassini piccini",
    }
];

const carouselImage = document.querySelector('#my-carousel .my-carousel-images');
const carousel = document.getElementById('my-carousel');
const thumbnail = document.querySelector('div.my-thumbnails');
const thumbnailPreview = document.getElementsByClassName('my-thumbnail-preview');
const previousButton = document.querySelector('.my-thumbnails .my-previous');
const nextButton = document.querySelector('div.my-thumbnails div.my-next');
const afterCarousel = document.getElementById('my-after-carousel');
let intervalId;
let counter = 0;
let previousCounter=0;

for(let i=0; i<images.length; i++){
    const newThumbnailPreview = document.createElement('div');
    newThumbnailPreview.classList.add('my-thumbnail-preview');
    newThumbnailPreview.innerHTML = "<img src='"+images[i].url+"'>";
    thumbnail.append(newThumbnailPreview);
}

addImage(images,carouselImage,counter,thumbnailPreview,previousCounter);

afterCarousel.innerHTML= " <button class='btn btn-outline-dark me-5 fw-bold'>Auto Previous</button> <button class='btn btn-outline-danger fw-bold'>Stop</button> <button class='btn btn-outline-dark ms-5 fw-bold'>Auto Next</button>"

document.querySelectorAll('#my-after-carousel .btn')[0].addEventListener('click',autoPrev);
document.querySelectorAll('#my-after-carousel .btn')[1].addEventListener('click',stop);
document.querySelectorAll('#my-after-carousel .btn')[2].addEventListener('click',autoNext);

console.log(document.querySelectorAll('#my-after-carousel .btn')[1])
function autoPrev(){
    intervalId = setInterval(previousButton.click(),500);
}
function stop(){
    clearInterval(intervalId);
}
function autoNext(){
    intervalId = setInterval(swipeNext,500);
}


function addImage(images,carouselImage,counter,thumbnailPreview,previousCounter){
    const img = "<img src='"+images[counter].url+"'>";
    const title = document.createElement('h1');
    const description = document.createElement('p');
    description.innerHTML = images[counter].desciption;
    title.innerHTML = images[counter].title;
    carouselImage.innerHTML= img;
    carouselImage.append(title,description);
    thumbnailPreview[previousCounter].classList.remove('viewing');
    thumbnailPreview[counter].classList.add('viewing');
}

function swipePrevious(){
    previousCounter = counter;
    if(counter>0 && counter<images.length){
        counter--;
    }else if(counter <= 0){
        counter = images.length-1;
    }
    addImage(images,carouselImage,counter,thumbnailPreview,previousCounter);
}

function swipeNext(){
    previousCounter = counter;
    if(counter>=0 && counter<images.length-1){
        counter++;
    }else if(counter >= images.length-1){
        counter = 0;
    }
    addImage(images,carouselImage,counter,thumbnailPreview,previousCounter);
}

nextButton.addEventListener('click',swipeNext);
previousButton.addEventListener('click',swipePrevious);

