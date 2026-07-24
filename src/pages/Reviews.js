export function Reviews() {
  return `
    <div class="hero-banner" style="background: var(--color-secondary); color: white; text-align: center;">
      <h1 class="hero-title" style="color: white; margin-bottom: 10px;">Happy Customers</h1>
      <p class="hero-subtitle" style="color: var(--color-accent); font-weight: 600;">What Our Clients Say About Us</p>
    </div>
    
    <section class="section-padding">
      <div class="container">
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; margin-bottom: 50px;">
          
          <div class="card">
            <div style="color: var(--color-accent); font-size: 1.2rem; margin-bottom: 15px;">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
            <p style="font-size: 1.1rem; font-style: italic; margin-bottom: 20px;">"Reliable and timely service for extinguisher refilling. They came to our office and handled everything very professionally."</p>
            <div style="display: flex; align-items: center; gap: 15px;">
              <div style="width: 50px; height: 50px; background: var(--color-bg); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: var(--color-primary);">R</div>
              <div>
                <strong>Rajesh K.</strong>
                <p style="font-size: 0.9rem; color: var(--color-text-light);">Residential Society Secretary</p>
              </div>
            </div>
          </div>

          <div class="card">
            <div style="color: var(--color-accent); font-size: 1.2rem; margin-bottom: 15px;">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
            <p style="font-size: 1.1rem; font-style: italic; margin-bottom: 20px;">"Professional team and good quality fire safety products. We purchased 10 extinguishers and their guidance was excellent."</p>
            <div style="display: flex; align-items: center; gap: 15px;">
              <div style="width: 50px; height: 50px; background: var(--color-bg); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: var(--color-primary);">A</div>
              <div>
                <strong>Amit D.</strong>
                <p style="font-size: 0.9rem; color: var(--color-text-light);">Factory Manager</p>
              </div>
            </div>
          </div>

          <div class="card">
            <div style="color: var(--color-accent); font-size: 1.2rem; margin-bottom: 15px;">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
            </div>
            <p style="font-size: 1.1rem; font-style: italic; margin-bottom: 20px;">"Excellent support for our commercial fire safety needs. They took care of our AMC and we have peace of mind now."</p>
            <div style="display: flex; align-items: center; gap: 15px;">
              <div style="width: 50px; height: 50px; background: var(--color-bg); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: var(--color-primary);">S</div>
              <div>
                <strong>Suresh M.</strong>
                <p style="font-size: 0.9rem; color: var(--color-text-light);">Commercial Complex Owner</p>
              </div>
            </div>
          </div>

          <div class="card">
            <div style="color: var(--color-accent); font-size: 1.2rem; margin-bottom: 15px;">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
            <p style="font-size: 1.1rem; font-style: italic; margin-bottom: 20px;">"Their knowledge regarding Govt compliance and FSAI standards is impressive. Highly recommended."</p>
            <div style="display: flex; align-items: center; gap: 15px;">
              <div style="width: 50px; height: 50px; background: var(--color-bg); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: var(--color-primary);">P</div>
              <div>
                <strong>Priya S.</strong>
                <p style="font-size: 0.9rem; color: var(--color-text-light);">Hospital Administrator</p>
              </div>
            </div>
          </div>

        </div>

        <div class="text-center" style="background: var(--color-bg); padding: 40px; border-radius: var(--border-radius);">
          <h3 style="margin-bottom: 15px;">Leave a Review</h3>
          <p style="margin-bottom: 20px;">We value your feedback. Let us know how we did!</p>
          <a href="#/contact" class="btn btn-primary">Contact Us</a>
        </div>

      </div>
    </section>
  `;
}
