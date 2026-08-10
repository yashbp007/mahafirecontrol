export function Gallery() {
  const images = Array.from({ length: 28 }, (_, i) => `/assets/i${i + 1}_wm.jpeg`);

  const galleryItemsHTML = images.map((src, index) => {
    const staggerClass = `stagger-${(index % 5) + 1}`;
    return `
      <div class="gallery-item animate-on-scroll slide-up ${staggerClass}" onclick="openLightbox('${src}')">
        <img src="${src}" alt="Fire Safety Installation & Equipment ${index + 1}" loading="lazy">
        <div class="overlay"><i class="fas fa-search-plus"></i></div>
      </div>
    `;
  }).join('');

  return `
    <!-- Hero Banner -->
    <section class="hero-banner" style="background: var(--color-secondary); text-align: center; color: white;">
      <div class="container">
        <h1 class="animate-on-scroll slide-up hero-title" style="color: white; margin-bottom: 10px;">Our <span class="text-primary">Gallery</span></h1>
        <p class="animate-on-scroll slide-up stagger-1 hero-subtitle" style="color: #ddd; max-width: 600px; margin: 0 auto;">Take a look at our professional fire safety installations, equipment, and field projects across Maharashtra.</p>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <!-- Gallery Grid -->
        <div class="gallery-masonry">
          ${galleryItemsHTML}
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

