export function Contact() {
  const branches = [
    {
      city: "Mumbai",
      address: "A/1, Anand Nagar, V.N. Purav Marg, Chembur - 400071",
      phones: ["8379831243", "9220242555"],
      isHQ: true
    },
    {
      city: "Nashik",
      address: "148/2 Sathe Mala, Vinchur Gavli, Nashik - 422003",
      phones: ["9284294525", "9220242555"]
    },
    {
      city: "Parali Vaijnath",
      address: "Shop No. 2, Kendre Complex, TPS Road, Etke Corner, Parali Vaijnath - 431515",
      phones: ["8010796242", "9220242555"]
    },
    {
      city: "Chh. Sambhaji Nagar",
      address: "Gut 3, Near Khandoba Mandir, Satara Parisar, Chh. Sambhaji Nagar - 431010",
      phones: ["7666250930", "9220242555"]
    },
    {
      city: "Washim",
      address: "Dream Land City, Near Bajad Hospital, Mantri Park, Sai Mandir, Washim - 444505",
      phones: ["8788149045", "9220242555"]
    },
    {
      city: "Hingoli",
      address: "Municipal 3/67, Railway Station Road, Hingoli - 431513",
      phones: ["9075702808", "9220242555"]
    },
    {
      city: "Ahilyanagar",
      address: "Shop No. 07, Bolhegaon Fata, Savedi, Ahilyanagar - 414003",
      phones: ["7447620293", "9220242555"]
    }
  ];

  return `
    <!-- Hero Banner -->
    <section class="hero-banner" style="background: var(--color-secondary); text-align: center; color: white;">
      <div class="container">
        <h1 class="animate-on-scroll slide-up hero-title" style="color: white; margin-bottom: 10px;">Contact <span class="text-accent">Us</span></h1>
        <p class="animate-on-scroll slide-up stagger-1 hero-subtitle" style="color: #ddd; max-width: 600px; margin: 0 auto;">We are here to help you with all your fire safety requirements across Maharashtra.</p>
      </div>
    </section>

    <!-- Branch Network / Office Locations Section (First) -->
    <section class="section-padding" style="background-color: #f9f9f9; padding-top: 60px;">
      <div class="container">
        <div style="text-align: center; margin-bottom: 45px;" class="animate-on-scroll slide-up">
          <h2 style="font-size: 2.2rem; color: var(--color-secondary); margin-bottom: 10px;">Our Branch <span class="text-primary">Locations</span></h2>
          <div style="width: 60px; height: 4px; background-color: var(--color-primary); margin: 0 auto 15px; border-radius: 2px;"></div>
          <p style="color: var(--color-text-light); max-width: 650px; margin: 0 auto; font-size: 1rem;">
            Visit our nearest branch or contact our local regional representatives directly for quick assistance and fire safety services.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px;">
          ${branches.map(b => `
            <div class="card animate-on-scroll slide-up" style="padding: 25px; border-radius: 12px; display: flex; flex-direction: column; justify-content: space-between; border-left: 4px solid var(--color-primary); background: white;">
              <div>
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px;">
                  <h3 style="font-size: 1.3rem; color: var(--color-secondary); font-weight: 700; margin: 0;">
                    <i class="fas fa-map-marker-alt text-primary" style="margin-right: 8px;"></i>${b.city}
                  </h3>
                  <span style="background: ${b.isHQ ? 'rgba(211,47,47,0.12)' : 'rgba(211,47,47,0.08)'}; color: var(--color-primary); font-size: 0.75rem; font-weight: 700; padding: 4px 10px; border-radius: 12px; text-transform: uppercase;">${b.isHQ ? 'Headquarters' : 'Branch'}</span>
                </div>
                <p style="color: var(--color-text-light); font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px;">
                  ${b.address}
                </p>
              </div>

              <div style="border-top: 1px solid #eee; padding-top: 15px; margin-top: 10px;">
                <div style="font-size: 0.85rem; color: var(--color-text-light); font-weight: 600; margin-bottom: 8px;">
                  <i class="fas fa-envelope text-accent" style="margin-right: 6px;"></i>Email Address:
                </div>
                <div style="margin-bottom: 12px;">
                  <a href="mailto:maharashtra.fire.control@gmail.com" style="display: inline-flex; align-items: center; gap: 6px; background: #f4f6f9; color: var(--color-secondary); padding: 6px 12px; border-radius: 6px; font-weight: 600; font-size: 0.9rem; text-decoration: none; word-break: break-all;">
                    <i class="fas fa-envelope" style="font-size: 0.8rem; color: var(--color-primary);"></i> maharashtra.fire.control@gmail.com
                  </a>
                </div>

                <div style="font-size: 0.85rem; color: var(--color-text-light); font-weight: 600; margin-bottom: 8px;">
                  <i class="fas fa-phone-alt text-accent" style="margin-right: 6px;"></i>Contact Number(s):
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                  ${b.phones.map(phone => `
                    <a href="tel:+91${phone}" style="display: inline-flex; align-items: center; gap: 6px; background: #f4f6f9; color: var(--color-secondary); padding: 6px 12px; border-radius: 6px; font-weight: 600; font-size: 0.9rem; text-decoration: none;">
                      <i class="fas fa-phone" style="font-size: 0.8rem; color: var(--color-primary);"></i> ${phone}
                    </a>
                  `).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Main Contact & Form Section (Second) -->
    <section class="section-padding" style="padding-bottom: 40px;">
      <div class="container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 50px; align-items: start;">
          
          <!-- Contact Info -->
          <div class="animate-on-scroll slide-right">
            <h2 style="font-size: 2.2rem; margin-bottom: 20px; color: var(--color-secondary);">Get in Touch</h2>
            <div style="width: 50px; height: 3px; background-color: var(--color-primary); margin-bottom: 30px; border-radius: 2px;"></div>
            
            <div style="margin-bottom: 25px; display: flex; align-items: flex-start;">
              <div style="width: 45px; height: 45px; background-color: rgba(24,119,242,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; color: #1877F2; flex-shrink: 0; font-size: 1.2rem;">
                <i class="fab fa-facebook-f"></i>
              </div>
              <div>
                <h4 style="font-size: 1.1rem; margin-bottom: 5px;">Facebook Page</h4>
                <p style="color: var(--color-text-light); line-height: 1.6;">
                  <a href="https://www.facebook.com/share/1971WzxY5G/" target="_blank" rel="noopener noreferrer" style="color: #1877F2; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 6px;">
                    Follow us on Facebook <i class="fas fa-external-link-alt" style="font-size: 0.8rem;"></i>
                  </a>
                </p>
              </div>
            </div>

            <div style="margin-bottom: 25px; display: flex; align-items: flex-start;">
              <div style="width: 45px; height: 45px; background: linear-gradient(135deg, rgba(225,48,108,0.15), rgba(131,58,180,0.15)); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; color: #E1306C; flex-shrink: 0; font-size: 1.2rem;">
                <i class="fab fa-instagram"></i>
              </div>
              <div>
                <h4 style="font-size: 1.1rem; margin-bottom: 5px;">Instagram</h4>
                <p style="color: var(--color-text-light); line-height: 1.6;">
                  <a href="https://www.instagram.com/mahafirecontrol__1987/" target="_blank" rel="noopener noreferrer" style="color: #E1306C; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 6px;">
                    Follow us on Instagram <i class="fas fa-external-link-alt" style="font-size: 0.8rem;"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="card animate-on-scroll slide-left stagger-1" style="padding: 35px; border-radius: 16px; border-top: 4px solid var(--color-primary);">
            <h3 style="margin-bottom: 20px; font-size: 1.5rem; color: var(--color-secondary);">Send a Message</h3>
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

