export function Home() {
  return `
    <div class="hero" style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('/assets/hero_bg.png') center/cover; padding: 120px 20px; text-align: center; color: white; display: flex; align-items: center; justify-content: center; min-height: 85vh;">
      <div style="background: rgba(15, 15, 15, 0.65); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border: 1px solid rgba(255, 255, 255, 0.15); padding: 60px 40px; border-radius: 20px; max-width: 950px; box-shadow: 0 30px 60px rgba(0,0,0,0.6);">
        <img src="/assets/logoFinal-removebg-preview.png" alt="Maharashtra Fire Control" style="height: 140px; margin-bottom: 25px; background: rgba(255,255,255,0.95); border-radius: 12px; padding: 15px; box-shadow: 0 10px 25px rgba(0,0,0,0.2);">
        <h1 style="color: white; font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 10px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); font-weight: 800; letter-spacing: -1px;">Maharashtra Fire Control</h1>
        <p style="font-size: clamp(1.2rem, 3vw, 1.8rem); color: var(--color-accent); font-weight: 700; margin-bottom: 25px; text-transform: uppercase; letter-spacing: 2px;">Safety First</p>
        <h2 style="color: white; margin-bottom: 25px; font-weight: 400; font-size: clamp(1.1rem, 2.5vw, 1.5rem);">Reliable Fire Safety Solutions in Nashik</h2>
        <p style="max-width: 700px; margin: 0 auto 40px; font-size: 1.15rem; line-height: 1.8; color: #E0E0E0;">
          Your trusted partner for fire safety equipment, refilling, maintenance, installation, inspection, and compliance support. We serve residential, commercial, industrial, and government clients with top-tier safety standards.
        </p>
        <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
          <a href="tel:9220242555" class="btn btn-primary" style="padding: 14px 32px; font-size: 1.1rem; border-radius: 30px;"><i class="fas fa-phone-alt" style="margin-right: 10px;"></i> Call Now</a>
          <a href="#/products" class="btn btn-outline" style="padding: 14px 32px; font-size: 1.1rem; color: white; border: 2px solid white; border-radius: 30px;"><i class="fas fa-fire-extinguisher" style="margin-right: 10px;"></i> View Products</a>
          <a href="#/services" class="btn" style="padding: 14px 32px; font-size: 1.1rem; background: var(--color-accent); color: var(--color-secondary); border-radius: 30px; font-weight: 700;"><i class="fas fa-tools" style="margin-right: 10px;"></i> Get Service</a>
        </div>
      </div>
    </div>

    <!-- Quick Navigation -->
    <section class="bg-light" style="background: var(--color-bg); padding: 80px 0;">
      <div class="container">
        <h2 class="section-title">Quick Links</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 25px;">
          <a href="#/products" class="card text-center" style="display: block; border-top: 4px solid var(--color-primary);">
            <div style="width: 80px; height: 80px; background: rgba(211, 47, 47, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
              <i class="fas fa-fire-extinguisher fa-2x text-primary"></i>
            </div>
            <h3>Products</h3>
            <p style="color: var(--color-text-light); margin-top: 10px;">Explore our range of ISI marked fire extinguishers and safety equipment.</p>
          </a>
          <a href="#/services" class="card text-center" style="display: block; border-top: 4px solid var(--color-primary);">
            <div style="width: 80px; height: 80px; background: rgba(211, 47, 47, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
              <i class="fas fa-tools fa-2x text-primary"></i>
            </div>
            <h3>Services</h3>
            <p style="color: var(--color-text-light); margin-top: 10px;">Professional refilling, maintenance, installation, and inspection.</p>
          </a>
          <a href="#/certification" class="card text-center" style="display: block; border-top: 4px solid var(--color-accent);">
            <div style="width: 80px; height: 80px; background: rgba(255, 193, 7, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
              <i class="fas fa-certificate fa-2x text-accent" style="color: #F57F17;"></i>
            </div>
            <h3>Certifications</h3>
            <p style="color: var(--color-text-light); margin-top: 10px;">View our Government registrations and FSAI credentials.</p>
          </a>
          <a href="#/govt-gr" class="card text-center" style="display: block; border-top: 4px solid var(--color-secondary);">
            <div style="width: 80px; height: 80px; background: rgba(51, 51, 51, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
              <i class="fas fa-file-contract fa-2x text-secondary" style="color: var(--color-secondary);"></i>
            </div>
            <h3>Govt GR & Notices</h3>
            <p style="color: var(--color-text-light); margin-top: 10px;">Important fire safety circulars and compliance updates.</p>
          </a>
          <a href="#/gallery" class="card text-center" style="display: block; border-top: 4px solid var(--color-primary);">
            <div style="width: 80px; height: 80px; background: rgba(211, 47, 47, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
              <i class="fas fa-images fa-2x text-primary"></i>
            </div>
            <h3>Gallery</h3>
            <p style="color: var(--color-text-light); margin-top: 10px;">View our completed work, products, and facility operations.</p>
          </a>
          <a href="#/contact" class="card text-center" style="display: block; border-top: 4px solid var(--color-primary);">
            <div style="width: 80px; height: 80px; background: rgba(211, 47, 47, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
              <i class="fas fa-envelope fa-2x text-primary"></i>
            </div>
            <h3>Contact Us</h3>
            <p style="color: var(--color-text-light); margin-top: 10px;">Get in touch immediately for inquiries and safety support.</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section style="padding: 80px 0;">
      <div class="container">
        <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 50px;">
          <div style="flex: 1; min-width: 250px;">
            <img src="/assets/why_choose_us.png" alt="Fire Safety Professional" style="width: 100%; height: 450px; object-fit: cover; border-radius: 16px; box-shadow: var(--shadow-lg);">
          </div>
          <div style="flex: 1; min-width: 250px;">
            <h2 style="font-size: 2.5rem; margin-bottom: 20px; color: var(--color-secondary);">Why Choose <span class="text-primary">Us?</span></h2>
            <div style="width: 60px; height: 4px; background-color: var(--color-primary); margin-bottom: 30px; border-radius: 2px;"></div>
            
            <div style="margin-bottom: 25px; display: flex; gap: 20px;">
              <div style="width: 50px; height: 50px; background: var(--color-bg); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <i class="fas fa-shield-alt text-primary" style="font-size: 1.5rem;"></i>
              </div>
              <div>
                <h3 style="margin-bottom: 8px;">Safety First Approach</h3>
                <p style="color: var(--color-text-light);">We prioritize your safety above all else, ensuring that our solutions meet the highest industry standards and government regulations.</p>
              </div>
            </div>

            <div style="margin-bottom: 25px; display: flex; gap: 20px;">
              <div style="width: 50px; height: 50px; background: var(--color-bg); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <i class="fas fa-cogs text-primary" style="font-size: 1.5rem;"></i>
              </div>
              <div>
                <h3 style="margin-bottom: 8px;">End-to-End Solutions</h3>
                <p style="color: var(--color-text-light);">From product supply and installation to maintenance, refilling, and inspection, we are your single point of contact.</p>
              </div>
            </div>

            <div style="display: flex; gap: 20px;">
              <div style="width: 50px; height: 50px; background: var(--color-bg); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <i class="fas fa-user-shield text-primary" style="font-size: 1.5rem;"></i>
              </div>
              <div>
                <h3 style="margin-bottom: 8px;">Certified & Reliable</h3>
                <p style="color: var(--color-text-light);">Registered under MH18125813 and FSAI No. ISK-1-0624-0271, we bring proven credibility to every project.</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products Preview -->
    <section style="background: var(--color-bg); padding: 80px 0;">
      <div class="container text-center">
        <h2 class="section-title">Featured Product Categories</h2>
        <p style="margin-bottom: 40px; color: var(--color-text-light); max-width: 600px; margin-left: auto; margin-right: auto;">We offer a comprehensive range of ISI certified fire extinguishers designed to combat all classes of fire effectively.</p>
        
        <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; margin-bottom: 40px;">
          <span style="background: white; padding: 12px 24px; border-radius: 30px; box-shadow: var(--shadow-sm); font-weight: 600; color: var(--color-secondary); transition: all 0.3s ease; cursor: default;" onmouseover="this.style.background='var(--color-primary)'; this.style.color='white';" onmouseout="this.style.background='white'; this.style.color='var(--color-secondary)';">Water CO2</span>
          <span style="background: white; padding: 12px 24px; border-radius: 30px; box-shadow: var(--shadow-sm); font-weight: 600; color: var(--color-secondary); transition: all 0.3s ease; cursor: default;" onmouseover="this.style.background='var(--color-primary)'; this.style.color='white';" onmouseout="this.style.background='white'; this.style.color='var(--color-secondary)';">BC Dry Powder</span>
          <span style="background: white; padding: 12px 24px; border-radius: 30px; box-shadow: var(--shadow-sm); font-weight: 600; color: var(--color-secondary); transition: all 0.3s ease; cursor: default;" onmouseover="this.style.background='var(--color-primary)'; this.style.color='white';" onmouseout="this.style.background='white'; this.style.color='var(--color-secondary)';">Mechanical Foam</span>
          <span style="background: white; padding: 12px 24px; border-radius: 30px; box-shadow: var(--shadow-sm); font-weight: 600; color: var(--color-secondary); transition: all 0.3s ease; cursor: default;" onmouseover="this.style.background='var(--color-primary)'; this.style.color='white';" onmouseout="this.style.background='white'; this.style.color='var(--color-secondary)';">ABC Stored Pressure</span>
          <span style="background: white; padding: 12px 24px; border-radius: 30px; box-shadow: var(--shadow-sm); font-weight: 600; color: var(--color-secondary); transition: all 0.3s ease; cursor: default;" onmouseover="this.style.background='var(--color-primary)'; this.style.color='white';" onmouseout="this.style.background='white'; this.style.color='var(--color-secondary)';">Clean Agent</span>
        </div>
        <a href="#/products" class="btn btn-primary" style="padding: 15px 40px; font-size: 1.1rem; border-radius: 30px;">Explore All Products <i class="fas fa-arrow-right" style="margin-left: 8px;"></i></a>
      </div>
    </section>

    <!-- Review Preview -->
    <section style="padding: 80px 0;">
      <div class="container text-center">
        <h2 class="section-title">Happy Customers</h2>
        <div class="card" style="max-width: 700px; margin: 0 auto; text-align: left; padding: 40px; border-left: 5px solid var(--color-accent); position: relative;">
          <i class="fas fa-quote-left text-primary" style="font-size: 3rem; position: absolute; top: 20px; right: 30px; opacity: 0.1;"></i>
          <div style="color: var(--color-accent); font-size: 1.2rem; margin-bottom: 20px;">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <p style="font-size: 1.2rem; font-style: italic; margin-bottom: 25px; line-height: 1.7; color: var(--color-secondary);">"Reliable and timely service for extinguisher refilling. Their team is extremely professional and their guidance on FSAI compliance helped our business tremendously. Highly recommended for any commercial setup in Nashik."</p>
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
            <div>
              <strong style="font-size: 1.1rem; display: block;">Rajesh K.</strong>
              <span style="color: var(--color-text-light); font-size: 0.9rem;">Commercial Client, Nashik</span>
            </div>
            <a href="#/reviews" class="btn btn-outline" style="border-radius: 30px; padding: 10px 20px;">Read More Reviews</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Strip -->
    <section style="background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary)); color: white; padding: 60px 0;">
      <div class="container" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 30px;">
        <div>
          <h3 style="color: white; margin: 0 0 10px; font-size: 2rem;">Need immediate fire safety assistance?</h3>
          <p style="color: rgba(255,255,255,0.8); font-size: 1.1rem;">Our experts are just a call away to handle emergencies and inquiries.</p>
        </div>
        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
          <a href="tel:9220242555" class="btn" style="background: white; color: var(--color-primary); font-size: 1.2rem; font-weight: 700; padding: 15px 30px; border-radius: 30px; display: flex; align-items: center; box-shadow: 0 10px 20px rgba(0,0,0,0.15);"><i class="fas fa-phone-alt" style="margin-right: 12px; color: var(--color-accent);"></i> 9220242555</a>
        </div>
      </div>
    </section>
  `;
}
