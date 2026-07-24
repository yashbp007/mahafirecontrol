export function Gallery() {
  return `
    <!-- Hero Banner -->
    <section class="hero-banner" style="background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('/assets/s4.jpeg') center/cover; text-align: center; color: white;">
      <div class="container">
        <h1 class="animate-on-scroll slide-up hero-title" style="color: white; margin-bottom: 10px;">Our <span class="text-primary">Gallery</span></h1>
        <p class="animate-on-scroll slide-up stagger-1 hero-subtitle" style="color: #ddd; max-width: 600px; margin: 0 auto;">Take a look at our professional installations and high-quality equipment.</p>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <!-- Masonry Grid -->
        <div class="gallery-masonry">
          <div class="gallery-item animate-on-scroll slide-up" onclick="openLightbox('/assets/s1.jpeg')">
            <img src="/assets/s1.jpeg" alt="Gallery Image 1">
            <div class="overlay"><i class="fas fa-search-plus"></i></div>
          </div>
          <div class="gallery-item animate-on-scroll slide-up stagger-1" onclick="openLightbox('/assets/s2.jpeg')">
            <img src="/assets/s2.jpeg" alt="Gallery Image 2">
            <div class="overlay"><i class="fas fa-search-plus"></i></div>
          </div>
          <div class="gallery-item animate-on-scroll slide-up stagger-2" onclick="openLightbox('/assets/s3.jpeg')">
            <img src="/assets/s3.jpeg" alt="Gallery Image 3">
            <div class="overlay"><i class="fas fa-search-plus"></i></div>
          </div>
          <div class="gallery-item animate-on-scroll slide-up" onclick="openLightbox('/assets/s4.jpeg')">
            <img src="/assets/s4.jpeg" alt="Gallery Image 4">
            <div class="overlay"><i class="fas fa-search-plus"></i></div>
          </div>
          <div class="gallery-item animate-on-scroll slide-up stagger-1" onclick="openLightbox('/assets/s5.jpeg')">
            <img src="/assets/s5.jpeg" alt="Gallery Image 5">
            <div class="overlay"><i class="fas fa-search-plus"></i></div>
          </div>
          <div class="gallery-item animate-on-scroll slide-up stagger-2" onclick="openLightbox('/assets/s6.jpeg')">
            <img src="/assets/s6.jpeg" alt="Gallery Image 6">
            <div class="overlay"><i class="fas fa-search-plus"></i></div>
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
