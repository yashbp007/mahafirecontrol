export function Services() {
  return `
    <!-- Hero Banner -->
    <section class="hero-banner" style="background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('/assets/s6.jpeg') center/cover; text-align: center; color: white;">
      <div class="container">
        <h1 class="animate-on-scroll slide-up hero-title" style="color: white; margin-bottom: 10px;">Our <span class="text-primary">Services</span></h1>
        <p class="animate-on-scroll slide-up stagger-1 hero-subtitle" style="color: #ddd; max-width: 600px; margin: 0 auto;">Comprehensive fire safety solutions tailored to residential, commercial, and industrial needs.</p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section-padding">
      <div class="container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px;">
          
          <!-- Service 1 -->
          <div class="card animate-on-scroll slide-up" style="padding: 40px 30px; text-align: center; border-bottom: 4px solid var(--color-primary);">
            <div style="width: 80px; height: 80px; background-color: rgba(211, 47, 47, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px; font-size: 2rem; color: var(--color-primary);">
              <i class="fas fa-fire-extinguisher"></i>
            </div>
            <h3 style="margin-bottom: 15px; font-size: 1.4rem;">Equipment Supply</h3>
            <p style="color: var(--color-text-light);">We supply a wide range of certified fire extinguishers, hydrants, hoses, and advanced safety gear for all types of premises.</p>
          </div>

          <!-- Service 2 -->
          <div class="card animate-on-scroll slide-up stagger-1" style="padding: 40px 30px; text-align: center; border-bottom: 4px solid var(--color-accent);">
            <div style="width: 80px; height: 80px; background-color: rgba(255, 193, 7, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px; font-size: 2rem; color: var(--color-accent);">
              <i class="fas fa-tools"></i>
            </div>
            <h3 style="margin-bottom: 15px; font-size: 1.4rem;">Installation</h3>
            <p style="color: var(--color-text-light);">Professional installation of fire safety systems including alarms, sprinklers, and extinguisher mounts by trained experts.</p>
          </div>

          <!-- Service 3 -->
          <div class="card animate-on-scroll slide-up stagger-2" style="padding: 40px 30px; text-align: center; border-bottom: 4px solid var(--color-primary);">
            <div style="width: 80px; height: 80px; background-color: rgba(211, 47, 47, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px; font-size: 2rem; color: var(--color-primary);">
              <i class="fas fa-sync-alt"></i>
            </div>
            <h3 style="margin-bottom: 15px; font-size: 1.4rem;">Refilling & Maintenance</h3>
            <p style="color: var(--color-text-light);">Timely refilling of all types of fire extinguishers (ABC, CO2, Foam, Water) and comprehensive AMC (Annual Maintenance Contracts).</p>
          </div>

          <!-- Service 4 -->
          <div class="card animate-on-scroll slide-up stagger-3" style="padding: 40px 30px; text-align: center; border-bottom: 4px solid var(--color-accent);">
            <div style="width: 80px; height: 80px; background-color: rgba(255, 193, 7, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px; font-size: 2rem; color: var(--color-accent);">
              <i class="fas fa-clipboard-check"></i>
            </div>
            <h3 style="margin-bottom: 15px; font-size: 1.4rem;">Inspection & Audit</h3>
            <p style="color: var(--color-text-light);">Thorough fire safety audits and inspections to ensure your building complies with government regulations and FSAI standards.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="animate-on-scroll fade-in section-padding" style="background-color: var(--color-bg); text-align: center;">
      <div class="container">
        <h2 style="font-size: 2.2rem; margin-bottom: 20px;">Need a custom fire safety plan?</h2>
        <p style="font-size: 1.1rem; color: var(--color-text-light); max-width: 600px; margin: 0 auto 30px;">Contact our experts today for a free consultation and site visit.</p>
        <a href="#/contact" class="btn btn-primary" style="padding: 12px 30px; font-size: 1.1rem;">Request Consultation</a>
      </div>
    </section>
  `;
}
