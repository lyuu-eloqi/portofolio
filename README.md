# Personal Portfolio Website — Lyuu Eloqi, S.Kom.

Personal Portfolio Website profesional untuk **Lyuu Eloqi**, lulusan S1 Teknologi Informasi dari **Universitas Nias** (S.Kom., IPK 3.69/4.00), berbasis **HTML5 murni, CSS3, dan Vanilla JavaScript**.

Situs ini dibangun dengan pendekatan **Modern Minimalist, Clean, Professional, Elegant, dan Timeless** yang memprioritaskan keterbacaan, whitespace, aksesibilitas (*WCAG 2.1 AA/AAA*), dan performa tanpa dependensi framework eksternal (bebas React, Vue, jQuery, atau runtime berat).

---

## 📁 Struktur Direktori Proyek

```text
portfolio/
├── index.html                  # Halaman utama dengan semantic HTML5 & metadata SEO
├── assets/
│   ├── css/
│   │   └── style.css           # Styling modular, CSS custom properties, responsive media queries
│   ├── js/
│   │   └── script.js           # Vanilla JavaScript (navigasi responsif, scroll-spy, a11y)
│   ├── images/
│   │   ├── profile/
│   │   │   └── lyuu-eloqi-avatar.svg    # Ilustrasi avatar profesional (vektor tajam & ringan)
│   │   └── projects/
│   │       ├── siap-ternak.svg          # Mockup antarmuka dashboard analitik SIAP-TERNAK
│   │       └── 8core-agenda.svg         # Mockup antarmuka desktop pengarsipan 8Core-Agenda
│   └── documents/
│       └── cv_resmi.pdf        # Berkas Curriculum Vitae resmi siap unduh
└── README.md                   # Dokumentasi proyek & petunjuk kustomisasi
```

---

## 🎨 Palet Warna & Tipografi

* **Background:** `#F7F8FA`
* **Surface / Cards:** `#FFFFFF`
* **Subtle Fill:** `#EEF2F6`
* **Border:** `#E5E9EF` (Hover: `#CBD5E1`)
* **Primary Text:** `#202938` (Kontras tinggi AAA)
* **Secondary Text:** `#687386` (Kontras AA)
* **Accent Slate Blue:** `#526B82` (Hover: `#3D5266`)
* **Font Family:** [Poppins](https://fonts.google.com/specimen/Poppins) (Weights: 300, 400, 500, 600, 700)

---

## 🧩 Bagian-Bagian Website

1. **Header & Navigation:**
   * Navigasi terstruktur (*sticky*) dengan efek blur backdrop dan border adaptif saat digulir.
   * Drawer navigasi khusus layar sentuh (*mobile-friendly*) dengan dukungan tombol ESC, klik backdrop, dan manajemen atribut ARIA.
   * Tombol interaktif **Pratinjau CV** (membuka modal PDF interaktif dengan opsi unduh dan buka tab baru).
2. **Hero:**
   * Badge ketersediaan kerja (*Open to Work*).
   * Identitas nama, gelar resmi (`S.Kom.`), posisi `Information Technology Graduate | Web Developer`, dan domisili `Gunungsitoli, Sumatera Utara`.
   * Tombol navigasi cepat ke proyek dan unduh CV.
3. **About:**
   * Narasi pendidikan di Universitas Nias (2022–2026), IPK 3.69 / 4.00.
   * Kartu metrik akademis dan komitmen pada kualitas kode bersih serta dokumentasi.
4. **Skills:**
   * Dikelompokkan dalam 4 kartu fungsional:
     * *Programming & Development* (PHP, Laravel, CodeIgniter 3, Java, JavaScript, Vue.js, HTML5, CSS3, Bootstrap).
     * *Database* (MySQL, Normalisasi, Query Optimization).
     * *Tools & Environment* (VS Code, Git, GitHub, Laragon, XAMPP, Navicat).
     * *Productivity & Documentation* (Microsoft Word, Excel, PowerPoint, Google Workspace, User Manuals).
5. **Experience:**
   * **Peserta Magang – Pengembangan Sistem Informasi di RS Thomsen Nias** (Maret–Juni 2025): Aplikasi Java 8Core-Agenda, dokumentasi sistem, panduan pengguna, perencanaan sistem kasir web, SIMRS, portal Google Sites, kolaborasi tim 7 orang.
   * **Ketua Organisasi Remaja Masjid** (2025–Sekarang): Koordinasi kepanitiaan, relasi BKM & pihak eksternal, dokumentasi arsip, musyawarah mufakat.
6. **Projects:**
   * **SIAP-TERNAK:** Sistem Prediksi Ternak Ayam Berbasis Analitik Cerdas (Laravel, PHP, MySQL, Vue.js, Linear Regression, Moving Average, MAPE, data simulasi).
   * **8Core-Agenda:** Aplikasi Desktop Pengarsipan Surat (Java, MySQL, RS Thomsen Nias, sistem dokumentasi & buku panduan pengguna).
7. **Contact & Footer:**
   * Saluran kontak lengkap (Email, WhatsApp, LinkedIn, GitHub, CV PDF).
   * Tombol pintas kirim email langsung dan tombol kembali ke atas (*Back to Top*).

---

## 🛠️ Petunjuk Memperbarui Placeholder

Seluruh informasi kontak dan dokumen placeholder dapat disesuaikan dengan mudah pada berkas `index.html`:

1. **Email:**
   Cari baris `mailto:lyuu.eloqi@example.com` dan ganti dengan alamat email aktif Anda.
2. **Nomor Telepon / WhatsApp:**
   Cari `tel:+6281234567890` dan ganti dengan nomor telepon aktif Anda.
3. **LinkedIn & GitHub:**
   Cari tautan `https://linkedin.com/in/lyuu-eloqi-placeholder` dan `https://github.com/lyuu-eloqi-placeholder`, lalu sesuaikan dengan tautan profil Anda.
4. **Foto Profil Asli:**
   Simpan foto profil Anda (misal `profile.jpg`) ke folder `assets/images/profile/`, kemudian ubah tag `<img>` di bagian Hero pada `index.html` dari `lyuu-eloqi-avatar.svg` ke nama berkas foto Anda.
5. **Curriculum Vitae (PDF):**
   Berkas CV resmi Anda telah tertaut pada `assets/documents/cv_resmi.pdf`. Jika ingin mengganti di masa mendatang, cukup timpa berkas `cv_resmi.pdf` dengan berkas PDF terbaru Anda.

---

## 🚀 Cara Menjalankan Secara Lokal

Website ini merupakan static site tanpa dependensi build tool:
* Cukup buka berkas `index.html` langsung di browser web apa pun (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).
* Atau gunakan ekstensi **Live Server** di VS Code, atau jalankan local server sederhana:
  ```bash
  # Menggunakan Python:
  python -m http.server 8000
  ```
  Kemudian akses `http://localhost:8000` di browser.
