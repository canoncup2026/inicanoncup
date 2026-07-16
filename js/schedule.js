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
          let team1Class = "team-left";
          let team2Class = "team-right";
          let middleElement = `<div class="match-vs">VS</div>`;

          if (match.score && match.score.trim() !== "") {
            middleElement = `<div class="match-score">${match.score}</div>`;
            
            // Parse score (e.g. "2 - 0" or "2-1") to determine winner/loser
            const scoreParts = match.score.split('-');
            if (scoreParts.length === 2) {
              const score1 = parseInt(scoreParts[0].trim());
              const score2 = parseInt(scoreParts[1].trim());
              if (!isNaN(score1) && !isNaN(score2)) {
                if (score1 > score2) {
                  team1Class += " winner";
                  team2Class += " loser";
                } else if (score2 > score1) {
                  team1Class += " loser";
                  team2Class += " winner";
                }
              }
            }
          }

          const matchHTML = `
            <div class="match-card">
              <div class="match-team ${team1Class}">${match.team1}</div>
              <div class="match-center">
                <div class="match-date">${dateString}</div>
                <div class="match-vs-wrapper">
                  ${middleElement}
                </div>
                <div class="match-time">${match.time}</div>
              </div>
              <div class="match-team ${team2Class}">${match.team2}</div>
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
