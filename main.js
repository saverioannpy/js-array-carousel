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
const prev = document.querySelector('.prev');
const after = document.querySelector('.after');

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

    //seleziono tutte le slide creandomi così un nodo
    const domSlides = document.querySelectorAll('.slide'); 
    console.log(domSlides);


    //eventi al click
    prev.addEventListener('click', function() {
        if(currentSlide > 0){  
            domSlides[currentSlide].classList.remove('active'); //al click viene presa la slide corrente e le viene tolta la classe active
            currentSlide--; //il puntato viene decrementato e passa all'immagine precedente
            domSlides[currentSlide].classList.add('active');//all'immagine precedente viene aggiunta la classe active così da renderla l'imamgina che viene visualizzata
            console.log(currentSlide);
        }else{ //l'else serve a rendere il carosello circolare a ritroso
            domSlides[currentSlide].classList.remove('active');
            currentSlide = domSlides.length - 1;
            domSlides[currentSlide].classList.add('active');
            console.log(currentSlide);
        }
    }
    )


    after.addEventListener('click', function() {
        if(currentSlide < domSlides.length - 1){
            domSlides[currentSlide].classList.remove('active');
            currentSlide++;
            domSlides[currentSlide].classList.add('active');
            console.log(currentSlide);
        }else{
            domSlides[currentSlide].classList.remove('active');
            currentSlide = 0;
            domSlides[currentSlide].classList.add('active');
            console.log(currentSlide);
        }
    })

