export function Certification() {
  return `
    <div style="background: var(--color-secondary); color: white; padding: 80px 20px; text-align: center;">
      <h1 style="color: white; margin-bottom: 10px;">Certifications & Approvals</h1>
      <p style="color: var(--color-accent); font-weight: 600;">Government Registered & FSAI Compliant</p>
    </div>
    
    <section>
      <div class="container">
        <p class="text-center" style="max-width: 800px; margin: 0 auto 50px; font-size: 1.1rem;">
          Maharashtra Fire Control is a trusted and officially registered entity. We maintain the highest standards of safety and strictly adhere to government guidelines and regulations.
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; margin-bottom: 50px;">
          
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

        <h2 class="section-title">Compliance Documents</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px;">
          
          <div class="card" style="display: flex; align-items: center; gap: 15px; padding: 15px;">
            <div style="background: var(--color-bg); padding: 15px; border-radius: 8px;">
              <i class="fas fa-file-pdf fa-2x text-primary"></i>
            </div>
            <div>
              <h4 style="margin-bottom: 5px;">Registration Certificate</h4>
              <button class="btn btn-outline" style="padding: 5px 15px; font-size: 0.9rem;">View Document</button>
            </div>
          </div>

          <div class="card" style="display: flex; align-items: center; gap: 15px; padding: 15px;">
            <div style="background: var(--color-bg); padding: 15px; border-radius: 8px;">
              <i class="fas fa-file-pdf fa-2x text-primary"></i>
            </div>
            <div>
              <h4 style="margin-bottom: 5px;">FSAI Membership ID</h4>
              <button class="btn btn-outline" style="padding: 5px 15px; font-size: 0.9rem;">View Document</button>
            </div>
          </div>

          <div class="card" style="display: flex; align-items: center; gap: 15px; padding: 15px;">
            <div style="background: var(--color-bg); padding: 15px; border-radius: 8px;">
              <i class="fas fa-file-pdf fa-2x text-primary"></i>
            </div>
            <div>
              <h4 style="margin-bottom: 5px;">Quality ISO Certificate</h4>
              <button class="btn btn-outline" style="padding: 5px 15px; font-size: 0.9rem;">View Document</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
