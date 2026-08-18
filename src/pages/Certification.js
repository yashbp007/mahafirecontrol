export function Certification() {
  const imageCertificates = [
    { name: "Certificate Document - Page 1", file: "/assets/certification/c1_wm.jpeg" },
    { name: "Certificate Document - Page 2", file: "/assets/certification/c2_wm.jpeg" },
    { name: "Certificate Document - Page 3", file: "/assets/certification/c3_wm.jpeg" }
  ];

  const imageCardsHTML = imageCertificates.map(cert => `
    <div class="card gallery-item animate-on-scroll slide-up" style="padding: 0; overflow: hidden; border-radius: 12px; box-shadow: var(--shadow-sm);" onclick="openLightbox('${cert.file}')">
      <div style="position: relative; height: 320px; background: #f8f9fa;">
        <img src="${cert.file}" alt="${cert.name}" style="width: 100%; height: 100%; object-fit: cover;">
        <div class="overlay"><i class="fas fa-search-plus"></i></div>
      </div>
      <div style="padding: 12px 15px; background: white; text-align: center; border-top: 1px solid #eee;">
        <span style="font-size: 0.9rem; font-weight: 600; color: var(--color-secondary);">${cert.name}</span>
      </div>
    </div>
  `).join('');

  return `
    <div class="hero-banner" style="background: var(--color-secondary); color: white; text-align: center;">
      <h1 class="hero-title" style="color: white; margin-bottom: 10px;">Certifications & Approvals</h1>
      <p class="hero-subtitle" style="color: var(--color-accent); font-weight: 600;">Government Registered & FSAI Compliant</p>
    </div>
    
    <section class="section-padding">
      <div class="container">
        <p class="text-center" style="max-width: 800px; margin: 0 auto 50px; font-size: 1.1rem;">
          Maharashtra Fire Control is a trusted and officially registered entity. We maintain the highest standards of safety and strictly adhere to government guidelines and regulations.
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; margin-bottom: 60px;">
          
          <div class="card text-center" style="border-top: 4px solid var(--color-primary);">
            <i class="fas fa-certificate fa-4x text-primary" style="margin-bottom: 20px;"></i>
            <h3 style="margin-bottom: 15px;">Government Registration</h3>
            <p style="font-size: 1.2rem; margin-bottom: 15px;"><strong>Registration No:</strong> <span class="text-primary">MH18125813</span></p>
            <p style="color: var(--color-text-light);">Officially registered to provide fire safety equipment, installation, and refilling services across Maharashtra.</p>
          </div>

          <div class="card text-center" style="border-top: 4px solid var(--color-accent);">
            <i class="fas fa-shield-check fa-4x text-primary" style="margin-bottom: 20px;"></i>
            <h3 style="margin-bottom: 15px;">FSAI Membership</h3>
            <p style="font-size: 1.2rem; margin-bottom: 15px;"><strong>FSAI No:</strong> <span class="text-primary">ISK-1-0624-0271</span></p>
            <p style="color: var(--color-text-light);">Proud members of the Fire & Security Association of India, committing to the best practices in the industry.</p>
          </div>

        </div>

        <!-- Official Certificate Images Section -->
        <div class="animate-on-scroll slide-up" style="margin-top: 20px;">
          <div style="text-align: center; margin-bottom: 35px;">
            <span style="background: rgba(211, 47, 47, 0.1); color: var(--color-primary); padding: 4px 14px; border-radius: 20px; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 10px; display: inline-block;">
              Official Approvals
            </span>
            <h2 style="font-size: 2.2rem; color: var(--color-secondary); margin-bottom: 8px;">
              Certificate & Registration Scans
            </h2>
            <p style="color: var(--color-text-light); font-size: 0.95rem;">
              Watermarked official certificate scans. Click any certificate image to view in full resolution.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 25px;">
            ${imageCardsHTML}
          </div>
        </div>

      </div>
    </section>

    <!-- Lightbox Modal -->
    <div id="lightbox" class="lightbox" onclick="closeLightbox()">
      <span class="close-lightbox">&times;</span>
      <img class="lightbox-content" id="lightbox-img">
    </div>
  `;
}


