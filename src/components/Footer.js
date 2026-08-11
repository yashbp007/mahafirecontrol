export function renderFooter() {
  return `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h3>Maharashtra Fire Control</h3>
          <p>Reliable Fire Safety Solutions in Nashik. We provide fire safety products, equipment, maintenance, and compliance support.</p>
          <p><strong>Tagline:</strong> Safety First</p>
        </div>
        
        <div class="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="#/about">About Us</a></li>
            <li><a href="#/services">Services</a></li>
            <li><a href="#/products">Products</a></li>
            <li><a href="#/contact">Contact Us</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h3>Contact Info</h3>
          <ul>
            <li><i class="fas fa-map-marker-alt" style="margin-right: 8px;"></i> Shop No. 2, Sunshine Park, Mane Nagar, Opp. KK Wagh Agriculture College, Dhatak Phata, Nashik</li>
            <li><i class="fas fa-phone-alt" style="margin-right: 8px;"></i> 9220242555, 8655416716</li>
            <li><i class="fas fa-envelope" style="margin-right: 8px;"></i> maharashtra.fire.control@gmail.com</li>
            <li><i class="fab fa-facebook-f" style="margin-right: 8px; color: #1877F2;"></i> <a href="https://www.facebook.com/share/1971WzxY5G/" target="_blank" rel="noopener noreferrer" style="color: #1877F2; font-weight: 500;">Facebook Page</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h3>Compliance</h3>
          <ul>
            <li><strong>Reg No:</strong> MH18125813</li>
            <li><strong>FSAI No:</strong> ISK-1-0624-0271</li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Maharashtra Fire Control. All Rights Reserved.</p>
        <p style="margin-top: 10px; font-size: 0.85rem; color: #aaa;">Designed and developed by <span style="color: var(--color-accent); font-weight: 600;">iSky Digital AI</span></p>
      </div>
    </div>
  `;
}
