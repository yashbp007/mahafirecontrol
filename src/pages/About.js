export function About() {
  return `
    <!-- Hero Banner -->
    <section class="hero-banner" style="background: var(--color-secondary); text-align: center; color: white;">
      <div class="container">
        <h1 class="animate-on-scroll slide-up hero-title" style="color: white; margin-bottom: 10px;">About <span class="text-primary">Us</span></h1>
        <p class="animate-on-scroll slide-up stagger-1 hero-subtitle" style="color: var(--color-accent); font-weight: 600; max-width: 700px; margin: 0 auto;">
          Maharashtra Fire Control – Committed to a Safer Maharashtra
        </p>
      </div>
    </section>

    <!-- Main Content Section -->
    <section class="section-padding">
      <div class="container">
        <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 50px;">
          <div style="flex: 1; min-width: 280px;" class="animate-on-scroll slide-right">
            <div style="background: white; border-radius: 16px; padding: 35px 25px; box-shadow: var(--shadow-lg); border: 1px solid #eee; display: flex; align-items: center; justify-content: center; min-height: 320px;">
              <img src="/assets/logoFinal-removebg-preview.png" alt="Maharashtra Fire Control Logo" style="max-width: 100%; max-height: 260px; object-fit: contain;">
            </div>
          </div>
          <div style="flex: 1; min-width: 280px;" class="animate-on-scroll slide-left stagger-1">
            <h2 style="font-size: 2.2rem; margin-bottom: 15px; color: var(--color-secondary);">
              Committed to a <span class="text-primary">Safer Maharashtra</span>
            </h2>
            <div style="width: 60px; height: 4px; background-color: var(--color-primary); margin-bottom: 25px; border-radius: 2px;"></div>
            
            <p style="font-size: 1.05rem; color: var(--color-text); line-height: 1.8; margin-bottom: 20px;">
              Maharashtra Fire Control has been actively working since <strong>2013</strong> across the entire state of Maharashtra to promote fire safety awareness and the implementation of preventive measures. Over the years, we have played a significant role in creating awareness about fire safety in industries, commercial establishments, educational institutions, hospitals, residential complexes, and various public places.
            </p>

            <ul style="list-style: none; padding: 0; margin-top: 25px;">
              <li style="margin-bottom: 12px; display: flex; align-items: center; font-weight: 500;">
                <div style="width: 30px; height: 30px; background-color: rgba(211, 47, 47, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; color: var(--color-primary); flex-shrink: 0;">
                  <i class="fas fa-check"></i>
                </div>
                Government Approved (Reg No: MH18125813)
              </li>
              <li style="margin-bottom: 12px; display: flex; align-items: center; font-weight: 500;">
                <div style="width: 30px; height: 30px; background-color: rgba(211, 47, 47, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; color: var(--color-primary); flex-shrink: 0;">
                  <i class="fas fa-check"></i>
                </div>
                FSAI Registered (No: ISK-1-0624-0271)
              </li>
              <li style="display: flex; align-items: center; font-weight: 500;">
                <div style="width: 30px; height: 30px; background-color: rgba(211, 47, 47, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; color: var(--color-primary); flex-shrink: 0;">
                  <i class="fas fa-check"></i>
                </div>
                Statewide Operational Presence Since 2013
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Fire Prevention & Compliance Section -->
    <section class="section-padding" style="background-color: var(--color-bg);">
      <div class="container">
        <div style="max-width: 900px; margin: 0 auto;" class="animate-on-scroll slide-up">
          <div style="text-align: center; margin-bottom: 40px;">
            <h2 style="font-size: 2.2rem; margin-bottom: 15px; color: var(--color-secondary);">
              Fire Prevention & <span class="text-primary">Regulatory Compliance</span>
            </h2>
            <div style="width: 60px; height: 4px; background-color: var(--color-primary); margin: 0 auto; border-radius: 2px;"></div>
          </div>

          <div class="card" style="padding: 35px; border-left: 5px solid var(--color-primary); margin-bottom: 30px;">
            <p style="font-size: 1.1rem; color: var(--color-text); line-height: 1.8; margin-bottom: 20px;">
              Fire is not only a disaster that causes damage to property but also poses a serious threat to human life. Therefore, fire prevention, fire control, and appropriate response during emergencies are extremely essential.
            </p>
            <p style="font-size: 1.05rem; color: var(--color-text-light); line-height: 1.8; margin: 0;">
              With this objective, Maharashtra Fire Control provides fire safety services in accordance with various government regulations, acts, and guidelines. We offer guidance and technical support to help organizations comply with the <strong>Maharashtra Fire Prevention and Life Safety Measures Act</strong>, as well as national fire safety standards.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Services Breakdown Section -->
    <section class="section-padding">
      <div class="container">
        <div style="text-align: center; margin-bottom: 50px;" class="animate-on-scroll slide-up">
          <h2 style="font-size: 2.2rem; margin-bottom: 15px; color: var(--color-secondary);">
            Our Specialized <span class="text-accent">Services</span>
          </h2>
          <p style="color: var(--color-text-light); max-width: 700px; margin: 0 auto; font-size: 1.05rem;">
            Our goal is to provide the most effective safety solutions tailored to the specific needs of each client.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px;">
          
          <div class="card animate-on-scroll slide-up" style="padding: 25px;">
            <div style="width: 50px; height: 50px; background-color: rgba(211, 47, 47, 0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 15px; font-size: 1.5rem; color: var(--color-primary);">
              <i class="fas fa-clipboard-check"></i>
            </div>
            <h3 style="font-size: 1.25rem; margin-bottom: 10px;">Fire Audits</h3>
            <p style="color: var(--color-text-light); font-size: 0.95rem; line-height: 1.6;">Detailed evaluations to inspect hazards and verify full compliance with safety codes.</p>
          </div>

          <div class="card animate-on-scroll slide-up stagger-1" style="padding: 25px;">
            <div style="width: 50px; height: 50px; background-color: rgba(255, 193, 7, 0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 15px; font-size: 1.5rem; color: var(--color-accent);">
              <i class="fas fa-user-graduate"></i>
            </div>
            <h3 style="font-size: 1.25rem; margin-bottom: 10px;">Fire Safety Training</h3>
            <p style="color: var(--color-text-light); font-size: 0.95rem; line-height: 1.6;">Hands-on educational programs for staff, workers, and citizens on emergency response.</p>
          </div>

          <div class="card animate-on-scroll slide-up stagger-2" style="padding: 25px;">
            <div style="width: 50px; height: 50px; background-color: rgba(211, 47, 47, 0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 15px; font-size: 1.5rem; color: var(--color-primary);">
              <i class="fas fa-bullhorn"></i>
            </div>
            <h3 style="font-size: 1.25rem; margin-bottom: 10px;">Mock Drills & Evacuation</h3>
            <p style="color: var(--color-text-light); font-size: 0.95rem; line-height: 1.6;">Simulated emergency evacuation drills to prepare teams for real-world scenarios.</p>
          </div>

          <div class="card animate-on-scroll slide-up stagger-3" style="padding: 25px;">
            <div style="width: 50px; height: 50px; background-color: rgba(255, 193, 7, 0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 15px; font-size: 1.5rem; color: var(--color-accent);">
              <i class="fas fa-tools"></i>
            </div>
            <h3 style="font-size: 1.25rem; margin-bottom: 10px;">Equipment Maintenance</h3>
            <p style="color: var(--color-text-light); font-size: 0.95rem; line-height: 1.6;">Routine inspection, testing, and refilling of all firefighting equipment.</p>
          </div>

          <div class="card animate-on-scroll slide-up stagger-4" style="padding: 25px;">
            <div style="width: 50px; height: 50px; background-color: rgba(211, 47, 47, 0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 15px; font-size: 1.5rem; color: var(--color-primary);">
              <i class="fas fa-bell"></i>
            </div>
            <h3 style="font-size: 1.25rem; margin-bottom: 10px;">Alarm & System Installation</h3>
            <p style="color: var(--color-text-light); font-size: 0.95rem; line-height: 1.6;">End-to-end setup of modern fire detection alarms, sprinklers, and hydrants.</p>
          </div>

          <div class="card animate-on-scroll slide-up stagger-5" style="padding: 25px;">
            <div style="width: 50px; height: 50px; background-color: rgba(255, 193, 7, 0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 15px; font-size: 1.5rem; color: var(--color-accent);">
              <i class="fas fa-certificate"></i>
            </div>
            <h3 style="font-size: 1.25rem; margin-bottom: 10px;">Certification Guidance</h3>
            <p style="color: var(--color-text-light); font-size: 0.95rem; line-height: 1.6;">Expert assistance to help organizations secure official fire safety certificates.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- Primary Objective Banner -->
    <section class="section-padding" style="background: linear-gradient(135deg, var(--color-secondary) 0%, #1a1a1a 100%); color: white;">
      <div class="container text-center">
        <div class="animate-on-scroll slide-up" style="max-width: 800px; margin: 0 auto;">
          <span style="background-color: var(--color-primary); color: white; padding: 6px 16px; border-radius: 20px; font-size: 0.85rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 20px; display: inline-block;">
            Our Primary Objective
          </span>
          <h2 style="font-size: 2.5rem; color: white; margin-bottom: 20px; line-height: 1.3;">
            Protection of Life and Property
          </h2>
          <p style="font-size: 1.15rem; color: #ddd; line-height: 1.8; margin-bottom: 30px;">
            We strive to create awareness about fire safety, build safer environments using modern technology, and foster a strong culture of safety among organizations and citizens.
          </p>
          <a href="#/contact" class="btn btn-primary" style="padding: 14px 32px; font-size: 1.05rem;">Get In Touch With Us</a>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="section-padding" style="background-color: var(--color-white);">
      <div class="container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; text-align: center;">
          <div class="animate-on-scroll slide-up">
            <h3 style="font-size: 3rem; color: var(--color-primary); margin-bottom: 10px;">2013</h3>
            <p style="font-size: 1.1rem; font-weight: 600; color: var(--color-secondary);">Serving Since</p>
          </div>
          <div class="animate-on-scroll slide-up stagger-1">
            <h3 style="font-size: 3rem; color: var(--color-primary); margin-bottom: 10px;">100%</h3>
            <p style="font-size: 1.1rem; font-weight: 600; color: var(--color-secondary);">Maharashtra State Focus</p>
          </div>
          <div class="animate-on-scroll slide-up stagger-2">
            <h3 style="font-size: 3rem; color: var(--color-primary); margin-bottom: 10px;">500+</h3>
            <p style="font-size: 1.1rem; font-weight: 600; color: var(--color-secondary);">Happy Clients</p>
          </div>
          <div class="animate-on-scroll slide-up stagger-3">
            <h3 style="font-size: 3rem; color: var(--color-primary); margin-bottom: 10px;">100%</h3>
            <p style="font-size: 1.1rem; font-weight: 600; color: var(--color-secondary);">Safety Compliance</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

