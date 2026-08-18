export function Home() {
  return `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100dvh; background: var(--color-bg); padding: 20px; overflow: hidden; box-sizing: border-box;">
      <div style="text-align: center; max-width: 500px; width: 100%; display: flex; flex-direction: column; align-items: center; gap: 20px;">
        <img src="/assets/logoFinal-removebg-preview.png" alt="Maharashtra Fire Control" style="height: 230px; max-width: 100%; object-fit: contain; background: white; border-radius: 16px; padding: 20px; box-shadow: 0 12px 30px rgba(0,0,0,0.12);">
        <h1 style="color: var(--color-secondary); font-size: 2.1rem; font-weight: 800; margin: 10px 0 5px; line-height: 1.2;">Maharashtra Fire Control</h1>
        <p style="color: var(--color-text-light); font-size: 1.05rem; line-height: 1.6; margin-bottom: 15px;">
          Your trusted partner for fire safety equipment, refilling, maintenance, and compliance support in Nashik.
        </p>
        
        <div style="width: 100%; display: flex; justify-content: center;">
          <a href="#/about" class="btn btn-primary" style="text-align: center; border-radius: 12px; padding: 16px 35px; font-weight: 700; font-size: 1.1rem; box-shadow: var(--shadow-md); border: none; display: inline-flex; align-items: center; gap: 10px; transition: var(--transition);">
            <i class="fas fa-info-circle" style="font-size: 1.3rem;"></i>About Us
          </a>
        </div>
      </div>
    </div>
  `;
}
