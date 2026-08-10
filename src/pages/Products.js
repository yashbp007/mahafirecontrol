export function Products() {
  return `
    <!-- Hero Banner -->
    <section class="hero-banner" style="background: var(--color-secondary); text-align: center; color: white;">
      <div class="container">
        <h1 class="animate-on-scroll slide-up hero-title" style="color: white; margin-bottom: 10px;">Our <span class="text-primary">Products</span></h1>
        <p class="animate-on-scroll slide-up stagger-1 hero-subtitle" style="color: #ddd; max-width: 600px; margin: 0 auto;">High-quality, certified fire safety equipment for every environment.</p>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        
        <!-- Category 1 -->
        <div class="animate-on-scroll slide-up" style="display: flex; flex-wrap: wrap; align-items: center; gap: 50px; margin-bottom: 50px;">
          <div style="flex: 1; min-width: 250px;">
            <img src="/assets/s4.jpeg" alt="ABC Dry Powder" class="img-responsive" style="border-radius: 16px; box-shadow: var(--shadow-lg);">
          </div>
          <div style="flex: 1; min-width: 250px;">
            <h2 style="font-size: 2rem; color: var(--color-secondary); margin-bottom: 10px;">ABC Dry Powder (MAP)</h2>
            <div style="width: 50px; height: 3px; background-color: var(--color-primary); margin-bottom: 20px; border-radius: 2px;"></div>
            <p style="color: var(--color-text-light); margin-bottom: 15px;">Multipurpose fire extinguishers effective against Class A, B, and C fires, as well as electrical fires. Ideal for offices, homes, and factories.</p>
            <ul style="color: var(--color-text); font-weight: 500; line-height: 1.8;">
              <li><i class="fas fa-check-circle text-primary" style="margin-right: 8px;"></i> Available in 1kg, 2kg, 4kg, 6kg, 9kg</li>
              <li><i class="fas fa-check-circle text-primary" style="margin-right: 8px;"></i> ISI Marked & CE Certified</li>
              <li><i class="fas fa-check-circle text-primary" style="margin-right: 8px;"></i> Easy to operate pressure gauge</li>
            </ul>
          </div>
        </div>

        <!-- Category 2 -->
        <div class="animate-on-scroll slide-up" style="display: flex; flex-wrap: wrap-reverse; align-items: center; gap: 50px; margin-bottom: 50px;">
          <div style="flex: 1; min-width: 250px;">
            <h2 style="font-size: 2rem; color: var(--color-secondary); margin-bottom: 10px;">Carbon Dioxide (CO2)</h2>
            <div style="width: 50px; height: 3px; background-color: var(--color-accent); margin-bottom: 20px; border-radius: 2px;"></div>
            <p style="color: var(--color-text-light); margin-bottom: 15px;">Leaves no residue. Perfect for Class B and C fires, highly recommended for server rooms, laboratories, and electrical installations.</p>
            <ul style="color: var(--color-text); font-weight: 500; line-height: 1.8;">
              <li><i class="fas fa-check-circle text-accent" style="margin-right: 8px;"></i> Available in 2kg, 4.5kg, 6.5kg</li>
              <li><i class="fas fa-check-circle text-accent" style="margin-right: 8px;"></i> Seamless steel cylinders</li>
              <li><i class="fas fa-check-circle text-accent" style="margin-right: 8px;"></i> Non-corrosive and non-conductive</li>
            </ul>
          </div>
          <div style="flex: 1; min-width: 250px;">
            <img src="/assets/s5.jpeg" alt="CO2 Extinguisher" class="img-responsive" style="border-radius: 16px; box-shadow: var(--shadow-lg);">
          </div>
        </div>

        <!-- Category 3 -->
        <div class="animate-on-scroll slide-up" style="display: flex; flex-wrap: wrap; align-items: center; gap: 50px; margin-bottom: 50px;">
          <div style="flex: 1; min-width: 250px;">
            <img src="/assets/s1.jpeg" alt="Mechanical Foam" class="img-responsive" style="border-radius: 16px; box-shadow: var(--shadow-lg);">
          </div>
          <div style="flex: 1; min-width: 250px;">
            <h2 style="font-size: 2rem; color: var(--color-secondary); margin-bottom: 10px;">Mechanical Foam (AFFF)</h2>
            <div style="width: 50px; height: 3px; background-color: var(--color-primary); margin-bottom: 20px; border-radius: 2px;"></div>
            <p style="color: var(--color-text-light); margin-bottom: 15px;">Highly effective on flammable liquid fires (Class B). The foam blankets the fire, cutting off oxygen and preventing re-ignition.</p>
            <ul style="color: var(--color-text); font-weight: 500; line-height: 1.8;">
              <li><i class="fas fa-check-circle text-primary" style="margin-right: 8px;"></i> Available in 9 Litre</li>
              <li><i class="fas fa-check-circle text-primary" style="margin-right: 8px;"></i> Anti-corrosive internal coating</li>
              <li><i class="fas fa-check-circle text-primary" style="margin-right: 8px;"></i> Quick knockdown capability</li>
            </ul>
          </div>
        </div>

        <!-- Other Products Grid -->
        <h2 class="animate-on-scroll slide-up text-center" style="font-size: 2.5rem; color: var(--color-secondary); margin: 60px 0 30px;">Other <span class="text-accent">Accessories</span></h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px;">
          <div class="card animate-on-scroll slide-up" style="text-align: center;">
            <h4 style="margin-bottom: 10px;">Fire Alarms</h4>
            <p style="font-size: 0.9rem; color: var(--color-text-light);">Smoke detectors and hooters.</p>
          </div>
          <div class="card animate-on-scroll slide-up stagger-1" style="text-align: center;">
            <h4 style="margin-bottom: 10px;">Fire Hydrants</h4>
            <p style="font-size: 0.9rem; color: var(--color-text-light);">Valves, hoses, and nozzles.</p>
          </div>
          <div class="card animate-on-scroll slide-up stagger-2" style="text-align: center;">
            <h4 style="margin-bottom: 10px;">Safety Signage</h4>
            <p style="font-size: 0.9rem; color: var(--color-text-light);">Glow-in-the-dark exit signs.</p>
          </div>
        </div>

      </div>
    </section>
  `;
}
