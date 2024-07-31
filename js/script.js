const bannerContainer = document.querySelector('.arrtikel');
const bannerSlides = document.querySelectorAll('.banner-slide');
let currentSlide = 0;

function autoslide() {
  bannerSlides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % bannerSlides.length;
  bannerSlides[currentSlide].classList.add('active');
}

setInterval(autoslide, 2000); // adjust the interval to your liking