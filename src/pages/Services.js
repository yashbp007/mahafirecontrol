export function Services() {
  return `
    <div style="background: var(--color-secondary); color: white; padding: 80px 20px; text-align: center;">
      <h1 style="color: white; margin-bottom: 10px;">Our Services</h1>
      <p style="color: var(--color-accent); font-weight: 600;">Comprehensive Fire Safety Solutions</p>
    </div>
    
    <section>
      <div class="container">
        <p class="text-center" style="max-width: 800px; margin: 0 auto 50px; font-size: 1.1rem;">
          Maharashtra Fire Control provides a complete suite of services to ensure your premises are safe and compliant with all fire safety regulations. Explore our professional services below.
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px;">
          
          <div class="card" style="text-align: center;">
            <i class="fas fa-fire-extinguisher fa-3x text-primary" style="margin-bottom: 20px;"></i>
            <h3 style="margin-bottom: 15px;">Fire Extinguisher Supply</h3>
            <p style="color: var(--color-text-light);">We provide a wide range of ISI marked fire extinguishers for all types of fires, ensuring you have the right equipment for your specific needs.</p>
          </div>

          <div class="card" style="text-align: center;">
            <i class="fas fa-sync-alt fa-3x text-primary" style="margin-bottom: 20px;"></i>
            <h3 style="margin-bottom: 15px;">Fire Extinguisher Refilling</h3>
            <p style="color: var(--color-text-light);">Timely and professional refilling services at site or in our facility to ensure your extinguishers are fully charged and ready.</p>
          </div>

          <div class="card" style="text-align: center;">
            <i class="fas fa-tools fa-3x text-primary" style="margin-bottom: 20px;"></i>
            <h3 style="margin-bottom: 15px;">Fire Extinguisher Maintenance</h3>
            <p style="color: var(--color-text-light);">Routine check-ups, pressure testing, and part replacements to guarantee the operational readiness of your equipment.</p>
          </div>

          <div class="card" style="text-align: center;">
            <i class="fas fa-hard-hat fa-3x text-primary" style="margin-bottom: 20px;"></i>
            <h3 style="margin-bottom: 15px;">Safety Equipment Installation</h3>
            <p style="color: var(--color-text-light);">Expert installation of fire safety equipment, alarms, and hydrants as per standard guidelines and safety codes.</p>
          </div>

          <div class="card" style="text-align: center;">
            <i class="fas fa-search fa-3x text-primary" style="margin-bottom: 20px;"></i>
            <h3 style="margin-bottom: 15px;">Fire Safety Inspection</h3>
            <p style="color: var(--color-text-light);">Comprehensive safety audits and inspections of your premises to identify risks and suggest mitigations.</p>
          </div>

          <div class="card" style="text-align: center;">
            <i class="fas fa-handshake fa-3x text-primary" style="margin-bottom: 20px;"></i>
            <h3 style="margin-bottom: 15px;">AMC / Annual Maintenance</h3>
            <p style="color: var(--color-text-light);">Hassle-free Annual Maintenance Contracts (AMC) providing year-round support and scheduled servicing.</p>
          </div>

          <div class="card" style="text-align: center;">
            <i class="fas fa-industry fa-3x text-primary" style="margin-bottom: 20px;"></i>
            <h3 style="margin-bottom: 15px;">Industrial & Commercial Solutions</h3>
            <p style="color: var(--color-text-light);">Tailored heavy-duty fire protection systems designed for factories, warehouses, and commercial complexes.</p>
          </div>

          <div class="card" style="text-align: center;">
            <i class="fas fa-file-signature fa-3x text-primary" style="margin-bottom: 20px;"></i>
            <h3 style="margin-bottom: 15px;">Safety Guidance & Compliance</h3>
            <p style="color: var(--color-text-light);">Expert consultancy on fire safety regulations, Govt GRs, and achieving FSAI compliance for your establishment.</p>
          </div>

        </div>

        <div class="text-center" style="margin-top: 50px;">
          <a href="#/contact" class="btn btn-primary" style="font-size: 1.2rem; padding: 15px 30px;">Request a Service</a>
        </div>
      </div>
    </section>
  `;
}
