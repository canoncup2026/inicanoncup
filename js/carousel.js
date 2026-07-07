// === CAROUSEL LOGIC ===
document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('carousel-track');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  const indicatorsContainer = document.getElementById('carousel-indicators');
  
  if (!track || typeof carouselPhotos === 'undefined') return;

  const dots = [];

  // Render slides and dots
  carouselPhotos.forEach((photo, index) => {
    // Slide
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    slide.style.backgroundImage = `url('${photo.url}')`;
    
    const caption = document.createElement('div');
    caption.className = 'carousel-caption';
    caption.innerHTML = `<h3>${photo.caption}</h3>`;
    
    slide.appendChild(caption);
    track.appendChild(slide);

    // Dot
    if (indicatorsContainer) {
      const dot = document.createElement('div');
      dot.className = 'carousel-dot';
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        track.scrollTo({ left: track.clientWidth * index, behavior: 'smooth' });
      });
      indicatorsContainer.appendChild(dot);
      dots.push(dot);
    }
  });

  // Navigation logic
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: track.clientWidth, behavior: 'smooth' });
    });
  }

  // Update dots on scroll
  track.addEventListener('scroll', () => {
    const activeIndex = Math.round(track.scrollLeft / track.clientWidth);
    dots.forEach((dot, index) => {
      if (index === activeIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  });

  // Auto-slide logic
  let autoSlideInterval;
  
  const startAutoSlide = () => {
    autoSlideInterval = setInterval(() => {
      let activeIndex = Math.round(track.scrollLeft / track.clientWidth);
      activeIndex = (activeIndex + 1) % dots.length;
      track.scrollTo({ left: track.clientWidth * activeIndex, behavior: 'smooth' });
    }, 5000);
  };
  
  const stopAutoSlide = () => {
    clearInterval(autoSlideInterval);
  };

  // Start auto-slide initially
  startAutoSlide();

  // Pause auto-slide on hover or touch so user can read/swipe comfortably
  track.addEventListener('mouseenter', stopAutoSlide);
  track.addEventListener('mouseleave', startAutoSlide);
  track.addEventListener('touchstart', stopAutoSlide, { passive: true });
  track.addEventListener('touchend', startAutoSlide, { passive: true });
});
