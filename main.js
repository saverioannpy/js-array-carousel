/*
 <div class="slide active"><img src="img/01.jpg" alt="img 1"></div>
            <div class="slide"><img src="img/02.jpg" alt="img 2"></div>
            <div class="slide"><img src="img/03.jpg" alt="img 3"></div>
            <div class="slide"><img src="img/04.jpg" alt="img 4"></div>
            <div class="slide"><img src="img/05.jpg" alt="img 5"></div>
            <div class="arrow left"><i class="fa-solid fa-chevron-left"></i></div>
            <div class="arrow right"><i class="fa-solid fa-chevron-right"></i></div>
        </div>
*/

'use strict';

const images = [ //inizializzo il mio array che mi farà da database per le mie immagini;
        '01.jpg', 
        '02.jpg', 
        '03.jpg', 
        '04.jpg', 
        '05.jpg'
];

const slider = document.querySelector('.slider'); //mi prendo rispettivamente gli elementi slider, freccia sinistra e freccia destra
const left = document.querySelector('.left');
const right = document.querySelector('.right');

let currentSlide = 0;

for( let i=0 ; i < images.length ; i++){

    //creao l'elemento slide
    const slide = document.createElement('div');
    slide.classList.add('slide');

    if (i == currentSlide){
        slide.classList.add('active');
    }

    //creo l'elemento immagine
    const img = document.createElement('img');
    img.src = `img/${images[i]}`;
    img.alt = `Immagine ${i}`;

    slide.append(img);
    slider.append(slide);
}
