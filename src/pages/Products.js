export function Products() {
  return `
    <!-- Hero Banner -->
    <section class="hero-banner" style="background: var(--color-secondary); text-align: center; color: white;">
      <div class="container">
        <h1 class="animate-on-scroll slide-up hero-title" style="color: white; margin-bottom: 10px;">Our <span class="text-primary">Products</span></h1>
        <p class="animate-on-scroll slide-up stagger-1 hero-subtitle" style="color: var(--color-accent); font-weight: 600; max-width: 600px; margin: 0 auto;">
          High-Quality, Certified Fire Safety Equipment for Every Environment
        </p>
      </div>
    </section>

    <!-- Main Products Section -->
    <section class="section-padding">
      <div class="container">
        
        <div style="text-align: center; margin-bottom: 50px;" class="animate-on-scroll slide-up">
          <h2 style="font-size: 2.2rem; color: var(--color-secondary); margin-bottom: 15px;">
            Fire Safety <span class="text-primary">Equipment & Extinguishers</span>
          </h2>
          <div style="width: 60px; height: 4px; background-color: var(--color-primary); margin: 0 auto 20px; border-radius: 2px;"></div>
          <p style="color: var(--color-text-light); max-width: 700px; margin: 0 auto; font-size: 1.05rem;">
            All our fire extinguishers are ISI marked, FSAI compliant, and thoroughly tested for maximum reliability during emergencies.
          </p>
        </div>

        <!-- Products Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 35px; align-items: stretch;">
          
          <!-- Product 1: ABC Dry Powder -->
          <div class="card animate-on-scroll slide-up" style="display: flex; flex-direction: column; justify-content: space-between; padding: 25px; border-radius: 16px; border-top: 4px solid var(--color-primary);">
            <div>
              <div style="background: white; border-radius: 12px; padding: 20px; text-align: center; margin-bottom: 20px; box-shadow: var(--shadow-sm); border: 1px solid #eee; height: 260px; display: flex; align-items: center; justify-content: center;" onclick="openLightbox('/assets/s4.jpeg')">
                <img src="/images_videos/mapp.jpg" alt="ABC Dry Powder Extinguisher" style="max-height: 100%; max-width: 100%; object-fit: contain; cursor: pointer;">
              </div>

              <span style="background: rgba(211, 47, 47, 0.1); color: var(--color-primary); padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; margin-bottom: 10px; display: inline-block;">
                Class A, B, C & Electrical
              </span>
              <h3 style="font-size: 1.5rem; color: var(--color-secondary); margin-bottom: 10px;">ABC Dry Powder (MAP)</h3>
              <p style="color: var(--color-text-light); font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px;">
                Multipurpose fire extinguishers effective against solid, liquid, gas, and electrical fires. Recommended for offices, homes, and factories.
              </p>

              <ul style="color: var(--color-text); font-size: 0.95rem; font-weight: 500; line-height: 1.8; margin-bottom: 25px; padding-left: 0; list-style: none;">
                <li style="margin-bottom: 8px; display: flex; align-items: center;"><i class="fas fa-check-circle text-primary" style="margin-right: 10px; font-size: 1.1rem;"></i> <strong>Capacities:</strong> 1kg, 2kg, 4kg, 6kg, 9kg</li>
                <li style="margin-bottom: 8px; display: flex; align-items: center;"><i class="fas fa-check-circle text-primary" style="margin-right: 10px; font-size: 1.1rem;"></i> <strong>Standards:</strong> ISI Marked & CE Certified</li>
                <li style="display: flex; align-items: center;"><i class="fas fa-check-circle text-primary" style="margin-right: 10px; font-size: 1.1rem;"></i> <strong>Propellant:</strong> Nitrogen Gas with Pressure Gauge</li>
              </ul>
            </div>

            <a href="#/contact" class="btn btn-primary" style="text-align: center; width: 100%; font-weight: 600;">Inquire Now</a>
          </div>

          <!-- Product 2: Carbon Dioxide (CO2) -->
          <div class="card animate-on-scroll slide-up stagger-1" style="display: flex; flex-direction: column; justify-content: space-between; padding: 25px; border-radius: 16px; border-top: 4px solid var(--color-accent);">
            <div>
              <div style="background: white; border-radius: 12px; padding: 20px; text-align: center; margin-bottom: 20px; box-shadow: var(--shadow-sm); border: 1px solid #eee; height: 260px; display: flex; align-items: center; justify-content: center;" onclick="openLightbox('/images_videos/co2.jpg')">
                <img src="/images_videos/co2.jpg" alt="Carbon Dioxide CO2 Extinguisher" style="max-height: 100%; max-width: 100%; object-fit: contain; cursor: pointer;">
              </div>

              <span style="background: rgba(255, 193, 7, 0.15); color: #b78103; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; margin-bottom: 10px; display: inline-block;">
                Class B & Electrical Focus
              </span>
              <h3 style="font-size: 1.5rem; color: var(--color-secondary); margin-bottom: 10px;">Carbon Dioxide (CO2)</h3>
              <p style="color: var(--color-text-light); font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px;">
                Leaves zero residue. Perfect for sensitive electrical equipment, server rooms, laboratories, and flammable liquid hazards.
              </p>

              <ul style="color: var(--color-text); font-size: 0.95rem; font-weight: 500; line-height: 1.8; margin-bottom: 25px; padding-left: 0; list-style: none;">
                <li style="margin-bottom: 8px; display: flex; align-items: center;"><i class="fas fa-check-circle text-accent" style="margin-right: 10px; font-size: 1.1rem;"></i> <strong>Capacities:</strong> 2kg, 4.5kg, 6.5kg</li>
                <li style="margin-bottom: 8px; display: flex; align-items: center;"><i class="fas fa-check-circle text-accent" style="margin-right: 10px; font-size: 1.1rem;"></i> <strong>Cylinder:</strong> Seamless High-Grade Steel Body</li>
                <li style="display: flex; align-items: center;"><i class="fas fa-check-circle text-accent" style="margin-right: 10px; font-size: 1.1rem;"></i> <strong>Feature:</strong> Non-conductive & Non-corrosive</li>
              </ul>
            </div>

            <a href="#/contact" class="btn btn-outline" style="text-align: center; width: 100%; font-weight: 600;">Inquire Now</a>
          </div>

          <!-- Product 3: Mechanical Foam (AFFF) -->
          <div class="card animate-on-scroll slide-up stagger-2" style="display: flex; flex-direction: column; justify-content: space-between; padding: 25px; border-radius: 16px; border-top: 4px solid var(--color-primary);">
            <div>
              <div style="background: white; border-radius: 12px; padding: 20px; text-align: center; margin-bottom: 20px; box-shadow: var(--shadow-sm); border: 1px solid #eee; height: 260px; display: flex; align-items: center; justify-content: center;" onclick="openLightbox('/assets/s1.jpeg')">
                <img src="/images_videos/mfff.jpg" alt="Mechanical Foam AFFF Extinguisher" style="max-height: 100%; max-width: 100%; object-fit: contain; cursor: pointer;">
              </div>

              <span style="background: rgba(211, 47, 47, 0.1); color: var(--color-primary); padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; margin-bottom: 10px; display: inline-block;">
                Class A & B Flammable Liquids
              </span>
              <h3 style="font-size: 1.5rem; color: var(--color-secondary); margin-bottom: 10px;">Mechanical Foam (AFFF)</h3>
              <p style="color: var(--color-text-light); font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px;">
                Highly effective blanket foam for liquid fuel fires. Cuts off oxygen supply rapidly to prevent dangerous re-ignition.
              </p>

              <ul style="color: var(--color-text); font-size: 0.95rem; font-weight: 500; line-height: 1.8; margin-bottom: 25px; padding-left: 0; list-style: none;">
                <li style="margin-bottom: 8px; display: flex; align-items: center;"><i class="fas fa-check-circle text-primary" style="margin-right: 10px; font-size: 1.1rem;"></i> <strong>Capacities:</strong> 9 Litre / 50 Litre Trolley</li>
                <li style="margin-bottom: 8px; display: flex; align-items: center;"><i class="fas fa-check-circle text-primary" style="margin-right: 10px; font-size: 1.1rem;"></i> <strong>Protection:</strong> Anti-corrosive Internal Coating</li>
                <li style="display: flex; align-items: center;"><i class="fas fa-check-circle text-primary" style="margin-right: 10px; font-size: 1.1rem;"></i> <strong>Action:</strong> Rapid Knockdown Capability</li>
              </ul>
            </div>

            <a href="#/contact" class="btn btn-primary" style="text-align: center; width: 100%; font-weight: 600;">Inquire Now</a>
          </div>

        </div>

      </div>
    </section>

    <!-- Lightbox Modal -->
    <div id="lightbox" class="lightbox" onclick="closeLightbox()">
      <span class="close-lightbox">&times;</span>
      <img class="lightbox-content" id="lightbox-img">
    </div>
  `;
}

