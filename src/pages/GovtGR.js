export function GovtGR() {
  return `
    <div class="hero-banner" style="background: var(--color-secondary); color: white; text-align: center;">
      <h1 class="hero-title" style="color: white; margin-bottom: 10px;">Govt GR & Notices</h1>
      <p class="hero-subtitle" style="color: var(--color-accent); font-weight: 600;">Official Maharashtra Government Resolution & Compliance Documents</p>
    </div>
    
    <section class="section-padding">
      <div class="container">
        
        <p class="text-center" style="max-width: 800px; margin: 0 auto 40px; font-size: 1.1rem;">
          Access and download official Government Resolutions (GR), safety circulars, and compliance notifications issued under the Maharashtra Fire Prevention and Life Safety Measures Act.
        </p>

        <div style="max-width: 850px; margin: 0 auto;">
          
          <!-- Latest GR Card -->
          <div class="card animate-on-scroll slide-up" style="padding: 30px; border-top: 4px solid var(--color-primary); box-shadow: var(--shadow-md);">
            <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 20px; margin-bottom: 20px;">
              <div>
                <span style="background: var(--color-primary); color: white; padding: 4px 12px; border-radius: 4px; font-size: 0.8rem; font-weight: bold; margin-bottom: 12px; display: inline-block; letter-spacing: 0.5px;">OFFICIAL NOTIFICATION</span>
                <h2 style="font-size: 1.8rem; color: var(--color-secondary); margin-bottom: 8px;">Latest GR</h2>
                <p style="color: var(--color-text-light); font-size: 0.95rem; display: flex; align-items: center; gap: 8px;">
                  <i class="fas fa-file-pdf text-primary" style="font-size: 1.1rem;"></i> 
                  Government Resolution (GR) on Fire Safety Regulations & Directives
                </p>
              </div>

              <div style="display: flex; flex-wrap: wrap; gap: 12px;">
                <a href="/assets/Latest_GR.pdf" target="_blank" class="btn btn-outline" style="display: inline-flex; align-items: center; gap: 8px;">
                  <i class="fas fa-eye"></i> View PDF
                </a>
                <a href="/assets/Latest_GR.pdf" download="Latest_GR_Maharashtra_Fire_Safety.pdf" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 8px;">
                  <i class="fas fa-download"></i> Download PDF
                </a>
              </div>
            </div>

            <div style="background: var(--color-bg); border-radius: 8px; padding: 20px; border: 1px dashed #ccc;">
              <h4 style="margin-bottom: 10px; font-size: 1rem; color: var(--color-secondary);"><i class="fas fa-info-circle text-primary" style="margin-right: 6px;"></i> Document Summary:</h4>
              <p style="font-size: 0.95rem; color: var(--color-text-light); line-height: 1.6; margin: 0;">
                Official Government Notification in Marathi regarding mandatory fire prevention protocols, inspection guidelines, safety measure compliance, and life safety rules across Maharashtra.
              </p>
            </div>
          </div>

          <!-- Embedded PDF Viewer Preview Section -->
          <div class="animate-on-scroll slide-up stagger-1" style="margin-top: 40px; text-align: center;">
            <h3 style="font-size: 1.5rem; margin-bottom: 20px; color: var(--color-secondary); display: flex; align-items: center; justify-content: center; gap: 10px;">
              <i class="fas fa-file-pdf text-primary"></i> Official Document PDF Preview
            </h3>
            <div style="border-radius: 12px; overflow: hidden; box-shadow: var(--shadow-lg); border: 1px solid #ddd; background: #525659; height: 600px; width: 100%;">
              <iframe src="/assets/Latest_GR.pdf" width="100%" height="100%" style="border: none;">
                This browser does not support inline PDFs. Please download the PDF to view it: <a href="/assets/Latest_GR.pdf">Download PDF</a>
              </iframe>
            </div>
          </div>

          <!-- GR Document Pages & Circular Notices Section -->
          <div class="animate-on-scroll slide-up stagger-2" style="margin-top: 60px;">
            <div style="text-align: center; margin-bottom: 35px;">
              <span style="background: rgba(211, 47, 47, 0.1); color: var(--color-primary); padding: 4px 14px; border-radius: 20px; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 10px; display: inline-block;">
                Official Circular Pages
              </span>
              <h3 style="font-size: 1.8rem; color: var(--color-secondary); margin-bottom: 8px;">
                Government Resolution Notice Pages
              </h3>
              <p style="color: var(--color-text-light); font-size: 0.95rem;">
                Official watermarked pages of the fire safety directive. Click any page to view in full resolution.
              </p>
            </div>

            <!-- Aligned Image Grid -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 25px;">
              
              <!-- Page 1 -->
              <div class="card gallery-item" style="padding: 0; overflow: hidden; border-radius: 12px;" onclick="openLightbox('/assets/g1_wm.jpeg')">
                <div style="position: relative; height: 340px; background: #f8f9fa;">
                  <img src="/assets/g1_wm.jpeg" alt="GR Notice Page 1" style="width: 100%; height: 100%; object-fit: cover;">
                  <div class="overlay"><i class="fas fa-search-plus"></i></div>
                  <span style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 3px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: bold; backdrop-filter: blur(4px);">
                    Page 1
                  </span>
                </div>
                <div style="padding: 12px 15px; background: white; text-align: center; border-top: 1px solid #eee;">
                  <span style="font-size: 0.85rem; font-weight: 600; color: var(--color-secondary);">GR Notice - Page 1</span>
                </div>
              </div>

              <!-- Page 2 -->
              <div class="card gallery-item" style="padding: 0; overflow: hidden; border-radius: 12px;" onclick="openLightbox('/assets/g2_wm.jpeg')">
                <div style="position: relative; height: 340px; background: #f8f9fa;">
                  <img src="/assets/g2_wm.jpeg" alt="GR Notice Page 2" style="width: 100%; height: 100%; object-fit: cover;">
                  <div class="overlay"><i class="fas fa-search-plus"></i></div>
                  <span style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 3px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: bold; backdrop-filter: blur(4px);">
                    Page 2
                  </span>
                </div>
                <div style="padding: 12px 15px; background: white; text-align: center; border-top: 1px solid #eee;">
                  <span style="font-size: 0.85rem; font-weight: 600; color: var(--color-secondary);">GR Notice - Page 2</span>
                </div>
              </div>

              <!-- Page 3 -->
              <div class="card gallery-item" style="padding: 0; overflow: hidden; border-radius: 12px;" onclick="openLightbox('/assets/g3_wm.jpeg')">
                <div style="position: relative; height: 340px; background: #f8f9fa;">
                  <img src="/assets/g3_wm.jpeg" alt="GR Notice Page 3" style="width: 100%; height: 100%; object-fit: cover;">
                  <div class="overlay"><i class="fas fa-search-plus"></i></div>
                  <span style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 3px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: bold; backdrop-filter: blur(4px);">
                    Page 3
                  </span>
                </div>
                <div style="padding: 12px 15px; background: white; text-align: center; border-top: 1px solid #eee;">
                  <span style="font-size: 0.85rem; font-weight: 600; color: var(--color-secondary);">GR Notice - Page 3</span>
                </div>
              </div>

              <!-- Page 4 -->
              <div class="card gallery-item" style="padding: 0; overflow: hidden; border-radius: 12px;" onclick="openLightbox('/assets/g4_wm.jpeg')">
                <div style="position: relative; height: 340px; background: #f8f9fa;">
                  <img src="/assets/g4_wm.jpeg" alt="GR Notice Page 4" style="width: 100%; height: 100%; object-fit: cover;">
                  <div class="overlay"><i class="fas fa-search-plus"></i></div>
                  <span style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 3px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: bold; backdrop-filter: blur(4px);">
                    Page 4
                  </span>
                </div>
                <div style="padding: 12px 15px; background: white; text-align: center; border-top: 1px solid #eee;">
                  <span style="font-size: 0.85rem; font-weight: 600; color: var(--color-secondary);">GR Notice - Page 4</span>
                </div>
              </div>

              <!-- Page 5 -->
              <div class="card gallery-item" style="padding: 0; overflow: hidden; border-radius: 12px;" onclick="openLightbox('/assets/g5_wm.jpeg')">
                <div style="position: relative; height: 340px; background: #f8f9fa;">
                  <img src="/assets/g5_wm.jpeg" alt="GR Notice Page 5" style="width: 100%; height: 100%; object-fit: cover;">
                  <div class="overlay"><i class="fas fa-search-plus"></i></div>
                  <span style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 3px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: bold; backdrop-filter: blur(4px);">
                    Page 5
                  </span>
                </div>
                <div style="padding: 12px 15px; background: white; text-align: center; border-top: 1px solid #eee;">
                  <span style="font-size: 0.85rem; font-weight: 600; color: var(--color-secondary);">GR Notice - Page 5</span>
                </div>
              </div>

              <!-- Page 6 -->
              <div class="card gallery-item" style="padding: 0; overflow: hidden; border-radius: 12px;" onclick="openLightbox('/assets/g6_wm.jpeg')">
                <div style="position: relative; height: 340px; background: #f8f9fa;">
                  <img src="/assets/g6_wm.jpeg" alt="GR Notice Page 6" style="width: 100%; height: 100%; object-fit: cover;">
                  <div class="overlay"><i class="fas fa-search-plus"></i></div>
                  <span style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 3px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: bold; backdrop-filter: blur(4px);">
                    Page 6
                  </span>
                </div>
                <div style="padding: 12px 15px; background: white; text-align: center; border-top: 1px solid #eee;">
                  <span style="font-size: 0.85rem; font-weight: 600; color: var(--color-secondary);">GR Notice - Page 6</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- Lightbox Modal for Fullscreen View -->
    <div id="lightbox" class="lightbox" onclick="closeLightbox()">
      <span class="close-lightbox">&times;</span>
      <img class="lightbox-content" id="lightbox-img">
    </div>
  `;
}


