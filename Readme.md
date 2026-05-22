# Volunext

Landing page pendaftaran relawan untuk komunitas Volunext. Website ini dirancang untuk memberikan informasi lengkap tentang program relawan, divisi yang tersedia, alur pendaftaran, serta FAQ. Dilengkapi dengan animasi modern dan latar belakang interaktif yang memberikan pengalaman visual menarik.

## Daftar Isi

- [Fitur](#fitur)
- [Teknologi](#teknologi)
- [Struktur Proyek](#struktur-proyek)
- [Memulai](#memulai)
- [Build & Deploy](#build--deploy)
- [Kustomisasi](#kustomisasi)
- [Lisensi](#lisensi)

## Fitur

- **Navigasi responsif** – Menu navigasi yang menyesuaikan tampilan desktop dan mobile.
- **Hero interaktif** – Judul dengan animasi teks per huruf, tombol pendaftaran dengan efek sorot, dan statistik yang muncul bertahap.
- **Tentang** – Informasi singkat mengenai komunitas dengan kartu fitur bergaya glass.
- **Divisi** – Empat divisi yang dapat dipilih, masing-masing dengan efek hover gradien dan sorot interaktif.
- **Linimasa** – Tiga tahap pendaftaran (Pendaftaran, Wawancara, Pengumuman) ditampilkan dalam timeline vertikal dengan indikator fase aktif.
- **FAQ** – Pertanyaan yang sering diajukan dengan animasi buka/tutup jawaban dan efek sorot.
- **Ajakan Akhir** – Call-to-action akhir sebelum footer untuk mendorong pendaftaran.
- **Footer** – Tautan cepat, kontak email, dan ikon media sosial dengan efek sorot.
- **Tombol kembali ke atas** – Memudahkan navigasi di halaman yang panjang.
- **Latar belakang Aurora** – Animasi gradasi halus berbasis WebGL yang memberikan kesan modern.

## Teknologi

| Kategori   | Teknologi                                                                 |
| ---------- | ------------------------------------------------------------------------- |
| Framework  | React 19 + Vite                                                           |
| Bahasa     | TypeScript                                                                |
| Styling    | Tailwind CSS                                                              |
| Animasi    | Framer Motion, GSAP                                                       |
| Ikon       | React Icons                                                               |
| Background | ogl (WebGL) untuk efek Aurora                                             |
| Interaksi  | Komponen animasi khusus (SplitText, TrueFocus, FadeContent, AnimatedList) |

## Struktur Proyek

src/
├── animations/ # Komponen animasi (SplitText, TrueFocus, FadeContent, AnimatedList)
├── components/ # Komponen halaman (Navbar, Hero, About, Division, Timeline, FAQ, FinalCTA, Footer, BackToTop, Aurora)
├── config.ts # Konfigurasi tautan pendaftaran
├── App.tsx # Komponen utama pengatur tata letak
├── main.tsx # Titik masuk aplikasi
└── index.css # Aturan CSS global termasuk Tailwind directives

## Memulai

Pastikan [Node.js](https://nodejs.org) sudah terinstal.

```bash
# 1. Clone repositori
git clone https://github.com/cpzz18/web-recruitment.git
cd web-recruitment

# 2. Instal dependensi
npm install

# 3. Jalankan server pengembangan
npm run dev
```

## Build & Deploy
```bash
npm run build