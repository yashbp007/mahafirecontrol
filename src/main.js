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

// Dynamic Navbar Scroll Effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Lightbox Logic for Gallery
window.openLightbox = function(imageSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if (lightbox && lightboxImg) {
    lightboxImg.src = imageSrc;
    lightbox.classList.add('active');
  }
};

window.closeLightbox = function() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
  }
};

// WhatsApp Form Redirection Handlers
window.sendContactWhatsApp = function(e) {
  e.preventDefault();
  const name = document.getElementById('contact_name')?.value?.trim() || '';
  const phone = document.getElementById('contact_phone')?.value?.trim() || '';
  const email = document.getElementById('contact_email')?.value?.trim() || '';
  const message = document.getElementById('contact_message')?.value?.trim() || '';

  let text = `Hello Maharashtra Fire Control,\n\nI would like to make an inquiry:\n`;
  text += `👤 *Name:* ${name}\n`;
  text += `📞 *Phone:* ${phone}\n`;
  if (email) text += `✉️ *Email:* ${email}\n`;
  text += `💬 *Message:* ${message}`;

  const whatsappUrl = `https://wa.me/919220242555?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, '_blank');
};

window.sendReviewWhatsApp = function(e) {
  e.preventDefault();
  const name = document.getElementById('review_name')?.value?.trim() || '';
  const role = document.getElementById('review_role')?.value?.trim() || '';
  const rating = document.getElementById('review_rating')?.value || '⭐⭐⭐⭐⭐ (5/5)';
  const message = document.getElementById('review_message')?.value?.trim() || '';

  let text = `Hello Maharashtra Fire Control,\n\nHere is my review:\n`;
  text += `👤 *Name:* ${name}\n`;
  if (role) text += `🏢 *Role/Org:* ${role}\n`;
  text += `⭐ *Rating:* ${rating}\n`;
  text += `📝 *Review:* ${message}`;

  const whatsappUrl = `https://wa.me/919220242555?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, '_blank');
};

setupRouter();
