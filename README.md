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
npm run build# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
