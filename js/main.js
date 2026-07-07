// === NAVBAR SCROLL EFFECT ===
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// === MOBILE MENU TOGGLE ===
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const dropdowns = document.querySelectorAll('.dropdown');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  // Ensure navbar gets solid background when menu opens at top
  if(!navbar.classList.contains('scrolled') && navMenu.classList.contains('active')) {
    navbar.style.backgroundColor = 'var(--color-primary)';
  } else if (!navbar.classList.contains('scrolled') && !navMenu.classList.contains('active')) {
    navbar.style.backgroundColor = 'transparent';
  }
});

// Close menu when clicking link (except dropdown toggle)
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // If it's on mobile and it's a dropdown toggle
    if (window.innerWidth <= 768 && link.parentElement.classList.contains('dropdown')) {
      e.preventDefault();
      link.parentElement.classList.toggle('active');
    } else {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      navbar.style.backgroundColor = '';
    }
  });
});

// === SCROLL REVEAL ANIMATION ===
const revealElements = document.querySelectorAll('.scroll-reveal');

const revealCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Optional: unobserve after revealing once
      // observer.unobserve(entry.target);
    }
  });
};

const revealOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => {
  revealObserver.observe(el);
});

// === POPULATE DATA DUMMY ===
document.addEventListener('DOMContentLoaded', () => {
  // Populate Sponsors
  const sponsorGrid = document.getElementById('sponsor-grid');
  if (sponsorGrid && typeof sponsorsData !== 'undefined') {
    sponsorsData.forEach(sponsor => {
      const div = document.createElement('div');
      div.className = 'sponsor-item';
      div.innerHTML = `<img src="${sponsor.logoUrl}" alt="${sponsor.name}">`;
      sponsorGrid.appendChild(div);
    });
  }

  // Populate Footer Contact
  const footerWaLink = document.getElementById('footer-wa-link');
  const footerWaText = document.getElementById('footer-wa-text');
  if (footerWaLink && footerWaText && typeof contactData !== 'undefined') {
    footerWaLink.href = contactData.whatsappLink;
    footerWaText.textContent = contactData.whatsapp;
  }
});

// === DYNAMIC 3D TILT EFFECT ON CARDS ===
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.1s ease'; // Fast transition for smooth follow
  });

  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;
    
    card.style.transform = `perspective(1000px) scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transition = 'var(--transition)'; // Restore original transition
    card.style.transform = `perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg)`;
  });
});
