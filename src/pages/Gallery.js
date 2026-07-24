export function Gallery() {
  return `
    <div style="background: var(--color-secondary); color: white; padding: 80px 20px; text-align: center;">
      <h1 style="color: white; margin-bottom: 10px;">Gallery</h1>
      <p style="color: var(--color-accent); font-weight: 600;">Our Products and Work</p>
    </div>
    
    <section>
      <div class="container">
        
        <div style="display: flex; justify-content: center; gap: 15px; margin-bottom: 40px; flex-wrap: wrap;">
          <button class="btn btn-primary">All</button>
          <button class="btn btn-outline">Products</button>
          <button class="btn btn-outline">Work</button>
          <button class="btn btn-outline">Office</button>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px;">
          
          <div class="card" style="padding: 0; overflow: hidden;">
            <img src="/assets/s1.jpeg" alt="Fire Safety Work" style="width: 100%; height: 250px; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
          </div>
          
          <div class="card" style="padding: 0; overflow: hidden;">
            <img src="/assets/s2.jpeg" alt="Fire Safety Equipment" style="width: 100%; height: 250px; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
          </div>

          <div class="card" style="padding: 0; overflow: hidden;">
            <img src="/assets/s3.jpeg" alt="Fire Extinguishers" style="width: 100%; height: 250px; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
          </div>

          <div class="card" style="padding: 0; overflow: hidden;">
            <img src="/assets/s4.jpeg" alt="Installation Work" style="width: 100%; height: 250px; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
          </div>

          <div class="card" style="padding: 0; overflow: hidden;">
            <img src="/assets/s5.jpeg" alt="Maintenance" style="width: 100%; height: 250px; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
          </div>

          <div class="card" style="padding: 0; overflow: hidden;">
            <img src="/assets/s6.jpeg" alt="Office and Facility" style="width: 100%; height: 250px; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
          </div>

        </div>

      </div>
    </section>
  `;
}
