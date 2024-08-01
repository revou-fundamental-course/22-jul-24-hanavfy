const bannerContainer = document.querySelector('.arrtikel');
const bannerSlides = document.querySelectorAll('.banner-slide');
let currentSlide = 0;

function autoslide() {
  bannerSlides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % bannerSlides.length;
  bannerSlides[currentSlide].classList.add('active');
}

setInterval(autoslide, 2000); // adjust the interval to your liking

// Get the form element
const form = document.getElementById('login-form');

// Add event listener to the form
form.addEventListener('submit', (e) => {
  // Prevent default form submission
  e.preventDefault();

  // Get the input values
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const packageValue = document.getElementById('package').value;
  const number = document.getElementById('number').value;

  // Validate the input values
  if (username === '' || email === '' || packageValue === '' || number === '') {
    alert('Please fill in all fields');
    return;
  }

  // Send the form data to the server
  const formData = new FormData();
  formData.append('username', username);
  formData.append('email', email);
  formData.append('package', packageValue);
  formData.append('number', number);

  fetch('/api/login', {
    method: 'POST',
    body: formData,
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
});

// Add event listener to the window resize
window.addEventListener('resize', () => {
  // Get the current window width
  const width = window.innerWidth;

  // If the window width is less than 768px, add a class to the form
  if (width < 768) {
    form.classList.add('responsive');
  } else {
    form.classList.remove('responsive');
  }
});