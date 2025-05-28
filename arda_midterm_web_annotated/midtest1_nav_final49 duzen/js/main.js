// ===============================
// Navigation Toggle Functionality
// ===============================

// Select the navigation toggle button (☰)
const navToggle = document.querySelector('.nav-toggle');

// Select the main navigation list (the <ul> inside the nav)
const navList = document.querySelector('.main-nav ul');

// When the toggle button is clicked, show or hide the nav list
navToggle.addEventListener('click', () => {
  navList.classList.toggle('show'); // Adds or removes the 'show' class
});


// ===============================
// Mouse Glow Effect
// ===============================

// Create a glow element that follows the cursor
document.addEventListener('mousemove', function(e) {
  let glow = document.querySelector('.glow'); // Look for existing glow

  if (!glow) {
    // If glow doesn't exist, create it and add to body
    glow = document.createElement('div');
    glow.classList.add('glow');
    document.body.appendChild(glow);
  }

  // Update glow position to follow cursor
  glow.style.top = e.pageY + 'px';
  glow.style.left = e.pageX + 'px';
});


// ===============================
// Typing Animation on Page Load
// ===============================

// Apply a typing and blinking cursor animation when the page loads
document.addEventListener("DOMContentLoaded", function() {
  const textContainer = document.querySelector(".animated-text-container");
  if (textContainer) {
    textContainer.style.animation = "typing 3s steps(20) forwards, blink 0.75s step-end infinite";
  }
});


// ===============================
// Email Button Function
// ===============================

// Opens the user's default email client to send a message
function sendEmail() {
  window.location.href = "mailto:your-email@example.com";
}