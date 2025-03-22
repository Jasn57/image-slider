let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');

function showSlide() {
    
    slideIndex++;
    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    const offset = -slideIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

setInterval(showSlide, 3000);
