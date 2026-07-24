export function Contact() {
  return `
    <div style="background: var(--color-secondary); color: white; padding: 80px 20px; text-align: center;">
      <h1 style="color: white; margin-bottom: 10px;">Contact Us</h1>
      <p style="color: var(--color-accent); font-weight: 600;">We're Here to Help</p>
    </div>
    
    <section>
      <div class="container">
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 50px;">
          
          <!-- Contact Details -->
          <div>
            <h2 style="margin-bottom: 30px;">Get In Touch</h2>
            <p style="margin-bottom: 30px; color: var(--color-text-light);">Have a question or need a quotation for fire safety equipment or services? Reach out to us using the details below.</p>
            
            <div style="display: flex; gap: 20px; margin-bottom: 30px;">
              <div style="width: 50px; height: 50px; background: var(--color-primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0;">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4 style="margin-bottom: 5px;">Address</h4>
                <p>Shop No. 2, Sunshine Park, Mane Nagar, Opp. KK Wagh Agriculture College, Dhatak Phata, Nashik</p>
              </div>
            </div>

            <div style="display: flex; gap: 20px; margin-bottom: 30px;">
              <div style="width: 50px; height: 50px; background: var(--color-primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0;">
                <i class="fas fa-phone-alt"></i>
              </div>
              <div>
                <h4 style="margin-bottom: 5px;">Mobile Numbers</h4>
                <p>9220242555<br>8655416716</p>
                <p style="margin-top: 10px; color: var(--color-text-light);"><strong>Alternate:</strong> 9284294525</p>
              </div>
            </div>

            <div style="display: flex; gap: 20px; margin-bottom: 40px;">
              <div style="width: 50px; height: 50px; background: var(--color-primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0;">
                <i class="fas fa-envelope"></i>
              </div>
              <div>
                <h4 style="margin-bottom: 5px;">Email</h4>
                <p>maharashtra.fire.control@gmail.com</p>
              </div>
            </div>

            <div style="display: flex; gap: 15px; flex-wrap: wrap;">
              <a href="tel:9220242555" class="btn btn-primary"><i class="fas fa-phone-alt"></i> Call</a>
              <a href="https://wa.me/919220242555" target="_blank" class="btn" style="background: #25D366; color: white;"><i class="fab fa-whatsapp"></i> WhatsApp</a>
              <a href="mailto:maharashtra.fire.control@gmail.com" class="btn btn-secondary"><i class="fas fa-envelope"></i> Email</a>
            </div>

          </div>

          <!-- Contact Form -->
          <div class="card">
            <h3 style="margin-bottom: 20px;">Business Inquiry</h3>
            <form onsubmit="event.preventDefault(); alert('Thank you! Your inquiry has been submitted (Placeholder).');">
              
              <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 8px; font-weight: 500;">Name *</label>
                <input type="text" required style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: var(--border-radius); font-family: inherit;">
              </div>

              <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 8px; font-weight: 500;">Phone *</label>
                <input type="tel" required style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: var(--border-radius); font-family: inherit;">
              </div>

              <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 8px; font-weight: 500;">Email</label>
                <input type="email" style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: var(--border-radius); font-family: inherit;">
              </div>

              <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 8px; font-weight: 500;">Service Required *</label>
                <select required style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: var(--border-radius); font-family: inherit; background: white;">
                  <option value="">Select an option</option>
                  <option value="buy">Buy Extinguishers</option>
                  <option value="refill">Refilling Service</option>
                  <option value="maintenance">AMC / Maintenance</option>
                  <option value="installation">Installation</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 8px; font-weight: 500;">Message</label>
                <textarea rows="4" style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: var(--border-radius); font-family: inherit; resize: vertical;"></textarea>
              </div>

              <button type="submit" class="btn btn-primary" style="width: 100%;">Submit Inquiry</button>
            </form>
          </div>

        </div>

        <!-- Map Placeholder -->
        <div style="margin-top: 60px;">
          <h2 style="margin-bottom: 20px; text-align: center;">Our Location</h2>
          <div style="width: 100%; height: 400px; background: #e0e0e0; border-radius: var(--border-radius); display: flex; align-items: center; justify-content: center; border: 2px dashed #999;">
            <p style="color: #666; font-size: 1.2rem;"><i class="fas fa-map-marked-alt text-primary" style="margin-right: 10px;"></i> Google Map Embed Placeholder for Shop No. 2, Sunshine Park, Nashik</p>
          </div>
        </div>

      </div>
    </section>
  `;
}
