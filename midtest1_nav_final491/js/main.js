// File: js/main.js
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.main-nav ul');
navToggle.addEventListener('click', () => { navList.classList.toggle('show'); });
