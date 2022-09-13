let slidePosition = 0;
const slides = document.getElementsByClassName('carouselfade');
const totalSlides = slides.length;

document.getElementById('slide-arrow-next')
    .addEventListener("click", function () {
        toNextSlide();
    });
document.getElementById('slide-arrow-prev')
    .addEventListener("click", function () {
        toPrevSlide();
    });

function toNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    updateSlidePosition();
}

function toPrevSlide() {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    updateSlidePosition();
}

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('carouselfade--visible');
        slide.classList.add('carouselfade--hidden');
    }

    slides[slidePosition].classList.add('carouselfade--visible');
}