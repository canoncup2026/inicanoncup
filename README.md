# CANON CUP 2026

Website resmi untuk turnamen bulu tangkis **CANON CUP 2026** oleh Community of PKN STAN Badminton. Dibangun dengan fokus pada kecepatan, desain modern (*glassmorphism*, animasi dinamis), dan kemudahan pembaruan konten tanpa perlu menyentuh kode HTML.

Kategori Kompetisi Tahun Ini:
1. **Beginner Canon** (Internal)
2. **Mahasiswa PKN STAN & Instansi Kementerian Keuangan**
3. **Perguruan Tinggi Lainnya**

---

## 🌟 Fitur Utama
- **Cinematic Split-Screen Preloader:** Efek *loading* premium dengan *glassmorphism* dan animasi layar terbelah bergaya *smash*.
- **Data-Driven Architecture:** Cukup ubah 1 file (`data.js`) untuk memperbarui Jadwal, Bagan, Sponsor, Kalender, dan Foto Dokumentasi. Halaman akan ter-update secara otomatis!
- **Multi-Court Schedule Tabs:** Halaman jadwal yang cerdas dan hemat tempat. Mendukung *switching* antar-lapangan (Lapangan 1 & Lapangan 2) tanpa batas (*no-reload*).
- **FAQ Interaktif:** Sistem akordion yang responsif untuk halaman *Frequently Asked Questions*.
- **Modern Vanilla Stack:** 100% HTML, CSS (Variabel & Flex/Grid), dan Vanilla JS. Tanpa NPM, Webpack, atau Framework rumit. Mudah di-*host* di mana saja.

---

## 📁 Struktur Direktori & File

- `index.html` - Halaman Beranda (Hero, Hitung Mundur, Kalender, Dokumentasi, Sponsor).
- `schedule.html` - Halaman Jadwal & Bagan Pertandingan per hari (Day 1 - 6).
- `faq.html` - Halaman Tanya Jawab.
- `/css/style.css` - Seluruh desain, warna, *typography*, dan animasi CSS.
- `/js/data.js` - **[PENTING]** Pusat data (Database statis). Di sinilah Anda memperbarui konten web.
- `/js/main.js` - Logika Preloader, Navigasi, *Scroll Reveal*, dan kontrol pendaftaran.
- `/js/schedule.js` - Logika *rendering* bagan jadwal dan navigasi Tabs Multi-Lapangan.
- `/assets/images/` - Tempat menyimpan logo, aset desain, dan foto dokumentasi.

---

## 📝 Panduan Memperbarui Data (Tanpa Coding!)

Untuk mengelola konten website, Anda hanya perlu membuka dan mengedit file **`js/data.js`**.

### 1. Memperbarui Foto Dokumentasi
1. Simpan file foto Anda di folder `assets/images/dokumentasi/`.
2. Buka `js/data.js` dan temukan variabel `carouselPhotos`.
3. Ganti URL-nya. (Teks caption sudah dinonaktifkan agar desain lebih bersih).
   ```javascript
   const carouselPhotos = [
     { url: "assets/images/dokumentasi/BLM_0699.jpg", caption: "" },
     { url: "assets/images/dokumentasi/BLM_0718.jpg", caption: "" }
   ];
   ```

### 2. Memperbarui Jadwal & Bagan Pertandingan
Setiap harinya memiliki 16 pertandingan (8 di Lapangan 1, 8 di Lapangan 2).
1. Di `js/data.js`, gulir ke bagian paling bawah ke variabel `matchSchedules`.
2. Untuk mengisi tim yang bertanding, ubah properti `team1` dan `team2`.
3. **Mengisi Skor**: Jika properti `score` dikosongkan (`score: ""`), web akan menampilkan lambang **"VS"**. Jika pertandingan sudah selesai, isi skornya (contoh: `score: "21 - 15"`), maka lambang "VS" akan otomatis terganti menjadi angka skor tersebut.

### 3. Menambah Lapangan Baru (Misal: Lapangan 3)
Anda tidak perlu memanggil *programmer* untuk membuat halaman lapangan baru. Cukup di `js/data.js`, pada blok `courts`, tambahkan array `"Lapangan 3": [...]`. Tombol tab *Lapangan 3* akan otomatis muncul di website!

### 4. Mengubah Status Buka/Tutup Pendaftaran
Untuk membuka pendaftaran (menyalakan tombol di halaman beranda), Anda bisa mengaturnya di file `js/main.js` pada bagian `registrationConfig`. Ubah `false` menjadi `true`.

---

## 🚀 Cara Menjalankan Project
Karena project ini menggunakan *Vanilla Tech Stack*, Anda tidak perlu instalasi apapun:
1. Cukup klik ganda (double-click) pada file `index.html`.
2. Halaman akan langsung terbuka dan berfungsi penuh di *browser* Anda (Chrome/Safari/Edge/Firefox).
3. Untuk *live-development*, disarankan menggunakan ekstensi **"Live Server"** di VS Code.

> **Catatan Tambahan**: Untuk detail panduan navigasi UI atau riwayat modifikasi sistem secara mendalam, silakan baca `walkthrough.md` di folder *artifacts* (jika tersedia).
