export function Products() {
  const categories = [
    {
      id: "abc-stored",
      title: "ABC Stored Pressure",
      subtitle: "Multi-purpose dry chemical powder for Class A, B & C fires",
      color: "#D32F2F",
      icon: "fas fa-fire-extinguisher",
      standard: "IS: 15683",
      image: "/assets/products/p1.jpeg",
      products: [
        {
          capacity: "1 kg",
          specs: { "Temp Range": "-20°c To +55°c", "Discharge": "85% | 8–12 sec.", "Range": "2 Mtr.", "Rating": "1A – 8B" },
          features: ["Hand Controlled Discharge", "Nitrogen Gas Propellant", "Pressure Indicator Gauge", "Weather Resistance Epoxy", "Polyester base powder", "Filled with MAP powder"]
        },
        {
          capacity: "2 kg",
          specs: { "Temp Range": "-20°c To +55°c", "Discharge": "85% | 8–12 sec.", "Range": "2 Mtr.", "Rating": "1A – 8B" },
          features: ["Hand Controlled Discharge", "Nitrogen Gas Propellant", "Pressure Indicator Gauge", "Weather Resistance Epoxy", "Polyester base powder", "Filled with MAP powder"]
        },
        {
          capacity: "4 kg",
          specs: { "Temp Range": "-20°c To +55°c", "Discharge": "85% | 15–20 sec.", "Range": "4 Mtr.", "Rating": "2A – 21B" },
          features: ["Hand Controlled Discharge", "Nitrogen Gas Propellant", "Pressure Indicator Gauge", "Weather Resistance Epoxy", "Polyester base powder", "Filled with MAP powder"]
        },
        {
          capacity: "6 kg",
          specs: { "Temp Range": "-20°c To +55°c", "Discharge": "85% | 15–20 sec.", "Range": "4 Mtr.", "Rating": "3A – 34B" },
          features: ["Hand Controlled Discharge", "Nitrogen Gas Propellant", "Pressure Indicator Gauge", "Weather Resistance Epoxy", "Polyester base powder", "Filled with MAP powder"]
        },
        {
          capacity: "9 kg",
          specs: { "Temp Range": "-20°c To +55°c", "Discharge": "85% | 15–20 sec.", "Range": "5 Mtr.", "Rating": "4A – 55B" },
          features: ["Hand Controlled Discharge", "Nitrogen Gas Propellant", "Pressure Indicator Gauge", "Weather Resistance Epoxy", "Polyester base powder", "Filled with MAP powder"]
        }
      ]
    },
    {
      id: "bc-stored",
      title: "BC Dry Powder Stored Pressure",
      subtitle: "Effective for Class B & C fires — fuels, gases, and electrical fires",
      color: "#1565C0",
      icon: "fas fa-fire-extinguisher",
      standard: "IS: 15683",
      image: "/assets/products/p2.jpeg",
      products: [
        {
          capacity: "4 kg",
          specs: { "Temp Range": "-20°c To +55°c", "Discharge": "85% | 15–20 sec.", "Range": "4 Mtr.", "Rating": "34B" },
          features: ["Hand Controlled Discharge", "Nitrogen Gas Propellant", "Pressure Indicator Gauge", "Weather Resistance Epoxy", "Polyester base powder Coating"]
        },
        {
          capacity: "6 kg",
          specs: { "Temp Range": "-20°c To +55°c", "Discharge": "85% | 15–20 sec.", "Range": "4 Mtr.", "Rating": "55B" },
          features: ["Hand Controlled Discharge", "Nitrogen Gas Propellant", "Pressure Indicator Gauge", "Weather Resistance Epoxy", "Polyester base powder Coating"]
        },
        {
          capacity: "9 kg",
          specs: { "Temp Range": "-20°c To +55°c", "Discharge": "85% | 15–20 sec.", "Range": "6 Mtr.", "Rating": "89B" },
          features: ["Hand Controlled Discharge", "Nitrogen Gas Propellant", "Pressure Indicator Gauge", "Weather Resistance Epoxy", "Polyester base powder Coating"]
        }
      ]
    },
    {
      id: "mechanical-foam",
      title: "Mechanical Foam Extinguishers",
      subtitle: "Ideal for flammable liquids (Class B fires) — cartridge & stored pressure types",
      color: "#E65100",
      icon: "fas fa-tint",
      standard: "IS: 15683",
      image: "/assets/products/p2.jpeg",
      products: [
        {
          capacity: "9 Ltr. (Cartridge Type)",
          specs: { "Temp Range": "+5°c To +55°c", "Discharge": "90% | 25–60 sec.", "Range": "5 Mtr.", "Rating": "4A – 55B" },
          features: ["Hand Controlled Discharge", "Refillable at site", "Safety Valve", "Brass Forged Cap", "CO2 Gas Propellant", "Weather Resistance Epoxy", "Polyester base powder Coating"]
        },
        {
          capacity: "9 Ltr. (Stored Pressure)",
          specs: { "Temp Range": "+5°c To +55°c", "Discharge": "90% | 25–60 sec.", "Range": "5 Mtr.", "Rating": "4A – 55B" },
          features: ["Hand Controlled Discharge", "Nitrogen Gas Propellant", "Pressure Indicator Gauge", "Weather Resistance Epoxy", "Polyester base powder Coating"]
        },
        {
          capacity: "50 Ltr. (Higher Capacity)",
          specs: { "Temp Range": "+5°c To +55°c", "Discharge": "90% | 60–180 sec.", "Range": "10 Mtr.", "Propellant": "CO2 Gas Cartridge" },
          features: ["CO2 Cartridge", "Refillable at site", "Brass Forged Cap", "Weather Resistance Epoxy", "Polyester base powder Coating", "Design as per IS: 13386"]
        }
      ]
    },
    {
      id: "water-co2",
      title: "Water CO2 Extinguishers",
      subtitle: "Best for Class A fires — wood, paper, fabric, textile",
      color: "#00838F",
      icon: "fas fa-water",
      standard: "IS: 15683",
      image: "/assets/products/p3.jpeg",
      products: [
        {
          capacity: "9 Ltr. (Cartridge Type)",
          specs: { "Temp Range": "+5°c To +55°c", "Discharge": "95% | 25–60 sec.", "Range": "5 Mtr.", "Rating": "4A" },
          features: ["Hand Controlled Discharge", "Refillable at site", "Safety Valve", "Brass Forged Cap", "Co2 Gas Propellant", "Weather Resistance Epoxy", "Polyester base powder Coating"]
        },
        {
          capacity: "9 Ltr. (Stored Pressure)",
          specs: { "Temp Range": "+5°c To +55°c", "Discharge": "95% | 25–60 sec.", "Range": "5 Mtr.", "Rating": "4A" },
          features: ["Hand Controlled Discharge", "Nitrogen Gas Propellant", "Pressure Indicator Gauge", "Weather Resistance Epoxy", "Polyester base powder Coating"]
        },
        {
          capacity: "50 Ltr. (Higher Capacity)",
          specs: { "Temp Range": "+5°c To +55°c", "Discharge": "90% | 60–180 sec.", "Range": "10 Mtr.", "Propellant": "Co2 Gas" },
          features: ["Co2 Cartridge", "Refillable at site", "Brass Forged Cap", "Weather Resistance Epoxy", "Polyester base powder Coating", "Design as per IS: 13385"]
        }
      ]
    },
    {
      id: "bc-cartridge",
      title: "BC Dry Powder Cartridge Type",
      subtitle: "Cartridge-operated dry powder for Class B & C fires",
      color: "#6A1B9A",
      icon: "fas fa-fire-extinguisher",
      standard: "IS: 15683",
      image: "/assets/products/p3.jpeg",
      products: [
        {
          capacity: "4 kg",
          specs: { "Temp Range": "-20°c To +55°c", "Discharge": "85% | 15–20 sec.", "Range": "4 Mtr.", "Rating": "34B" },
          features: ["Hand Controlled Discharge", "Refillable at site", "Safety Valve", "Brass Forged Cap", "Propellant: Co2 Gas", "Weather Resistance Epoxy", "Polyester base powder Coating"]
        },
        {
          capacity: "6 kg",
          specs: { "Temp Range": "-20°c To +55°c", "Discharge": "85% | 15–20 sec.", "Range": "4 Mtr.", "Rating": "55B" },
          features: ["Hand Controlled Discharge", "Refillable at site", "Safety Valve", "Brass Forged Cap", "Propellant: Co2 Gas", "Weather Resistance Epoxy", "Polyester base powder Coating"]
        },
        {
          capacity: "9 kg",
          specs: { "Temp Range": "-20°c To +55°c", "Discharge": "85% | 25–30 sec.", "Range": "6 Mtr.", "Rating": "89B" },
          features: ["Hand Controlled Discharge", "Refillable at site", "Safety Valve", "Brass Forged Cap", "Propellant: Co2 Gas", "Weather Resistance Epoxy", "Polyester base powder Coating"]
        }
      ]
    },
    {
      id: "clean-agent",
      title: "Clean Agent (Stored Pressure Type)",
      subtitle: "Safe for electronics & server rooms — leaves no residue",
      color: "#2E7D32",
      icon: "fas fa-shield-alt",
      standard: "IS: 15683",
      image: "/assets/products/p4.jpeg",
      products: [
        {
          capacity: "2 kg",
          specs: { "Temp Range": "-20°c To +55°c", "Discharge": "85% | 8–12 sec.", "Range": "2 Mtr.", "Rating": "1A – 8B" },
          features: ["Hand Controlled Discharge", "Nitrogen Gas Propellant", "Pressure Indicator Gauge", "Weather Resistance Epoxy", "Polyester base powder Coating"]
        },
        {
          capacity: "4 kg",
          specs: { "Temp Range": "-20°c To +55°c", "Discharge": "85% | 15–20 sec.", "Range": "4 Mtr.", "Rating": "1A – 21B" },
          features: ["Hand Controlled Discharge", "Nitrogen Gas Propellant", "Pressure Indicator Gauge", "Weather Resistance Epoxy", "Polyester base powder Coating"]
        },
        {
          capacity: "6 kg",
          specs: { "Temp Range": "-20°c To +55°c", "Discharge": "85% | 15–20 sec.", "Range": "4 Mtr.", "Rating": "2A – 34B" },
          features: ["Hand Controlled Discharge", "Nitrogen Gas Propellant", "Pressure Indicator Gauge", "Weather Resistance Epoxy", "Polyester base powder"]
        }
      ]
    },
    {
      id: "clean-agent-modular",
      title: "ABC / Clean Agent Modular Type",
      subtitle: "Ceiling-mounted automatic suppression — protects unmanned spaces",
      color: "#2E7D32",
      icon: "fas fa-broadcast-tower",
      standard: "IS: 15683",
      image: "/assets/products/p4.jpeg",
      products: [
        {
          capacity: "2 kg",
          specs: { "Working Pressure": "7–15 kg/cm²", "Propellant": "Nitrogen", "Area Coverage": "1–1.5 m²", "Hang Height": "1.5 m", "Operation Time": "8–10 sec." },
          features: ["Ceiling/Wall Mounted", "Automatic Activation", "No Residue", "Nitrogen Propellant"]
        },
        {
          capacity: "5 kg",
          specs: { "Working Pressure": "7–15 kg/cm²", "Propellant": "Nitrogen", "Area Coverage": "3.5–4 m²", "Hang Height": "1.5–2 m", "Operation Time": "10–15 sec." },
          features: ["Ceiling/Wall Mounted", "Automatic Activation", "No Residue", "Nitrogen Propellant"]
        },
        {
          capacity: "10 kg",
          specs: { "Working Pressure": "7–15 kg/cm²", "Propellant": "Nitrogen", "Area Coverage": "7–8 m²", "Hang Height": "1.75–2.3 m", "Operation Time": "15–20 sec." },
          features: ["Ceiling/Wall Mounted", "Automatic Activation", "No Residue", "Nitrogen Propellant"]
        },
        {
          capacity: "15 kg",
          specs: { "Working Pressure": "7–15 kg/cm²", "Propellant": "Nitrogen", "Area Coverage": "8–10 m²", "Hang Height": "2–3 m", "Operation Time": "18–23 sec." },
          features: ["Ceiling/Wall Mounted", "Automatic Activation", "No Residue", "Nitrogen Propellant"]
        }
      ]
    },
    {
      id: "co2",
      title: "CO2 Type Fire Extinguishers",
      subtitle: "Ideal for electrical fires & sensitive equipment — no residue, no damage",
      color: "#37474F",
      icon: "fas fa-wind",
      standard: "IS: 15683",
      image: "/assets/products/p5.jpeg",
      products: [
        {
          capacity: "2 kg & 3 kg",
          specs: { "Temp Range": "-20°c To +55°c", "Discharge": "95% | 8–16 sec.", "Range": "2 Mtr.", "Rating": "8B" },
          features: ["Hand Controlled Discharge", "Safety Valve", "Co2 Gas Propellant"]
        },
        {
          capacity: "4.5 kg",
          specs: { "Temp Range": "-20°c To +55°c", "Discharge": "95% | 8–16 sec.", "Range": "2.5 Mtr.", "Rating": "21B" },
          features: ["Hand Controlled Discharge", "Safety Valve", "Co2 Gas Propellant"]
        }
      ]
    },
    {
      id: "co2-trolley",
      title: "Trolley Mounted CO2 Type",
      subtitle: "Heavy-duty CO2 extinguishers on wheels for large spaces",
      color: "#37474F",
      icon: "fas fa-dolly",
      standard: "IS: 2878",
      image: "/assets/products/p5.jpeg",
      products: [
        {
          capacity: "6.5 kg",
          specs: { "Temp Range": "-20°c To +55°c", "Discharge": "95%", "Duration": "8–18 sec." },
          features: ["Hand Controlled Discharge", "Safety Valve", "Co2 Gas Propellant", "Trolley Mounted"]
        },
        {
          capacity: "9 kg",
          specs: { "Temp Range": "-20°c To +55°c", "Discharge": "95%", "Duration": "8–30 sec." },
          features: ["Hand Controlled Discharge", "Safety Valve", "Co2 Gas Propellant", "Trolley Mounted"]
        },
        {
          capacity: "22.5 kg",
          specs: { "Temp Range": "-20°c To +55°c", "Discharge": "95%", "Duration": "12–30 sec." },
          features: ["Hand Controlled Discharge", "Safety Valve", "Co2 Gas Propellant", "Trolley Mounted"]
        }
      ]
    },
    {
      id: "higher-capacity",
      title: "Higher Capacity Extinguishers",
      subtitle: "Large industrial trolley-mounted units for warehouses & factories",
      color: "#BF360C",
      icon: "fas fa-industry",
      standard: "IS: 10658",
      image: "/assets/products/p6.jpeg",
      products: [
        {
          capacity: "25 kg",
          specs: { "Temp Range": "-20°c To +55°c", "Discharge": "85% | 25–30 sec.", "Range": "6 Mtr.", "Propellant": "Co2 Gas", "Powder": "Soda bi Carb." },
          features: ["Co2 Regulator Valve Operated", "Refillable at site", "Safety Valve", "Brass Forged Cap", "Weather Resistance Epoxy", "Polyester base powder Coating"]
        },
        {
          capacity: "50 kg",
          specs: { "Temp Range": "-20°c To +55°c", "Discharge": "85% | 40–60 sec.", "Range": "8 Mtr.", "Propellant": "Co2 Gas", "Powder": "Soda bi Carb." },
          features: ["Co2 Regulator Valve Operated", "Refillable at site", "Safety Valve", "Brass Forged Cap", "Weather Resistance Epoxy", "Polyester base powder Coating"]
        },
        {
          capacity: "75 kg",
          specs: { "Temp Range": "-20°c To +55°c", "Discharge": "85% | 50–60 sec.", "Range": "10 Mtr.", "Propellant": "Co2 Gas", "Powder": "Soda bi Carb." },
          features: ["Co2 Regulator Valve Operated", "Refillable at site", "Safety Valve", "Brass Forged Cap", "Weather Resistance Epoxy", "Polyester base powder Coating"]
        }
      ]
    }
  ];

  const renderProductCard = (product, catColor, catTitle) => `
    <div class="prod-card">
      <div class="prod-card-header" style="background: ${catColor};">
        <span class="prod-capacity">${product.capacity}</span>
      </div>
      <div class="prod-card-body">
        <div class="prod-specs">
          ${Object.entries(product.specs).map(([k, v]) => `
            <div class="prod-spec-row">
              <span class="prod-spec-key">${k}</span>
              <span class="prod-spec-val">${v}</span>
            </div>
          `).join('')}
        </div>
        <div class="prod-features-title">Performance &amp; Features</div>
        <ul class="prod-features-list">
          ${product.features.map(f => `<li><i class="fas fa-check-circle" style="color: ${catColor};"></i> ${f}</li>`).join('')}
        </ul>
      </div>
      <div class="prod-card-footer">
        <a href="#/contact" class="prod-enquire-btn" style="background: ${catColor};">
          <i class="fas fa-phone-alt"></i> Enquire Now
        </a>
      </div>
    </div>
  `;

  const renderCategory = (cat, idx) => `
    <section class="prod-category-section animate-on-scroll slide-up" id="${cat.id}">
      <div class="prod-cat-header" style="border-left: 5px solid ${cat.color};">
        <div class="prod-cat-icon" style="background: ${cat.color}20; color: ${cat.color};">
          <i class="${cat.icon}"></i>
        </div>
        <div>
          <h2 class="prod-cat-title" style="color: ${cat.color};">${cat.title}</h2>
          <p class="prod-cat-sub">${cat.subtitle}</p>
          <span class="prod-cat-std"><i class="fas fa-certificate"></i> Standard: ${cat.standard}</span>
        </div>
        <button class="prod-cat-img-btn" onclick="document.getElementById('cat-img-${cat.id}').classList.toggle('active')">
          <i class="fas fa-image"></i> View Catalogue Page
        </button>
      </div>

      <!-- Catalogue image lightbox -->
      <div id="cat-img-${cat.id}" class="prod-cat-img-panel" onclick="this.classList.remove('active')">
        <div class="prod-cat-img-inner" onclick="event.stopPropagation()">
          <button class="prod-cat-img-close" onclick="document.getElementById('cat-img-${cat.id}').classList.remove('active')"><i class="fas fa-times"></i></button>
          <img src="${cat.image}" alt="${cat.title} catalogue" style="max-width:100%; max-height:85vh; border-radius:10px; display:block; margin:0 auto;">
        </div>
      </div>

      <div class="prod-cards-grid">
        ${cat.products.map(p => renderProductCard(p, cat.color, cat.title)).join('')}
      </div>
    </section>
  `;

  // Category jump nav
  const jumpNav = `
    <div class="prod-jump-nav">
      <span class="prod-jump-label"><i class="fas fa-filter"></i> Jump to:</span>
      <div class="prod-jump-links">
        ${categories.map(c => `<a href="#${c.id}" class="prod-jump-link" style="--cat-color:${c.color};">${c.title}</a>`).join('')}
      </div>
    </div>
  `;

  return `
    <div style="background: #f4f4f4; min-height: 100vh;">
      <!-- Page Hero -->
      <div class="prod-page-hero">
        <div class="prod-page-hero-bg"></div>
        <div class="prod-page-hero-content">
          <span class="section-label" style="color: #FFC107; background: rgba(255,193,7,0.15); border: 1px solid rgba(255,193,7,0.3);">Our Products</span>
          <h1 style="color: white; font-size: clamp(2rem,4vw,3.2rem); font-weight: 900; margin: 15px 0 10px;">Fire Safety Equipment</h1>
          <p style="color: rgba(255,255,255,0.75); max-width: 600px; margin: 0 auto; font-size: 1.05rem;">
            ISI certified fire extinguishers across 10 categories — from 1kg portable to 75kg industrial units
          </p>
          <div class="prod-hero-stats">
            <div class="prod-hero-stat"><strong>10</strong><span>Categories</span></div>
            <div class="prod-hero-stat"><strong>25+</strong><span>Variants</span></div>
            <div class="prod-hero-stat"><strong>ISI</strong><span>Certified</span></div>
          </div>
        </div>
      </div>

      <div class="container" style="padding: 40px 20px;">
        ${jumpNav}
        ${categories.map((cat, i) => renderCategory(cat, i)).join('')}
      </div>
    </div>
  `;
}
