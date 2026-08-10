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

        <div class="card animate-on-scroll slide-up" style="max-width: 700px; margin: 50px auto 0; padding: 35px; border-radius: 16px; border-top: 4px solid var(--color-accent);">
          <h3 style="margin-bottom: 8px; text-align: center; color: var(--color-secondary); font-size: 1.8rem;">Share Your Experience</h3>
          <p style="text-align: center; color: var(--color-text-light); margin-bottom: 30px;">We value your feedback! Submit your review directly to us on WhatsApp.</p>
          
          <form onsubmit="window.sendReviewWhatsApp(event)">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px;">
              <div class="form-group">
                <input type="text" id="review_name" class="form-control" placeholder=" " required>
                <label for="review_name" class="floating-label">Your Name</label>
              </div>
              <div class="form-group">
                <input type="text" id="review_role" class="form-control" placeholder=" ">
                <label for="review_role" class="floating-label">Role / Organization (Optional)</label>
              </div>
            </div>

            <div class="form-group" style="margin-top: 15px;">
              <label style="display: block; font-size: 0.9rem; font-weight: 600; color: var(--color-secondary); margin-bottom: 8px;">Select Your Rating</label>
              <select id="review_rating" class="form-control" style="padding: 12px; height: auto; border-radius: 8px; border: 1px solid #ccc; background: white;">
                <option value="⭐⭐⭐⭐⭐ (5/5 Stars)">⭐⭐⭐⭐⭐ - Excellent (5/5)</option>
                <option value="⭐⭐⭐⭐ (4/5 Stars)">⭐⭐⭐⭐ - Very Good (4/5)</option>
                <option value="⭐⭐⭐ (3/5 Stars)">⭐⭐⭐ - Good (3/5)</option>
                <option value="⭐⭐ (2/5 Stars)">⭐⭐ - Fair (2/5)</option>
                <option value="⭐ (1/5 Star)">⭐ - Needs Improvement (1/5)</option>
              </select>
            </div>

            <div class="form-group" style="margin-top: 15px;">
              <textarea id="review_message" rows="4" class="form-control" placeholder=" " required></textarea>
              <label for="review_message" class="floating-label">Write your feedback or review...</label>
            </div>

            <button type="submit" class="btn btn-primary" style="width: 100%; padding: 14px; font-size: 1.1rem; display: inline-flex; align-items: center; justify-content: center; gap: 10px; border-radius: 8px; margin-top: 10px;">
              <i class="fab fa-whatsapp" style="font-size: 1.3rem;"></i> Submit Review on WhatsApp
            </button>
          </form>
        </div>

      </div>
    </section>
  `;
}
