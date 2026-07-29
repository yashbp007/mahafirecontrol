import { Home } from './pages/Home.js';
import { About } from './pages/About.js';
import { Services } from './pages/Services.js';
import { Products } from './pages/Products.js';
import { Certification } from './pages/Certification.js';
import { Reviews } from './pages/Reviews.js';
import { Gallery } from './pages/Gallery.js';
import { GovtGR } from './pages/GovtGR.js';
import { Contact } from './pages/Contact.js';
import { initAnimations } from './animations.js';
const routes = {
  '/': Home,
  '/about': About,
  '/services': Services,
  '/products': Products,
  '/certification': Certification,
  '/reviews': Reviews,
  '/gallery': Gallery,
  '/govt-gr': GovtGR,
  '/contact': Contact
};

export function setupRouter() {
  const contentDiv = document.getElementById('app-content');
  const navLinks = document.querySelectorAll('.nav-links a');
  const navbarContainer = document.getElementById('navbar-container');
  const footerContainer = document.getElementById('footer-container');

  const render = () => {
    let path = window.location.hash.slice(1) || '/';
    
    // Fallback to home if route not found
    if (!routes[path]) {
      path = '/';
    }

    // Hide navbar and footer on the home page
    if (path === '/') {
      if (navbarContainer) navbarContainer.style.display = 'none';
      if (footerContainer) footerContainer.style.display = 'none';
    } else {
      if (navbarContainer) navbarContainer.style.display = 'block';
      if (footerContainer) footerContainer.style.display = 'block';
    }

    // Update active nav link
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${path}`) {
        link.classList.add('active');
      }
    });

    // Fade out
    contentDiv.style.opacity = '0';
    contentDiv.style.transition = 'opacity 0.25s ease';
    
    setTimeout(() => {
      // Inject content
      contentDiv.innerHTML = routes[path]();
      
      // Scroll to top
      window.scrollTo(0, 0);
      
      // Initialize scroll animations for the new content
      initAnimations();

      // Fade in
      requestAnimationFrame(() => {
        contentDiv.style.opacity = '1';
      });
    }, 250);
  };

  window.addEventListener('hashchange', render);
  render(); // Initial render
}
