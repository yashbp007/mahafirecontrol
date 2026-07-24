import './style.css';
import { setupRouter } from './router.js';
import { renderNavbar } from './components/Navbar.js';
import { renderFooter } from './components/Footer.js';

document.querySelector('#navbar-container').innerHTML = renderNavbar();
document.querySelector('#footer-container').innerHTML = renderFooter();

// Initialize Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

setupRouter();
