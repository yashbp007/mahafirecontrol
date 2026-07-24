export function renderNavbar() {
  return `
    <div class="nav-container">
      <a href="#/" class="logo">
        <img src="/assets/logoFinal-removebg-preview.png" alt="Maharashtra Fire Control Logo" onerror="this.src='https://placehold.co/200x50/white/D32F2F?text=Maharashtra+Fire+Control'">
      </a>
      
      <ul class="nav-links">
        <li><a href="#/">Home</a></li>
        <li><a href="#/about">About Us</a></li>
        <li><a href="#/services">Services</a></li>
        <li><a href="#/products">Products</a></li>
        <li><a href="#/certification">Certification</a></li>
        <li><a href="#/reviews">Reviews</a></li>
        <li><a href="#/gallery">Gallery</a></li>
        <li><a href="#/govt-gr">Govt GR</a></li>
        <li><a href="#/contact" class="btn btn-primary" style="color: white; padding: 8px 16px;">Contact Us</a></li>
      </ul>
      
      <div class="hamburger">
        <i class="fas fa-bars"></i>
      </div>
    </div>
  `;
}
