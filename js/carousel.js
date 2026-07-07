// === ACCORDION GALLERY LOGIC ===
document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery-accordion');
  if (!gallery || typeof carouselPhotos === 'undefined') return;

  carouselPhotos.forEach(photo => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.style.backgroundImage = `url('${photo.url}')`;
    
    const caption = document.createElement('div');
    caption.className = 'gallery-caption';
    caption.innerHTML = `<h3>${photo.caption}</h3>`;
    
    item.appendChild(caption);
    gallery.appendChild(item);
  });
});
