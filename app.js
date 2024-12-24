function playMusic() {
  const music = document.getElementById('birthdaySong');
  music.play();
  generateConfetti();
}

function generateConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.innerHTML = "❤️";
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(confetti);
    confetti.addEventListener('animationend', () => {
      confetti.remove();
    });
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color; a
}

// Slideshow Functionality
let currentSlideIndex = 0;
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;

setInterval(function () {
  currentSlideIndex = (currentSlideIndex + 1) % slideCount;
  slides.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}, 3000); // Slide every 3 seconds

function generateRandomStars(numStars) {
  for (let i = 0; i < numStars; i++) {
    // Create a new div for each star
    const star = document.createElement('div');
    star.className = 'star';

    // Set random position for the star
    const topPosition = Math.random() * 100 + '%';  // Random top position
    const leftPosition = Math.random() * 100 + '%';  // Random left position
    const animationDelay = Math.random() * 3 + 's';  // Random animation delay

    // Set the styles for the star
    star.style.top = topPosition;
    star.style.left = leftPosition;
    star.style.background = getRandomColor()
    star.style.animationDelay = animationDelay;
    // star.innerHTML = '⭐️';  // Set the star symbol

    // Append the star to the body
    document.body.appendChild(star);
  }
}

// Call the function to generate 30 random stars
generateRandomStars(30);


