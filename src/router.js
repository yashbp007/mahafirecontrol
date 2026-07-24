import { Home } from './pages/Home.js';
import { About } from './pages/About.js';
import { Services } from './pages/Services.js';
import { Products } from './pages/Products.js';
import { Certification } from './pages/Certification.js';
import { Reviews } from './pages/Reviews.js';
import { Gallery } from './pages/Gallery.js';
import { GovtGR } from './pages/GovtGR.js';
import { Contact } from './pages/Contact.js';

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

  const render = () => {
    let path = window.location.hash.slice(1) || '/';
    
    // Fallback to home if route not found
    if (!routes[path]) {
      path = '/';
    }

    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Update active nav link
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${path}`) {
        link.classList.add('active');
      }
    });

    // Animate enter
    contentDiv.classList.remove('page-enter');
    // small delay to restart animation
    setTimeout(() => {
      contentDiv.innerHTML = routes[path]();
      contentDiv.classList.add('page-enter');
      
      // if page has an init function, we could call it here if we exported objects
      // but since we are just returning strings for now, it's fine.
    }, 10);
  };

  window.addEventListener('hashchange', render);
  render(); // Initial render
}
