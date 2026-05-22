# Volunext

Landing page pendaftaran relawan untuk komunitas **Volunext**. Website ini dirancang untuk memberikan informasi lengkap tentang program relawan, divisi yang tersedia, alur pendaftaran, serta FAQ — dilengkapi dengan animasi modern dan latar belakang interaktif berbasis WebGL.

---

## Daftar Isi

- [Fitur](#fitur)
- [Teknologi](#teknologi)
- [Struktur Proyek](#struktur-proyek)
- [Memulai](#memulai)
- [Build & Deploy](#build--deploy)
- [Kustomisasi](#kustomisasi)

---

## Fitur

- **Navigasi Responsif** — Menu yang menyesuaikan tampilan desktop dan mobile.
- **Hero Interaktif** — Animasi teks per huruf, tombol pendaftaran dengan efek sorot, dan statistik yang muncul bertahap.
- **Tentang** — Informasi komunitas dengan kartu fitur bergaya *glass morphism*.
- **Divisi** — Empat divisi dengan efek hover gradien dan sorot interaktif.
- **Linimasa** — Tiga tahap pendaftaran (Pendaftaran → Wawancara → Pengumuman) dalam timeline vertikal dengan indikator fase aktif.
- **FAQ** — Pertanyaan umum dengan animasi buka/tutup dan efek sorot.
- **Call-to-Action Akhir** — Bagian penutup untuk mendorong pendaftaran sebelum footer.
- **Footer** — Tautan cepat, kontak email, dan ikon media sosial dengan efek sorot.
- **Tombol Kembali ke Atas** — Memudahkan navigasi di halaman yang panjang.
- **Latar Belakang Aurora** — Animasi gradasi halus berbasis WebGL untuk kesan modern.

---

## Teknologi

| Kategori   | Teknologi                                                                 |
|------------|---------------------------------------------------------------------------|
| Framework  | React 19 + Vite                                                           |
| Bahasa     | TypeScript                                                                |
| Styling    | Tailwind CSS                                                              |
| Animasi    | Framer Motion, GSAP                                                       |
| Ikon       | React Icons                                                               |
| Background | ogl (WebGL) — efek Aurora                                                 |
| Komponen   | SplitText, TrueFocus, FadeContent, AnimatedList                           |

---

## Struktur Proyek

```
src/
├── animations/     # Komponen animasi (SplitText, TrueFocus, FadeContent, AnimatedList)
├── components/     # Komponen halaman (Navbar, Hero, About, Division, Timeline, FAQ, Footer, dll.)
├── config.ts       # Konfigurasi tautan pendaftaran
├── App.tsx         # Komponen utama pengatur tata letak
├── main.tsx        # Titik masuk aplikasi
└── index.css       # CSS global dan Tailwind directives
```

---

## Memulai

Pastikan [Node.js](https://nodejs.org) sudah terinstal, lalu jalankan perintah berikut:

```bash
# 1. Clone repositori
git clone https://github.com/cpzz18/web-recruitment.git
cd web-recruitment

# 2. Instal dependensi
npm install

# 3. Jalankan server pengembangan
npm run dev
```

---

## Build & Deploy

```bash
# Build untuk produksi
npm run build

# Preview hasil build secara lokal
npm run preview
```

Output akan tersimpan di folder `dist/` dan siap di-deploy ke platform seperti Vercel, Netlify, atau GitHub Pages.

---

## Kustomisasi

- **Tautan Pendaftaran** — Ubah di `src/config.ts`.
- **Konten Teks** — Edit langsung pada komponen di `src/components/`.
- **Warna & Tema** — Sesuaikan di `tailwind.config.js` atau `src/index.css`.
- **Efek Aurora** — Konfigurasi parameter WebGL ada di `src/components/Aurora.tsx`.