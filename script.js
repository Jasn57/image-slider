let currentIndex = 0;
const slides = document.querySelectorAll('.slide'); 
const totalSlides = slides.length; 

function showSlide(index) {
 
  if (index >= totalSlides) {
    currentIndex = 0; 
  } else if (index < 0) {
    currentIndex = totalSlides - 1; 
  } else {
    currentIndex = index;
  }

  const slider = document.querySelector('.slider');
  const offset = -600 * currentIndex; 
  slider.style.transform = `translateX(${offset}px)`;
}

setInterval(() => {
  currentIndex++; 
  showSlide(currentIndex); 
}, 3000); 

showSlide(currentIndex);