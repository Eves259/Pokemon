//Darkmode
function dark () {
    var element = document.body; //Sets the variable element equal to the HTML body
    element.classList.toggle('darkmode');//This allows darkmode to be toggled on and off
}

var slideNumber = 1;
showSlides(slideNumber);

function changeSlide(n) {
    showSlides(slideNumber += n);
}

function currentSlide(n) {
    showSlides(slideNumber = n);
}

function showSlides(n) { //This is used to change the image being shown in the slideshow. It hides the old image and displays a new one when the arrow is pressed. 
    var i = 0;
    var slides = document.getElementsByClassName('slide');
    if (n > slides.length) {
        slideNumber = 1;
    }
    if (n < 1) {
        slideNumber = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideNumber-1].style.display = 'block';
}

//Music
var sound = document.getElementById("Groover");  //This sets the variable 'sound' equal to the id labeled 'Groover'

function play() { //This plays music and is used in the activateSound function to do so.
    sound.play();
}

function pause() { //This pauses music and is used in the activateSoundfunction to do this.
    sound.pause();
}

function activateSound() { //This function is linked to a button. When the button is pressed it plays music and when it is pressed again it pauses the music. It uses the play and pause functions to do this.
    if (sound.paused) {
        sound.play();
    } else {
        sound.pause();
    }
}