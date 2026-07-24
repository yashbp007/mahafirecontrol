export function About() {
  return `
    <!-- Hero Banner -->
    <section class="hero-banner" style="background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('/assets/s2.jpeg') center/cover; text-align: center; color: white;">
      <div class="container">
        <h1 class="animate-on-scroll slide-up hero-title" style="color: white; margin-bottom: 10px;">About <span class="text-primary">Us</span></h1>
        <p class="animate-on-scroll slide-up stagger-1 hero-subtitle" style="color: #ddd; max-width: 600px; margin: 0 auto;">Dedicated to providing world-class fire safety solutions and keeping our community safe.</p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="section-padding">
      <div class="container">
        <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 60px;">
          <div style="flex: 1; min-width: 250px;" class="animate-on-scroll slide-right">
            <img src="/assets/s5.jpeg" alt="Fire Safety Experts" class="img-responsive" style="border-radius: 16px; box-shadow: var(--shadow-lg);">
          </div>
          <div style="flex: 1; min-width: 250px;" class="animate-on-scroll slide-left stagger-1">
            <h2 style="font-size: 2.5rem; margin-bottom: 20px; color: var(--color-secondary);">Our <span class="text-primary">Mission</span></h2>
            <div style="width: 60px; height: 4px; background-color: var(--color-primary); margin-bottom: 30px; border-radius: 2px;"></div>
            <p style="font-size: 1.1rem; color: var(--color-text-light); margin-bottom: 20px;">
              Maharashtra Fire Control was established with a singular mission: to protect lives and property through uncompromising quality in fire safety equipment and services.
            </p>
            <p style="font-size: 1.1rem; color: var(--color-text-light); margin-bottom: 30px;">
              With years of experience in Nashik, we have become the trusted partner for residential complexes, commercial buildings, and industrial facilities, ensuring they meet the highest safety standards.
            </p>
            <ul style="list-style: none; padding: 0;">
              <li style="margin-bottom: 15px; display: flex; align-items: center; font-weight: 500;">
                <div style="width: 30px; height: 30px; background-color: rgba(211, 47, 47, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; color: var(--color-primary);">
                  <i class="fas fa-check"></i>
                </div>
                Government Approved (MH18125813)
              </li>
              <li style="margin-bottom: 15px; display: flex; align-items: center; font-weight: 500;">
                <div style="width: 30px; height: 30px; background-color: rgba(211, 47, 47, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; color: var(--color-primary);">
                  <i class="fas fa-check"></i>
                </div>
                FSAI Registered
              </li>
              <li style="display: flex; align-items: center; font-weight: 500;">
                <div style="width: 30px; height: 30px; background-color: rgba(211, 47, 47, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; color: var(--color-primary);">
                  <i class="fas fa-check"></i>
                </div>
                24/7 Emergency Support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="section-padding" style="background-color: var(--color-secondary); color: white;">
      <div class="container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; text-align: center;">
          <div class="animate-on-scroll slide-up">
            <h3 style="font-size: 3rem; color: var(--color-accent); margin-bottom: 10px;">10+</h3>
            <p style="font-size: 1.2rem; font-weight: 500;">Years Experience</p>
          </div>
          <div class="animate-on-scroll slide-up stagger-1">
            <h3 style="font-size: 3rem; color: var(--color-accent); margin-bottom: 10px;">500+</h3>
            <p style="font-size: 1.2rem; font-weight: 500;">Happy Clients</p>
          </div>
          <div class="animate-on-scroll slide-up stagger-2">
            <h3 style="font-size: 3rem; color: var(--color-accent); margin-bottom: 10px;">100%</h3>
            <p style="font-size: 1.2rem; font-weight: 500;">Safety Compliance</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
