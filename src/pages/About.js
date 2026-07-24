export function About() {
  return `
    <div style="background: var(--color-secondary); color: white; padding: 80px 20px; text-align: center;">
      <h1 style="color: white; margin-bottom: 10px;">About Us</h1>
      <p style="color: var(--color-accent); font-weight: 600;">Maharashtra Fire Control</p>
    </div>
    
    <section>
      <div class="container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; align-items: center;">
          <div>
            <img src="/assets/logoFinal.png" alt="Maharashtra Fire Control Logo" style="width: 100%; max-width: 400px; display: block; margin: 0 auto; border-radius: var(--border-radius); box-shadow: var(--shadow-md);">
          </div>
          <div>
            <h2 style="margin-bottom: 20px;">Your Trusted Fire Safety Partner</h2>
            <p style="margin-bottom: 15px; font-size: 1.1rem; line-height: 1.8;">
              Based in Nashik, <strong>Maharashtra Fire Control</strong> is a premier provider of comprehensive fire safety solutions. We specialize in supplying high-quality fire safety products, equipment, and providing top-notch maintenance and refilling services.
            </p>
            <p style="margin-bottom: 15px; font-size: 1.1rem; line-height: 1.8;">
              Whether you are a residential building, a commercial complex, or an industrial facility, we bring expertise in <strong>fire protection support, installation, and compliance guidance</strong>. Our team of trained professionals ensures that your premises meet all safety regulations and are prepared for any emergency.
            </p>
            <p style="font-size: 1.1rem; line-height: 1.8;">
              We pride ourselves on our core values: <strong>Reliability, Safety Compliance, Customer Service, and Quality Products</strong>.
            </p>
            
            <div style="margin-top: 30px; display: flex; gap: 15px;">
              <a href="#/contact" class="btn btn-primary">Contact Us Today</a>
              <a href="#/certification" class="btn btn-outline">View Certifications</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style="background: var(--color-bg);">
      <div class="container">
        <h2 class="section-title text-center">Our Core Values</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px; text-align: center;">
          <div class="card">
            <i class="fas fa-shield-alt fa-3x text-primary" style="margin-bottom: 15px;"></i>
            <h3>Reliability</h3>
            <p style="margin-top: 10px; color: var(--color-text-light);">Dependable products and services when you need them most.</p>
          </div>
          <div class="card">
            <i class="fas fa-clipboard-check fa-3x text-primary" style="margin-bottom: 15px;"></i>
            <h3>Safety Compliance</h3>
            <p style="margin-top: 10px; color: var(--color-text-light);">Strict adherence to IS 15683 and government regulations.</p>
          </div>
          <div class="card">
            <i class="fas fa-hands-helping fa-3x text-primary" style="margin-bottom: 15px;"></i>
            <h3>Customer Service</h3>
            <p style="margin-top: 10px; color: var(--color-text-light);">Dedicated support and timely assistance for all our clients.</p>
          </div>
          <div class="card">
            <i class="fas fa-medal fa-3x text-primary" style="margin-bottom: 15px;"></i>
            <h3>Quality Products</h3>
            <p style="margin-top: 10px; color: var(--color-text-light);">We only supply industry-approved, high-grade safety equipment.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
