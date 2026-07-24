export function Products() {
  const commonFeatures = "Weather resistant epoxy, polyester powder coating, design as per IS 15683.";
  
  return `
    <div style="background: var(--color-secondary); color: white; padding: 80px 20px; text-align: center;">
      <h1 style="color: white; margin-bottom: 10px;">Our Products</h1>
      <p style="color: var(--color-accent); font-weight: 600;">High-Quality Fire Safety Equipment</p>
    </div>
    
    <section>
      <div class="container">
        
        <!-- Water CO2 -->
        <div style="margin-bottom: 60px;">
          <h2 style="border-bottom: 3px solid var(--color-primary); padding-bottom: 10px; margin-bottom: 30px; display: inline-block;">Water CO2 Fire Extinguishers</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px;">
            <div class="card">
              <h3 style="margin-bottom: 15px; color: var(--color-primary);">Cartridge Type (9 Ltr)</h3>
              <p><strong>Capacity:</strong> 9 Ltr</p>
              <p><strong>Rating:</strong> 4A</p>
              <p><strong>Range:</strong> 5 mtr</p>
              <p><strong>Discharge Duration:</strong> 25-60 sec</p>
              <p><strong>Features:</strong> Temp range +5°C to +55°C, hand controlled discharge, refillable at site, safety valve. ${commonFeatures}</p>
            </div>
            <div class="card">
              <h3 style="margin-bottom: 15px; color: var(--color-primary);">Stored Pressure Type (9 Ltr)</h3>
              <p><strong>Capacity:</strong> 9 Ltr</p>
              <p><strong>Rating:</strong> 4A</p>
              <p><strong>Range:</strong> 5 mtr</p>
              <p><strong>Discharge Duration:</strong> 25-60 sec</p>
              <p><strong>Features:</strong> Temp range +5°C to +55°C, hand controlled discharge, refillable at site, safety valve, pressure gauge. ${commonFeatures}</p>
            </div>
          </div>
        </div>

        <!-- BC Dry Powder -->
        <div style="margin-bottom: 60px;">
          <h2 style="border-bottom: 3px solid var(--color-primary); padding-bottom: 10px; margin-bottom: 30px; display: inline-block;">BC Dry Powder</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px;">
            <div class="card">
              <h3 style="margin-bottom: 15px; color: var(--color-primary);">Cartridge Type</h3>
              <p><strong>Capacities:</strong> 4kg, 6kg, 9kg</p>
              <p><strong>Features:</strong> Temp range -20°C to +55°C, hand controlled discharge, refillable at site, safety valve, brass forged cap, CO2 gas propellant. ${commonFeatures}</p>
            </div>
            <div class="card">
              <h3 style="margin-bottom: 15px; color: var(--color-primary);">Stored Pressure</h3>
              <p><strong>Capacities:</strong> 4kg, 6kg, 9kg</p>
              <p><strong>Features:</strong> Nitrogen gas propellant, pressure indicator gauge, hand controlled discharge. ${commonFeatures}</p>
            </div>
          </div>
        </div>

        <!-- Mechanical Foam -->
        <div style="margin-bottom: 60px;">
          <h2 style="border-bottom: 3px solid var(--color-primary); padding-bottom: 10px; margin-bottom: 30px; display: inline-block;">Mechanical Foam</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px;">
            <div class="card">
              <h3 style="margin-bottom: 15px; color: var(--color-primary);">Cartridge & Stored Pressure</h3>
              <p><strong>Capacity:</strong> 9 Ltr</p>
              <p><strong>Rating:</strong> 4A-55B</p>
              <p><strong>Range:</strong> 5 mtr</p>
              <p><strong>Features:</strong> Temp range +5°C to +55°C, discharge 90%, duration 25-60 sec, hand controlled discharge, refillable/stored pressure. ${commonFeatures}</p>
            </div>
          </div>
        </div>

        <!-- ABC Stored Pressure -->
        <div style="margin-bottom: 60px;">
          <h2 style="border-bottom: 3px solid var(--color-primary); padding-bottom: 10px; margin-bottom: 30px; display: inline-block;">ABC Stored Pressure</h2>
          <div class="card">
            <h3 style="margin-bottom: 15px; color: var(--color-primary);">Multipurpose Extinguishers</h3>
            <p><strong>Capacities:</strong> 1kg, 2kg, 4kg, 6kg, 9kg</p>
            <p><strong>Features:</strong> Temp range -20°C to +55°C, MAP powder, nitrogen gas propellant, pressure indicator gauge. ${commonFeatures}</p>
          </div>
        </div>

        <!-- Clean Agent -->
        <div style="margin-bottom: 60px;">
          <h2 style="border-bottom: 3px solid var(--color-primary); padding-bottom: 10px; margin-bottom: 30px; display: inline-block;">Clean Agent Stored Pressure</h2>
          <div class="card">
            <h3 style="margin-bottom: 15px; color: var(--color-primary);">Clean Agent Extinguishers</h3>
            <p><strong>Capacities:</strong> 2kg, 4kg, 6kg</p>
            <p><strong>Features:</strong> Clean agent fire extinguisher, nitrogen gas propellant, pressure indicator gauge. ${commonFeatures}</p>
          </div>
        </div>

        <!-- Modular Type -->
        <div style="margin-bottom: 60px;">
          <h2 style="border-bottom: 3px solid var(--color-primary); padding-bottom: 10px; margin-bottom: 30px; display: inline-block;">ABC / Clean Agent Modular Type</h2>
          <div class="card" style="overflow-x: auto;">
            <p style="margin-bottom: 20px;">Automatic modular fire extinguishers perfect for server rooms and enclosed spaces.</p>
            <table style="width: 100%; border-collapse: collapse; min-width: 600px;">
              <thead>
                <tr style="background-color: var(--color-secondary); color: white;">
                  <th style="padding: 12px; text-align: left;">Capacity</th>
                  <th style="padding: 12px; text-align: left;">Working Pressure</th>
                  <th style="padding: 12px; text-align: left;">Propellant</th>
                  <th style="padding: 12px; text-align: left;">Area Protection</th>
                  <th style="padding: 12px; text-align: left;">Hanging Height</th>
                  <th style="padding: 12px; text-align: left;">Operation Time</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid #ddd;">
                  <td style="padding: 12px;">2kg</td>
                  <td style="padding: 12px;">15 Bar</td>
                  <td style="padding: 12px;">Nitrogen</td>
                  <td style="padding: 12px;">Standard</td>
                  <td style="padding: 12px;">1.5m - 2m</td>
                  <td style="padding: 12px;">Automatic</td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                  <td style="padding: 12px;">5kg</td>
                  <td style="padding: 12px;">15 Bar</td>
                  <td style="padding: 12px;">Nitrogen</td>
                  <td style="padding: 12px;">Standard</td>
                  <td style="padding: 12px;">1.5m - 2m</td>
                  <td style="padding: 12px;">Automatic</td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                  <td style="padding: 12px;">10kg</td>
                  <td style="padding: 12px;">15 Bar</td>
                  <td style="padding: 12px;">Nitrogen</td>
                  <td style="padding: 12px;">Extended</td>
                  <td style="padding: 12px;">1.5m - 2m</td>
                  <td style="padding: 12px;">Automatic</td>
                </tr>
                <tr>
                  <td style="padding: 12px;">15kg</td>
                  <td style="padding: 12px;">15 Bar</td>
                  <td style="padding: 12px;">Nitrogen</td>
                  <td style="padding: 12px;">Extended</td>
                  <td style="padding: 12px;">1.5m - 2.5m</td>
                  <td style="padding: 12px;">Automatic</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  `;
}
