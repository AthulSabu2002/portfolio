const track = document.querySelector('.project-slider-track');
const slides = Array.from(track.children);
const slideWidth = slides[0].getBoundingClientRect().width;
const slideGap = parseFloat(getComputedStyle(slides[0]).marginRight);

slides.forEach(slide => {
    track.appendChild(slide.cloneNode(true));
});

const totalSlides = track.children.length;
const totalWidth = (slideWidth + slideGap) * totalSlides;

let currentPosition = 0;
const moveDistance = 0.5; 
let intervalId;


track.style.transform = `translateX(${currentPosition}px)`;

function startSlider() {
    intervalId = setInterval(moveSlider, 20); 
}

function moveSlider() {
    currentPosition -= moveDistance;
    

    if (Math.abs(currentPosition) >= totalWidth / 2) {
        currentPosition += totalWidth / 2;
    }
    
    track.style.transform = `translateX(${currentPosition}px)`;
}

function stopSlider() {
    clearInterval(intervalId);
}

function resumeSlider() {
    startSlider();
}


startSlider();


document.querySelectorAll('.project-slide').forEach(slide => {
    slide.addEventListener('mouseover', stopSlider);
    slide.addEventListener('mouseout', resumeSlider);
});