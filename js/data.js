// === DATA DUMMY EVENT ===
// Anda bisa mengedit data ini tanpa mengubah file HTML atau JS lainnya

// Data Event Kalender (Agustus - September 2026)
const calendarEvents = [
  { startDate: "2026-07-13", endDate: "2026-07-17", title: "Opreg Early Bird", color: "var(--color-accent)" },
  { startDate: "2026-07-18", endDate: "2026-08-14", title: "Opreg Reguler", color: "var(--color-highlight)", textColor: "var(--color-primary)" },
  { date: "2026-08-21", title: "Technical Meeting", color: "#e74c3c" },
  { date: "2026-08-28", title: "Day 1" },
  { date: "2026-08-29", title: "Day 2" },
  { date: "2026-08-30", title: "Day 3" },
  { date: "2026-09-04", title: "Day 4" },
  { date: "2026-09-05", title: "Day 5" },
  { date: "2026-09-06", title: "Day 6" }
];

// Data Dokumentasi (Carousel)
const carouselPhotos = [
  { url: "assets/images/dokumentasi/BLM_1479.jpg", caption: "" },
  { url: "assets/images/dokumentasi/BLM_0718.jpg", caption: "" },
  { url: "assets/images/dokumentasi/BLM_0760.jpg", caption: "" },
  { url: "assets/images/dokumentasi/BLM_0997.jpg", caption: "" },
  { url: "assets/images/dokumentasi/BLM_1309.jpg", caption: "" },
  { url: "assets/images/dokumentasi/BLM_0699.jpg", caption: "" },
];

// Data Sponsor
const sponsorsData = [
  { name: "Sponsor 1", logoUrl: "https://placehold.co/200x100/eeeeee/333333?text=Sponsor+1" },
  { name: "Sponsor 2", logoUrl: "https://placehold.co/200x100/eeeeee/333333?text=Sponsor+2" },
  { name: "Sponsor 3", logoUrl: "https://placehold.co/200x100/eeeeee/333333?text=Sponsor+3" },
  { name: "Sponsor 4", logoUrl: "https://placehold.co/200x100/eeeeee/333333?text=Sponsor+4" },
  { name: "Sponsor 5", logoUrl: "https://placehold.co/200x100/eeeeee/333333?text=Sponsor+5" },
];

// Data Kontak
const contactData = {
  whatsapp: "+62 812 3249 4161 (Fira)",
  whatsappLink: "https://wa.me/6281232494161"
};

// Data Jadwal Pertandingan (Bagan)
const matchSchedules = {
  "1": {
    title: "Day 1",
    date: "Sabtu, 14 Mei 2026",
    session: "09:00 - 11:00",
    courts: {
      "Lapangan 1": [
        { time: "09:00 - 09:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "09:20 - 09:40 WIB", team1: "-", team2: "-", score: "" },
        { time: "09:40 - 10:00 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:00 - 10:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:20 - 10:40 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:40 - 11:00 WIB", team1: "-", team2: "-", score: "" },
        { time: "11:00 - 11:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "11:20 - 11:40 WIB", team1: "-", team2: "-", score: "" }
      ],
      "Lapangan 2": [
        { time: "09:00 - 09:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "09:20 - 09:40 WIB", team1: "-", team2: "-", score: "" },
        { time: "09:40 - 10:00 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:00 - 10:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:20 - 10:40 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:40 - 11:00 WIB", team1: "-", team2: "-", score: "" },
        { time: "11:00 - 11:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "11:20 - 11:40 WIB", team1: "-", team2: "-", score: "" }
      ]
    }
  },
  "2": {
    title: "Day 2",
    date: "Minggu, 15 Mei 2026",
    session: "09:00 - 11:00",
    courts: {
      "Lapangan 1": [
        { time: "09:00 - 09:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "09:20 - 09:40 WIB", team1: "-", team2: "-", score: "" },
        { time: "09:40 - 10:00 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:00 - 10:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:20 - 10:40 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:40 - 11:00 WIB", team1: "-", team2: "-", score: "" },
        { time: "11:00 - 11:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "11:20 - 11:40 WIB", team1: "-", team2: "-", score: "" }
      ],
      "Lapangan 2": [
        { time: "09:00 - 09:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "09:20 - 09:40 WIB", team1: "-", team2: "-", score: "" },
        { time: "09:40 - 10:00 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:00 - 10:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:20 - 10:40 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:40 - 11:00 WIB", team1: "-", team2: "-", score: "" },
        { time: "11:00 - 11:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "11:20 - 11:40 WIB", team1: "-", team2: "-", score: "" }
      ]
    }
  },
  "3": {
    title: "Day 3",
    date: "Sabtu, 21 Mei 2026",
    session: "09:00 - 11:00",
    courts: {
      "Lapangan 1": [
        { time: "09:00 - 09:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "09:20 - 09:40 WIB", team1: "-", team2: "-", score: "" },
        { time: "09:40 - 10:00 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:00 - 10:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:20 - 10:40 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:40 - 11:00 WIB", team1: "-", team2: "-", score: "" },
        { time: "11:00 - 11:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "11:20 - 11:40 WIB", team1: "-", team2: "-", score: "" }
      ],
      "Lapangan 2": [
        { time: "09:00 - 09:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "09:20 - 09:40 WIB", team1: "-", team2: "-", score: "" },
        { time: "09:40 - 10:00 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:00 - 10:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:20 - 10:40 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:40 - 11:00 WIB", team1: "-", team2: "-", score: "" },
        { time: "11:00 - 11:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "11:20 - 11:40 WIB", team1: "-", team2: "-", score: "" }
      ]
    }
  },
  "4": {
    title: "Day 4",
    date: "Minggu, 22 Mei 2026",
    session: "09:00 - 11:00",
    courts: {
      "Lapangan 1": [
        { time: "09:00 - 09:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "09:20 - 09:40 WIB", team1: "-", team2: "-", score: "" },
        { time: "09:40 - 10:00 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:00 - 10:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:20 - 10:40 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:40 - 11:00 WIB", team1: "-", team2: "-", score: "" },
        { time: "11:00 - 11:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "11:20 - 11:40 WIB", team1: "-", team2: "-", score: "" }
      ],
      "Lapangan 2": [
        { time: "09:00 - 09:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "09:20 - 09:40 WIB", team1: "-", team2: "-", score: "" },
        { time: "09:40 - 10:00 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:00 - 10:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:20 - 10:40 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:40 - 11:00 WIB", team1: "-", team2: "-", score: "" },
        { time: "11:00 - 11:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "11:20 - 11:40 WIB", team1: "-", team2: "-", score: "" }
      ]
    }
  },
  "5": {
    title: "Day 5",
    date: "Sabtu, 28 Mei 2026",
    session: "09:00 - 11:00",
    courts: {
      "Lapangan 1": [
        { time: "09:00 - 09:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "09:20 - 09:40 WIB", team1: "-", team2: "-", score: "" },
        { time: "09:40 - 10:00 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:00 - 10:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:20 - 10:40 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:40 - 11:00 WIB", team1: "-", team2: "-", score: "" },
        { time: "11:00 - 11:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "11:20 - 11:40 WIB", team1: "-", team2: "-", score: "" }
      ],
      "Lapangan 2": [
        { time: "09:00 - 09:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "09:20 - 09:40 WIB", team1: "-", team2: "-", score: "" },
        { time: "09:40 - 10:00 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:00 - 10:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:20 - 10:40 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:40 - 11:00 WIB", team1: "-", team2: "-", score: "" },
        { time: "11:00 - 11:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "11:20 - 11:40 WIB", team1: "-", team2: "-", score: "" }
      ]
    }
  },
  "6": {
    title: "Day 6",
    date: "Minggu, 29 Mei 2026",
    session: "09:00 - 11:00",
    courts: {
      "Lapangan 1": [
        { time: "09:00 - 09:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "09:20 - 09:40 WIB", team1: "-", team2: "-", score: "" },
        { time: "09:40 - 10:00 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:00 - 10:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:20 - 10:40 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:40 - 11:00 WIB", team1: "-", team2: "-", score: "" },
        { time: "11:00 - 11:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "11:20 - 11:40 WIB", team1: "-", team2: "-", score: "" }
      ],
      "Lapangan 2": [
        { time: "09:00 - 09:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "09:20 - 09:40 WIB", team1: "-", team2: "-", score: "" },
        { time: "09:40 - 10:00 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:00 - 10:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:20 - 10:40 WIB", team1: "-", team2: "-", score: "" },
        { time: "10:40 - 11:00 WIB", team1: "-", team2: "-", score: "" },
        { time: "11:00 - 11:20 WIB", team1: "-", team2: "-", score: "" },
        { time: "11:20 - 11:40 WIB", team1: "-", team2: "-", score: "" }
      ]
    }
  }
};
