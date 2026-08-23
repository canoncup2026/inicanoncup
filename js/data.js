// === DATA DUMMY EVENT ===
// Anda bisa mengedit data ini tanpa mengubah file HTML atau JS lainnya

// Data Event Kalender (Agustus - September 2026)
const calendarEvents = [
  { startDate: "2026-07-13", endDate: "2026-07-17", title: "Opreg Early Bird", color: "var(--color-accent)" },
  { startDate: "2026-07-18", endDate: "2026-08-14", title: "Opreg Reguler", color: "var(--color-highlight)", textColor: "var(--color-primary)" },
  { startDate: "2026-08-15", endDate: "2026-08-17", title: "Opreg Extended", color: "#e74c3c", textColor: "#ffffff" },
  { startDate: "2026-08-18", endDate: "2026-08-20", title: "Last Chance Extend (s.d 12.00 WIB)", color: "#d63031", textColor: "#ffffff" },
  { date: "2026-08-20", title: "Technical Meeting", color: "#8e44ad" },
  { date: "2026-08-22", title: "Day 1" },
  { date: "2026-08-23", title: "Day 2" },
  { date: "2026-08-28", title: "Day 3" },
  { date: "2026-08-29", title: "Day 4" },
  { date: "2026-08-30", title: "Day 5" }
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
const sponsorsData = {
  main: [
    { name: "Wells", logoUrl: "assets/images/sponsor/wells.png" },
    { name: "Katanya PB", logoUrl: "assets/images/sponsor/katanyapb.png" },
    { name: "Zac Washing", logoUrl: "assets/images/sponsor/zac-washing.png" }
  ],
  small: [
    { name: "Minuk", logoUrl: "assets/images/sponsor/minuk.png" },
    { name: "Warung Bu Kokom", logoUrl: "assets/images/sponsor/warung-bu-kokom.png" }
  ]
};

// Data Kontak
const contactData = {
  whatsapp: "+62 812 3249 4161 (Fira)",
  whatsappLink: "https://wa.me/6281232494161"
};

// Data Jadwal Pertandingan (Bagan)
// Master Spreadsheet: https://docs.google.com/spreadsheets/d/1MhBjpKatskDdtDELuzocSmQJJOnfePrp/edit?usp=sharing
const matchSchedules = {
  "1": {
    title: "Day 1",
    date: "Sabtu, 22 Agustus 2026",
    session: "07.00 - 15.00 WIB",
    courts: {
      "Lapangan 1": [
        { time: "08:35 - 09:10 WIB", stage: "P1", category: "Beginner Canon MD", team1: "Astrum", team2: "Somehand LS", score: "42 - 38" },
        { time: "09:10 - 09:45 WIB", stage: "P3", category: "Beginner Canon MD", team1: "Smash Angin", team2: "Tim HaHa", score: "34 - 42" },
        { time: "09:45 - 10:20 WIB", stage: "QF1", category: "Beginner Canon MD", team1: "Gatau", team2: "Bos Muda", score: "42 - 31" },
        { time: "10:20 - 10:55 WIB", stage: "QF3", category: "Beginner Canon MD", team1: "Dulang", team2: "Fixed Asset", score: "22 - 42" },
        { time: "10:55 - 11:30 WIB", stage: "P1", category: "Mahasiswa & Kemenkeu MS", team1: "Team DarkoDango", team2: "Witarig", score: "40 - 42" },
        { time: "11:30 - 12:05 WIB", stage: "QF1", category: "Mahasiswa & Kemenkeu MS", team1: "Pecinta Sholawat", team2: "KK", score: "42 - 23" },
        { time: "12:05 - 12:40 WIB", stage: "QF3", category: "Mahasiswa & Kemenkeu MS", team1: "Karremm99", team2: "Witarig", score: "27 - 42" }
      ],
      "Lapangan 2": [
        { time: "08:35 - 09:10 WIB", stage: "P2", category: "Beginner Canon MD", team1: "Fixed Asset", team2: "Duo Trio", score: "42 - 33" },
        { time: "09:45 - 10:20 WIB", stage: "QF2", category: "Beginner Canon MD", team1: "Saripah Badminton", team2: "Astrum", score: "42 - 33" },
        { time: "10:20 - 10:55 WIB", stage: "QF4", category: "Beginner Canon MD", team1: "Dado GG", team2: "Tim HaHa", score: "36 - 42" },
        { time: "10:55 - 11:30 WIB", stage: "P2", category: "Mahasiswa & Kemenkeu MS", team1: "OJETE", team2: "Artito", score: "29 - 42" },
        { time: "11:30 - 12:05 WIB", stage: "QF2", category: "Mahasiswa & Kemenkeu MS", team1: "PLASSMMAAA", team2: "Aku Jago", score: "34 - 42" },
        { time: "12:05 - 12:40 WIB", stage: "QF4", category: "Mahasiswa & Kemenkeu MS", team1: "ABE 042", team2: "Artito", score: "42 - 32" }
      ]
    }
  },
  "2": {
    title: "Day 2",
    date: "Minggu, 23 Agustus 2026",
    session: "07.30 - 13.00 WIB",
    courts: {
      "Lapangan 1": [
        { time: "08:30 - 09:10 WIB", stage: "SF1", category: "Beginner Canon MD", team1: "Gatau", team2: "Saripah Badminton", score: "0 - 2" },
        { time: "09:10 - 09:50 WIB", stage: "SF1", category: "Mahasiswa & Kemenkeu MS", team1: "Pecinta Sholawat", team2: "Witarig", score: "2 - 1" },
        { time: "09:50 - 10:30 WIB", stage: "FINAL", category: "Beginner Canon MD", team1: "Saripah Badminton", team2: "Tim HaHa", score: "1 - 2" },
        { time: "10:30 - 11:10 WIB", stage: "FINAL", category: "Mahasiswa & Kemenkeu MS", team1: "Aku Jago", team2: "Pecinta Sholawat", score: "0 - 2" }
      ],
      "Lapangan 2": [
        { time: "08:30 - 09:10 WIB", stage: "SF2", category: "Beginner Canon MD", team1: "Fixed Asset", team2: "Tim HaHa", score: "0 - 2" },
        { time: "09:10 - 09:50 WIB", stage: "SF2", category: "Mahasiswa & Kemenkeu MS", team1: "Aku Jago", team2: "ABE 042", score: "2 - 0" },
        { time: "09:50 - 10:30 WIB", stage: "JUARA 3", category: "Beginner Canon MD", team1: "Fixed Asset", team2: "Gatau", score: "1 - 2" },
        { time: "10:30 - 11:10 WIB", stage: "JUARA 3", category: "Mahasiswa & Kemenkeu MS", team1: "Witarig", team2: "ABE 042", score: "" }
      ]
    }
  },
  "3": {
    title: "Day 3",
    date: "Jumat, 28 Agustus 2026",
    session: "16.00 - 21.30 WIB",
    courts: {
      "Lapangan 1": [
        { time: "16:00 - 21:30 WIB", stage: "Penyisihan", category: "Perguruan Tinggi", team1: "Perguruan Tinggi", team2: "TBA", score: "" }
      ],
      "Lapangan 2": [
        { time: "16:00 - 21:30 WIB", stage: "Penyisihan", category: "Perguruan Tinggi", team1: "Perguruan Tinggi", team2: "TBA", score: "" }
      ]
    }
  },
  "4": {
    title: "Day 4",
    date: "Sabtu, 29 Agustus 2026",
    session: "08.00 - 21.30 WIB",
    courts: {
      "Lapangan 1": [
        { time: "08:00 - 21:30 WIB", stage: "Penyisihan", category: "Perguruan Tinggi", team1: "Perguruan Tinggi", team2: "TBA", score: "" }
      ],
      "Lapangan 2": [
        { time: "08:00 - 21:30 WIB", stage: "Penyisihan", category: "Mahasiswa & Kemenkeu", team1: "Mahasiswa PKN STAN & Kemenkeu", team2: "TBA", score: "" }
      ]
    }
  },
  "5": {
    title: "Day 5",
    date: "Minggu, 30 Agustus 2026",
    session: "08.00 - 21.30 WIB",
    courts: {
      "Lapangan 1": [
        { time: "08:00 - 21:30 WIB", stage: "Semifinal & Final", category: "Mahasiswa & Kemenkeu", team1: "Mahasiswa PKN STAN & Kemenkeu", team2: "TBA", score: "" }
      ],
      "Lapangan 2": [
        { time: "08:00 - 21:30 WIB", stage: "Semifinal & Final", category: "Perguruan Tinggi", team1: "Perguruan Tinggi", team2: "TBA", score: "" }
      ]
    }
  }
};
