// === CALENDAR LOGIC ===
document.addEventListener('DOMContentLoaded', () => {
  const calendarWrapper = document.getElementById('calendar-wrapper');
  if (!calendarWrapper || typeof calendarEvents === 'undefined') return;

  const monthYearDisplay = document.getElementById('calendar-month-year');
  const btnPrev = document.getElementById('prev-month');
  const btnNext = document.getElementById('next-month');
  const grid = document.getElementById('calendar-grid');
  const agendaList = document.getElementById('agenda-list');

  // Modal elements
  const modal = document.getElementById('event-modal');
  const modalClose = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  // Start with July 2026
  let currentDate = new Date(2026, 6, 1); // July is month 6 (0-indexed)

  const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  function formatShortDate(dateStr, endStr) {
    if (dateStr && endStr) {
      const d1 = new Date(dateStr);
      const d2 = new Date(endStr);
      return `${d1.getDate()} ${monthNames[d1.getMonth()].substring(0,3)} - ${d2.getDate()} ${monthNames[d2.getMonth()].substring(0,3)}`;
    }
    const d = new Date(dateStr);
    const day = d.getDate();
    const month = monthNames[d.getMonth()].substring(0, 3);
    return `${day} ${month}`;
  }

  function getCategory(title) {
    let category = "Event";
    if (title.toLowerCase().includes("hari") || title.toLowerCase().includes("final")) {
      category = "Pertandingan";
    }
    return category;
  }

  function renderAgendaItem(e, container) {
    const item = document.createElement('div');
    item.className = 'agenda-item';
    
    const category = getCategory(e.title);
    
    item.innerHTML = `
      <div class="agenda-date">${formatShortDate(e.date || e.startDate, e.endDate)}</div>
      <div class="agenda-info">
        <div class="agenda-info-title">${e.title}</div>
      </div>
      <div class="agenda-badge" ${e.color ? `style="background-color:${e.color}; color:${e.textColor || '#fff'}"` : ''}>${category}</div>
    `;
    container.appendChild(item);
  }

  function openModal(dateStr, events) {
    if (!modal) return;
    
    // Format title
    const d = new Date(dateStr);
    modalTitle.textContent = `Acara pada tanggal ${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}`;
    
    // Populate body
    modalBody.innerHTML = '';
    events.forEach(e => {
      renderAgendaItem(e, modalBody);
    });

    // Show modal
    modal.classList.add('active');
  }

  function closeModal() {
    if (modal) modal.classList.remove('active');
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Update Header
    monthYearDisplay.textContent = `${monthNames[month]} ${year}`;

    // Clear previous
    grid.innerHTML = '';
    agendaList.innerHTML = '';

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Filter events for current month
    const currentMonthEvents = calendarEvents.filter(e => {
      if (e.date) {
        const eDate = new Date(e.date);
        return eDate.getFullYear() === year && eDate.getMonth() === month;
      } else if (e.startDate && e.endDate) {
        const sDate = new Date(e.startDate);
        const eDate = new Date(e.endDate);
        const currStart = new Date(year, month, 1);
        const currEnd = new Date(year, month + 1, 0);
        return (sDate <= currEnd && eDate >= currStart);
      }
      return false;
    });

    // Empty cells
    for (let i = 0; i < firstDay; i++) {
      const cell = document.createElement('div');
      cell.className = 'calendar-cell empty';
      grid.appendChild(cell);
    }

    // Days
    for (let day = 1; day <= daysInMonth; day++) {
      const cell = document.createElement('div');
      cell.className = 'calendar-cell';
      
      const dayNum = document.createElement('div');
      dayNum.className = 'day-number';
      dayNum.textContent = day;
      cell.appendChild(dayNum);

      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayEvents = currentMonthEvents.filter(e => {
        if (e.date) return e.date === dateStr;
        if (e.startDate && e.endDate) return dateStr >= e.startDate && dateStr <= e.endDate;
        return false;
      });

      if (dayEvents.length > 0) {
        cell.classList.add('active-day');
        
        // Add click listener
        cell.addEventListener('click', () => {
          openModal(dateStr, dayEvents);
        });

        dayEvents.forEach(e => {
          const badge = document.createElement('div');
          badge.className = 'event-badge-small';
          badge.textContent = e.title;
          badge.title = e.title; // tooltip built-in
          if (e.color) {
            badge.style.backgroundColor = e.color;
            if (e.textColor) badge.style.color = e.textColor;
          }
          cell.appendChild(badge);
        });
      }

      grid.appendChild(cell);
    }

    // Add trailing empty cells to complete the grid row
    const totalCells = firstDay + daysInMonth;
    const remaining = totalCells % 7;
    if (remaining !== 0) {
      const extraEmptyCells = 7 - remaining;
      for (let i = 0; i < extraEmptyCells; i++) {
        const cell = document.createElement('div');
        cell.className = 'calendar-cell empty';
        grid.appendChild(cell);
      }
    }

    // Render Agenda
    if (currentMonthEvents.length === 0) {
      agendaList.innerHTML = '<p style="text-align:center; color:#888; margin-top:2rem;">Tidak ada agenda di bulan ini.</p>';
    } else {
      // Sort events by date
      currentMonthEvents.sort((a, b) => {
        const dA = new Date(a.date || a.startDate);
        const dB = new Date(b.date || b.startDate);
        return dA - dB;
      });
      
      currentMonthEvents.forEach(e => {
        renderAgendaItem(e, agendaList);
      });
    }
  }

  // Event Listeners
  btnPrev.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });

  btnNext.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });

  // Initial Render
  renderCalendar();
});
