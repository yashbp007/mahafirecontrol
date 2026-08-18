export function Certification() {
  const imageCertificates = [
    { name: "Certificate Document - Page 1", file: "/assets/certification/c1_wm.jpeg" },
    { name: "Certificate Document - Page 2", file: "/assets/certification/c2_wm.jpeg" },
    { name: "Certificate Document - Page 3", file: "/assets/certification/c3_wm.jpeg" },
    { name: "Certificate Document - Page 4", file: "/assets/certification/c4_wm.jpeg" },
    { name: "Certificate Document - Page 5", file: "/assets/certification/c5_wm.jpeg" },
    { name: "Certificate Document - Page 6", file: "/assets/certification/c6_wm.jpeg" },
    { name: "Certificate Document - Page 7", file: "/assets/certification/c7_wm.jpeg" },
    { name: "Certificate Document - Page 8", file: "/assets/certification/c8_wm.jpeg" }
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


