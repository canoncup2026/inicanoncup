// === PRELOADER LOGIC ===
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
    }, 1500); // 1.5s delay to show off the animation
  }
});

// === KONFIGURASI PENDAFTARAN (BISA DIATUR ON/OFF OLEH ADMIN) ===
// Atur true untuk mengaktifkan tombol pendaftaran, atau false untuk mematikannya (abu-abu/disabled).
const registrationConfig = {
  tooltipEarlyBird: "Pendaftaran Early Bird Belum Dibuka",
  tooltipReguler: "Pendaftaran Reguler Belum Dibuka",
  internal: { earlyBird: false, reguler: false },
  instansi: { earlyBird: false, reguler: false },
  umum:     { earlyBird: false, reguler: false }
};

// === LOGIKA TOMBOL PENDAFTARAN ===
document.addEventListener('DOMContentLoaded', () => {
  const cardActions = document.querySelectorAll('.card-actions');
  
  cardActions.forEach(actionDiv => {
    const category = actionDiv.getAttribute('data-category');
    if (!category || !registrationConfig[category]) return;
    
    const config = registrationConfig[category];
    const btnEb = actionDiv.querySelector('.btn-reg-eb');
    const btnReg = actionDiv.querySelector('.btn-reg-reguler');
    
    if (btnEb) {
      if (config.earlyBird) {
        btnEb.removeAttribute('disabled');
        btnEb.removeAttribute('data-tooltip');
        btnEb.textContent = btnEb.textContent.replace('🔒 ', '');
      } else {
        btnEb.setAttribute('disabled', 'true');
        btnEb.setAttribute('data-tooltip', registrationConfig.tooltipEarlyBird);
        if (!btnEb.textContent.includes('🔒')) {
          btnEb.textContent = '🔒 ' + btnEb.textContent.trim();
        }
      }
    }
    
    if (btnReg) {
      if (config.reguler) {
        btnReg.removeAttribute('disabled');
        btnReg.removeAttribute('data-tooltip');
        btnReg.textContent = btnReg.textContent.replace('🔒 ', '');
      } else {
        btnReg.setAttribute('disabled', 'true');
        btnReg.setAttribute('data-tooltip', registrationConfig.tooltipReguler);
        if (!btnReg.textContent.includes('🔒')) {
          btnReg.textContent = '🔒 ' + btnReg.textContent.trim();
        }
      }
    }
  });
});

// === LOGIKA COUNTDOWN ===
document.addEventListener('DOMContentLoaded', () => {
  const cdDays = document.getElementById('cd-days');
  const cdHours = document.getElementById('cd-hours');
  const cdMinutes = document.getElementById('cd-minutes');
  const cdSeconds = document.getElementById('cd-seconds');
  const cdLabel = document.getElementById('countdown-label');
  
  if (!cdDays) return;

  // Tanggal Milestones
  const earlyBirdOpen = new Date('2026-07-13T00:00:00+07:00').getTime();
  const earlyBirdClose = new Date('2026-07-17T23:59:59+07:00').getTime();
  const regulerClose = new Date('2026-08-14T23:59:59+07:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    let targetDate = 0;
    
    if (now < earlyBirdOpen) {
      targetDate = earlyBirdOpen;
      cdLabel.textContent = "Menuju Early Bird";
    } else if (now < earlyBirdClose) {
      targetDate = earlyBirdClose;
      cdLabel.textContent = "Sisa Waktu Early Bird";
    } else if (now < regulerClose) {
      targetDate = regulerClose;
      cdLabel.textContent = "Sisa Waktu Reguler";
    } else {
      targetDate = now; // 0 hitung mundur
      cdLabel.textContent = "Pendaftaran Ditutup";
    }
    
    let distance = targetDate - now;
    if (distance < 0) distance = 0;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    cdDays.textContent = days.toString().padStart(2, '0');
    cdHours.textContent = hours.toString().padStart(2, '0');
    cdMinutes.textContent = minutes.toString().padStart(2, '0');
    cdSeconds.textContent = seconds.toString().padStart(2, '0');
  }

  updateCountdown(); // Panggil sekali di awal agar tidak menunggu 1 detik
  setInterval(updateCountdown, 1000);
});

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
const cards = document.querySelectorAll('.card, .hero-countdown-wrapper');

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

// === FAQ ACCORDION LOGIC ===
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    if (question && answer) {
      question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq-answer').style.maxHeight = null;
          }
        });
        
        // Toggle current item
        item.classList.toggle('active');
        if (item.classList.contains('active')) {
          answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
          answer.style.maxHeight = null;
        }
      });
    }
  });
});
