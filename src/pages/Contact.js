export function Contact() {
  return `
    <!-- Hero Banner -->
    <section class="hero-banner" style="background: var(--color-secondary); text-align: center; color: white;">
      <div class="container">
        <h1 class="animate-on-scroll slide-up hero-title" style="color: white; margin-bottom: 10px;">Contact <span class="text-accent">Us</span></h1>
        <p class="animate-on-scroll slide-up stagger-1 hero-subtitle" style="color: #ddd; max-width: 600px; margin: 0 auto;">We are here to help you with all your fire safety requirements.</p>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 50px;">
          
          <!-- Contact Info -->
          <div class="animate-on-scroll slide-right">
            <h2 style="font-size: 2.2rem; margin-bottom: 20px; color: var(--color-secondary);">Get in Touch</h2>
            <div style="width: 50px; height: 3px; background-color: var(--color-primary); margin-bottom: 30px; border-radius: 2px;"></div>
            
            <div style="margin-bottom: 25px; display: flex; align-items: flex-start;">
              <div style="width: 45px; height: 45px; background-color: rgba(211,47,47,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; color: var(--color-primary); flex-shrink: 0; font-size: 1.2rem;">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4 style="font-size: 1.1rem; margin-bottom: 5px;">Our Office</h4>
                <p style="color: var(--color-text-light); line-height: 1.6;">Shop No. 2, Sunshine Park, Mane Nagar,<br>Opp. KK Wagh Agriculture College,<br>Dhatak Phata, Nashik</p>
              </div>
            </div>

            <div style="margin-bottom: 25px; display: flex; align-items: flex-start;">
              <div style="width: 45px; height: 45px; background-color: rgba(255,193,7,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; color: var(--color-accent); flex-shrink: 0; font-size: 1.2rem;">
                <i class="fas fa-phone-alt"></i>
              </div>
              <div>
                <h4 style="font-size: 1.1rem; margin-bottom: 5px;">Call Us</h4>
                <p style="color: var(--color-text-light); line-height: 1.6;">
                  Primary: <a href="tel:+919220242555" style="color: var(--color-primary); font-weight: 500;">9220242555</a><br>
                  Alternate: <a href="tel:+918655416716" style="color: var(--color-text-light);">8655416716</a>, 9284294525
                </p>
              </div>
            </div>

            <div style="margin-bottom: 25px; display: flex; align-items: flex-start;">
              <div style="width: 45px; height: 45px; background-color: rgba(211,47,47,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; color: var(--color-primary); flex-shrink: 0; font-size: 1.2rem;">
                <i class="fas fa-envelope"></i>
              </div>
              <div>
                <h4 style="font-size: 1.1rem; margin-bottom: 5px;">Email Us</h4>
                <p style="color: var(--color-text-light); line-height: 1.6;">
                  <a href="mailto:maharashtra.fire.control@gmail.com" style="color: var(--color-primary); font-weight: 500; word-break: break-all;">maharashtra.fire.control@gmail.com</a>
                </p>
              </div>
            </div>
          </div>

          <!-- Contact Form with Floating Labels -->
          <div class="card animate-on-scroll slide-left stagger-1" style="padding: 40px;">
            <h3 style="margin-bottom: 25px; font-size: 1.5rem; color: var(--color-secondary);">Send a Message</h3>
            <form onsubmit="window.sendContactWhatsApp(event)">
              
              <div class="form-group">
                <input type="text" id="contact_name" class="form-control" placeholder=" " required>
                <label for="contact_name" class="floating-label">Your Name</label>
              </div>
              
              <div class="form-group">
                <input type="tel" id="contact_phone" class="form-control" placeholder=" " required>
                <label for="contact_phone" class="floating-label">Phone Number</label>
              </div>
              
              <div class="form-group">
                <input type="email" id="contact_email" class="form-control" placeholder=" ">
                <label for="contact_email" class="floating-label">Email Address (Optional)</label>
              </div>
              
              <div class="form-group">
                <textarea id="contact_message" rows="4" class="form-control" placeholder=" " required></textarea>
                <label for="contact_message" class="floating-label">How can we help you?</label>
              </div>
              
              <button type="submit" class="btn btn-primary" style="width: 100%; padding: 14px; font-size: 1.1rem; display: inline-flex; align-items: center; justify-content: center; gap: 10px; border-radius: 8px;">
                <i class="fab fa-whatsapp" style="font-size: 1.3rem;"></i> Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}
