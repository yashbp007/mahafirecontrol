export function Home() {
  return `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100dvh; background: var(--color-bg); padding: 20px; overflow: hidden; box-sizing: border-box;">
      <div style="text-align: center; max-width: 500px; width: 100%; display: flex; flex-direction: column; align-items: center; gap: 15px;">
        <img src="/assets/logoFinal-removebg-preview.png" alt="Maharashtra Fire Control" style="height: 120px; max-width: 100%; object-fit: contain; background: white; border-radius: 12px; padding: 15px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
        <h1 style="color: var(--color-secondary); font-size: 1.8rem; font-weight: 800; margin: 10px 0 5px;">Maharashtra Fire Control</h1>
        <p style="color: var(--color-text-light); font-size: 1rem; line-height: 1.5; margin-bottom: 25px;">
          Your trusted partner for fire safety equipment, refilling, maintenance, and compliance support in Nashik.
        </p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; width: 100%;">
          <a href="#/about" class="btn btn-outline" style="text-align: center; background: white; border-radius: 12px; padding: 15px 10px; font-weight: 700; box-shadow: var(--shadow-sm);"><i class="fas fa-info-circle" style="display: block; font-size: 1.5rem; margin-bottom: 8px;"></i>About Us</a>
          <a href="#/services" class="btn btn-outline" style="text-align: center; background: white; border-radius: 12px; padding: 15px 10px; font-weight: 700; box-shadow: var(--shadow-sm);"><i class="fas fa-tools" style="display: block; font-size: 1.5rem; margin-bottom: 8px;"></i>Services</a>
          <a href="#/products" class="btn btn-outline" style="text-align: center; background: white; border-radius: 12px; padding: 15px 10px; font-weight: 700; box-shadow: var(--shadow-sm);"><i class="fas fa-fire-extinguisher" style="display: block; font-size: 1.5rem; margin-bottom: 8px;"></i>Products</a>
          <a href="#/certification" class="btn btn-outline" style="text-align: center; background: white; border-radius: 12px; padding: 15px 10px; font-weight: 700; box-shadow: var(--shadow-sm);"><i class="fas fa-certificate" style="display: block; font-size: 1.5rem; margin-bottom: 8px;"></i>Certification</a>
          <a href="#/reviews" class="btn btn-outline" style="text-align: center; background: white; border-radius: 12px; padding: 15px 10px; font-weight: 700; box-shadow: var(--shadow-sm);"><i class="fas fa-star" style="display: block; font-size: 1.5rem; margin-bottom: 8px;"></i>Reviews</a>
          <a href="#/gallery" class="btn btn-outline" style="text-align: center; background: white; border-radius: 12px; padding: 15px 10px; font-weight: 700; box-shadow: var(--shadow-sm);"><i class="fas fa-images" style="display: block; font-size: 1.5rem; margin-bottom: 8px;"></i>Gallery</a>
          <a href="#/govt-gr" class="btn btn-outline" style="text-align: center; background: white; border-radius: 12px; padding: 15px 10px; font-weight: 700; box-shadow: var(--shadow-sm);"><i class="fas fa-file-contract" style="display: block; font-size: 1.5rem; margin-bottom: 8px;"></i>Govt GR</a>
          <a href="#/contact" class="btn btn-primary" style="text-align: center; border-radius: 12px; padding: 15px 10px; font-weight: 700; box-shadow: var(--shadow-sm); border: none;"><i class="fas fa-phone-alt" style="display: block; font-size: 1.5rem; margin-bottom: 8px;"></i>Contact</a>
        </div>
      </div>
    </div>
  `;
}
