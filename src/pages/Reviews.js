export function Reviews() {
  const reviewImages = [
    { name: "Client Feedback & Review - 1", file: "/assets/reviews/r1_wm.jpeg" },
    { name: "Client Feedback & Review - 2", file: "/assets/reviews/r2_wm.jpeg" },
    { name: "Client Feedback & Review - 3", file: "/assets/reviews/r3_wm.jpeg" },
    { name: "Client Feedback & Review - 4", file: "/assets/reviews/r4_wm.jpeg" },
    { name: "Client Feedback & Review - 5", file: "/assets/reviews/r5_wm.jpeg" },
    { name: "Client Feedback & Review - 6", file: "/assets/reviews/r6_wm.jpeg" },
    { name: "Client Feedback & Review - 7", file: "/assets/reviews/r7_wm.jpeg" },
    { name: "Client Feedback & Review - 8", file: "/assets/reviews/r8_wm.jpeg" }
  ];

  const reviewImageCardsHTML = reviewImages.map((cert, index) => `
    <div class="card gallery-item animate-on-scroll slide-up" style="padding: 0; overflow: hidden; border-radius: 12px; box-shadow: var(--shadow-sm); cursor: pointer;" onclick="openLightbox('${cert.file}')">
      <div style="position: relative; height: 320px; background: #f8f9fa;">
        <img src="${cert.file}" alt="${cert.name}" style="width: 100%; height: 100%; object-fit: cover;">
        <div class="overlay"><i class="fas fa-search-plus"></i></div>
        <span style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 3px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: bold; backdrop-filter: blur(4px);">
          Review ${index + 1}
        </span>
      </div>
      <div style="padding: 12px 15px; background: white; text-align: center; border-top: 1px solid #eee;">
        <span style="font-size: 0.9rem; font-weight: 600; color: var(--color-secondary);">${cert.name}</span>
      </div>
    </div>
  `).join('');

  return `
    <div class="hero-banner" style="background: var(--color-secondary); color: white; text-align: center;">
      <h1 class="hero-title" style="color: white; margin-bottom: 10px;">Happy Customers</h1>
      <p class="hero-subtitle" style="color: var(--color-accent); font-weight: 600;">What Our Clients Say About Us</p>
    </div>
    
    <section class="section-padding">
      <div class="container">
        
        <!-- Review Documents & PDF Section (First) -->
        <div class="animate-on-scroll slide-up" style="margin-bottom: 60px;">
          <div style="text-align: center; margin-bottom: 35px;">
            <span style="background: rgba(211, 47, 47, 0.1); color: var(--color-primary); padding: 4px 14px; border-radius: 20px; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 10px; display: inline-block;">
              Client Verification
            </span>
            <h2 style="font-size: 2.2rem; color: var(--color-secondary); margin-bottom: 8px;">
              Client Reviews & Feedback Documents
            </h2>
            <p style="color: var(--color-text-light); font-size: 0.95rem;">
              Watermarked client feedback documents and work certificates. Click any image to enlarge.
            </p>
          </div>

          <!-- Review Images Grid -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 25px;">
            ${reviewImageCardsHTML}
          </div>
        </div>

        <!-- Grid of Textual Reviews (Second) -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; margin-bottom: 60px;">
          
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

        <!-- Submit Review Form (Last) -->
        <div class="card animate-on-scroll slide-up" style="max-width: 700px; margin: 0 auto; padding: 35px; border-radius: 16px; border-top: 4px solid var(--color-accent);">
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

    <!-- Protected PDF Viewer Modal (View Only, Toolbar Disabled) -->
    <div id="pdf-modal" class="pdf-modal" onclick="if(event.target === this) closePdfModal()">
      <div class="pdf-modal-container">
        <div class="pdf-modal-header">
          <h4 id="pdf-modal-title"><i class="fas fa-file-pdf text-primary"></i> Document Preview</h4>
          <span class="pdf-modal-close" onclick="closePdfModal()">&times;</span>
        </div>
        <div class="pdf-modal-body" oncontextmenu="return false;">
          <iframe id="pdf-frame" src="" title="Document Viewer"></iframe>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div id="lightbox" class="lightbox" onclick="closeLightbox()">
      <span class="close-lightbox">&times;</span>
      <img class="lightbox-content" id="lightbox-img">
    </div>
  `;
}

