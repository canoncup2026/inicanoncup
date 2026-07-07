# CANON CUP 2026 Landing Page

Website statis untuk turnamen bulu tangkis CANON CUP 2026, dibuat dengan murni HTML, CSS, dan JavaScript tanpa framework atau build tool (sesuai spesifikasi).

## Fitur Utama
- **Pure Vanilla Tech Stack:** HTML5 Semantic, CSS Variables/Custom Properties, Vanilla JS.
- **Fully Responsive:** Layout rapi dan menyesuaikan di mobile, tablet, dan desktop (menggunakan Flexbox dan Grid). Termasuk hamburger menu untuk mobile.
- **Design Modern:** Palet warna dinamis, menggunakan custom font (Londrina Solid & Poppins), serta SVG inline.
- **Scroll Reveal Animation:** Animasi masuk elegan (fade in up) saat scroll halaman menggunakan IntersectionObserver.
- **Dynamic Data:** Carousel, Calendar, dan Sponsor dirender secara dinamis melalui JavaScript.
- **Custom JS Carousel:** Slider dokumentasi buatan sendiri dengan kontrol Next/Prev dan dot indicators, beserta autoplay.
- **Custom JS Calendar:** Mem-build struktur kalender bulan Agustus dan September 2026, membaca data event untuk memberi tanda pada kalender.

## Struktur File
- `/index.html` - Struktur utama halaman website.
- `/css/style.css` - Styling utama, CSS variables, typography, dan component styles.
- `/css/responsive.css` - Media query khusus untuk tampilan tablet dan mobile.
- `/js/data.js` - Tempat penyimpanan semua data dummy (Event Kalender, Foto Dokumentasi, Sponsor, Nomor Kontak). **Edit file ini untuk mengubah konten data!**
- `/js/main.js` - Logika untuk Navbar (scroll/mobile toggle) dan Scroll Reveal Observer.
- `/js/carousel.js` - Logika untuk merender dan mengontrol carousel dokumentasi.
- `/js/calendar.js` - Logika untuk merender grid kalender dan menyematkan data event.

## Cara Menjalankan Project
Anda tidak perlu build tools seperti npm/yarn atau framework apapun:
1. **Cara termudah:** Cukup klik ganda (double click) pada file `index.html`, halaman akan langsung terbuka di web browser Anda.
2. **Cara alternatif (disarankan untuk development):** Gunakan extension "Live Server" pada Visual Studio Code untuk melihat perubahan secara real-time.

## Cara Mengubah Data Dummy
Untuk memudahkan pembaruan konten, seluruh data dipusatkan pada file `js/data.js`.
1. Buka folder `js/` dan edit file `data.js`.
2. Ubah array `calendarEvents` untuk jadwal event.
3. Ubah array `carouselPhotos` dengan URL gambar yang sebenarnya untuk foto dokumentasi.
4. Ubah array `sponsorsData` untuk memasukkan logo sponsor asli.
5. Simpan file, lalu refresh browser.
