export function Gallery() {
  return `
    <!-- Hero Banner -->
    <section style="background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('/assets/s4.jpeg') center/cover; padding: 120px 0; text-align: center; color: white;">
      <div class="container">
        <h1 class="animate-on-scroll slide-up" style="font-size: 3.5rem; color: white; margin-bottom: 10px;">Our <span class="text-primary">Gallery</span></h1>
        <p class="animate-on-scroll slide-up stagger-1" style="font-size: 1.2rem; color: #ddd; max-width: 600px; margin: 0 auto;">Take a look at our professional installations and high-quality equipment.</p>
      </div>
    </section>

    <section style="padding: 80px 0;">
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
