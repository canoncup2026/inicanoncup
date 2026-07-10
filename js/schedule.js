document.addEventListener('DOMContentLoaded', () => {
  // Hanya jalankan script ini jika berada di halaman schedule
  if (!document.body.classList.contains('schedule-page')) return;

  const urlParams = new URLSearchParams(window.location.search);
  let dayParam = urlParams.get('day');

  // Jika tidak ada parameter day, default ke 1
  if (!dayParam || !matchSchedules[dayParam]) {
    dayParam = "1";
  }

  const scheduleData = matchSchedules[dayParam];
  
  // Update Header
  document.getElementById('page-subtitle').innerHTML = `${scheduleData.title} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`;
  document.title = `Jadwal ${scheduleData.title} | CANON CUP 2026`;

  // Update navbar links active state
  const navLinks = document.querySelectorAll('.dropdown-menu a');
  navLinks.forEach(link => {
    if (link.getAttribute('href').includes(`day=${dayParam}`)) {
      link.classList.add('active');
    }
  });

  const tabsContainer = document.getElementById('court-tabs');
  const matchContainer = document.getElementById('match-container');
  
  // Jika tidak ada properti courts, jangan lakukan apapun (fallback)
  if (!scheduleData.courts) return;

  const courtNames = Object.keys(scheduleData.courts);
  
  // Render Tabs
  tabsContainer.innerHTML = '';
  courtNames.forEach((courtName, index) => {
    const btn = document.createElement('button');
    btn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
    btn.textContent = courtName;
    btn.addEventListener('click', () => {
      // Hilangkan class active dari semua tombol
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      // Tambahkan ke tombol yang diklik
      btn.classList.add('active');
      // Render matches untuk lapangan ini
      renderMatches(scheduleData.courts[courtName], scheduleData.date);
    });
    tabsContainer.appendChild(btn);
  });

  // Render match untuk lapangan pertama saat load
  if (courtNames.length > 0) {
    renderMatches(scheduleData.courts[courtNames[0]], scheduleData.date);
  }

  // Fungsi untuk render daftar pertandingan
  function renderMatches(matches, dateString) {
    matchContainer.style.opacity = 0; // untuk animasi
    
    setTimeout(() => {
      matchContainer.innerHTML = ''; // bersihkan container

      if (matches && matches.length > 0) {
        matches.forEach((match) => {
          // Menentukan apakah mau menampilkan VS atau Skor
          let middleElement = `<div class="match-vs">VS</div>`;
          if (match.score && match.score.trim() !== "") {
            middleElement = `<div class="match-score">${match.score}</div>`;
          }

          const matchHTML = `
            <div class="match-card">
              <div class="match-team team-left">${match.team1}</div>
              <div class="match-center">
                <div class="match-date">${dateString}</div>
                <div class="match-vs-wrapper">
                  ${middleElement}
                </div>
                <div class="match-time">${match.time}</div>
              </div>
              <div class="match-team team-right">${match.team2}</div>
            </div>
          `;
          matchContainer.innerHTML += matchHTML;
        });
      } else {
        matchContainer.innerHTML = `<p style="text-align:center; color: var(--color-highlight);">Jadwal belum tersedia.</p>`;
      }
      
      // Animasi fade in
      matchContainer.style.transition = 'opacity 0.3s ease';
      matchContainer.style.opacity = 1;
    }, 150);
  }
});
