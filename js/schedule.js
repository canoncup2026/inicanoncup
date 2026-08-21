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
  document.getElementById('page-subtitle').innerHTML = `
    <span class="day-text">${scheduleData.title}</span>
    <span class="day-divider">–</span>
    <span class="day-date">${scheduleData.date}</span>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  `;
  document.title = `Jadwal ${scheduleData.title} - ${scheduleData.date} | CANON CUP 2026`;

  // Update navbar links active state
  const navLinks = document.querySelectorAll('.dropdown-menu a');
  navLinks.forEach(link => {
    if (link.getAttribute('href').includes(`day=${dayParam}`)) {
      link.classList.add('active');
    }
  });

  // Update Day dropdown active state
  const dayLinks = document.querySelectorAll('.subtitle-dropdown-menu a');
  dayLinks.forEach(link => {
    if (link.getAttribute('href').includes(`day=${dayParam}`)) {
      link.classList.add('active');
    }
  });

  // Setup Day Dropdown click toggle (mobile / click support)
  const dayDropdown = document.querySelector('.subtitle-dropdown');
  const daySubtitleBtn = document.getElementById('page-subtitle');
  if (dayDropdown && daySubtitleBtn) {
    daySubtitleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dayDropdown.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!dayDropdown.contains(e.target)) {
        dayDropdown.classList.remove('open');
      }
    });
  }

  const tabsContainer = document.getElementById('court-tabs');
  const catDropdown = document.getElementById('category-dropdown');
  const catDropdownBtn = document.getElementById('cat-dropdown-btn');
  const selectedCatText = document.getElementById('selected-category-text');
  const matchContainer = document.getElementById('match-container');
  
  // Jika tidak ada properti courts, jangan lakukan apapun (fallback)
  if (!scheduleData.courts) return;

  const courtNames = Object.keys(scheduleData.courts);
  let currentCourt = courtNames.length > 0 ? courtNames[0] : '';
  let currentCategoryFilter = 'all';

  // Helper: Deteksi tipe kategori
  function getCategoryType(match) {
    const text = ((match.category || '') + ' ' + (match.stage || '') + ' ' + (match.team1 || '') + ' ' + (match.team2 || '')).toLowerCase();
    if (text.includes('beginner')) return 'beginner';
    if (text.includes('mahasiswa') || text.includes('kemenkeu') || text.includes('stan')) return 'instansi';
    if (text.includes('perguruan tinggi') || text.includes('pt') || text.includes('universitas')) return 'pt';
    return 'other';
  }

  // Render Court Tabs
  tabsContainer.innerHTML = '';
  courtNames.forEach((courtName, index) => {
    const btn = document.createElement('button');
    btn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
    btn.textContent = courtName;
    btn.addEventListener('click', () => {
      // Hilangkan class active dari semua tombol lapangan
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCourt = courtName;
      applyFilterAndRender();
    });
    tabsContainer.appendChild(btn);
  });

  // Setup Category Dropdown
  if (catDropdown) {
    const catLinks = catDropdown.querySelectorAll('.category-dropdown-menu a');
    
    // Toggle on button click (mobile / touch)
    if (catDropdownBtn) {
      catDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        catDropdown.classList.toggle('open');
      });
    }

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!catDropdown.contains(e.target)) {
        catDropdown.classList.remove('open');
      }
    });

    catLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        catLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        if (selectedCatText) {
          selectedCatText.textContent = link.textContent.trim();
        }
        currentCategoryFilter = link.getAttribute('data-category');
        catDropdown.classList.remove('open');
        applyFilterAndRender();
      });
    });
  }

  function applyFilterAndRender() {
    if (!scheduleData.courts[currentCourt]) return;
    const allMatches = scheduleData.courts[currentCourt];
    let filtered = allMatches;

    if (currentCategoryFilter !== 'all') {
      filtered = allMatches.filter(m => getCategoryType(m) === currentCategoryFilter);
    }

    renderMatches(filtered, scheduleData.date);
  }

  // Helper: Deteksi apakah nama tim adalah placeholder / menunggu hasil
  function isPlaceholderTeam(teamName) {
    if (!teamName) return false;
    const t = teamName.trim().toLowerCase();
    return (
      t.startsWith('winner') ||
      t.startsWith('loser') ||
      t.startsWith('juara') ||
      t.startsWith('menunggu') ||
      t === 'tba' ||
      t === '-' ||
      t === 'tbd'
    );
  }

  // Render match pertama kali saat load
  applyFilterAndRender();

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

          if (isPlaceholderTeam(match.team1)) team1Class += " placeholder-team";
          if (isPlaceholderTeam(match.team2)) team2Class += " placeholder-team";

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

          const catType = getCategoryType(match);
          const catClass = catType !== 'other' ? `cat-${catType}` : '';

          const matchHTML = `
            <div class="match-card ${catClass}">
              <div class="match-team ${team1Class}">${match.team1}</div>
              <div class="match-center">
                <div class="match-date">${match.category || dateString}</div>
                <div class="match-vs-wrapper">
                  ${middleElement}
                </div>
                <div class="match-time">${match.time}${match.stage ? ` • ${match.stage}` : ''}</div>
              </div>
              <div class="match-team ${team2Class}">${match.team2}</div>
            </div>
          `;
          matchContainer.innerHTML += matchHTML;
        });
      } else {
        matchContainer.innerHTML = `<p style="text-align:center; color: var(--text-light); opacity: 0.85; font-size: 1.1rem; padding: 2.5rem 0;">Tidak ada jadwal pertandingan untuk kategori ini di lapangan ini.</p>`;
      }
      
      // Animasi fade in
      matchContainer.style.transition = 'opacity 0.3s ease';
      matchContainer.style.opacity = 1;
    }, 150);
  }
});
