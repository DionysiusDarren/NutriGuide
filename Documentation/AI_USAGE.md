# 🤖 Laporan Penggunaan AI (AI Usage Log)

**Nama Proyek:** NutriGuide Mobile App  
**Lokasi Berkas:** `Documentation/AI_USAGE.md`  
**Lokasi Tangkapan Layar:** `Documentation/Screenshots/`  
**Teknologi:** React Native (Expo), TypeScript, NativeWind (Tailwind CSS)

---

## 1. Ringkasan Peran AI

Dalam pengembangan proyek **NutriGuide**, AI (Gemini) bertindak sebagai **Senior React Native & TypeScript Writing/Coding Coach**. AI membimbing pengembang secara bertahap melalui:

1. **Konversi UI HTML ➔ TSX:** Translasi struktur elemen Web DOM (HTML/CSS) ke komponen deklaratif React Native.
2. **Debugging Syntax & Layout:** Pemecahan galat Metro bundler (seperti `Adjacent JSX elements`) dan penggantian CSS Grid ke Flexbox.
3. **Arsitektur Navigasi & Data:** Penyusunan struktur navigasi terpusat via Expo Router `(tabs)/_layout.tsx` serta modularisasi data statis (*mock data*).

---

## 2. Rincian Histori & Bantuan AI

### A. Tahap 1: Inisialisasi & Konversi Auth Screen
- Mengubah tag web (`<div>`, `<header>`, `<label>`, `<input>`) menjadi komponen React Native (`<View>`, `<Text>`, `<TextInput>`).
- Mengganti font Web Material Symbols menjadi `@expo/vector-icons` (`MaterialIcons`).
- Mengatasi galat *Single Root Element* pada JSX dengan pembungkus parent `<View>`.

### B. Tahap 2: State Management & Komponen Interaktif
- Implementasi React State (`useState`) untuk mode autentikasi (`Masuk` / `Daftar Akun`), visibilitas kata sandi, dan multiselect chip kesehatan.
- Penyesuaian tombol Social Auth (Google & Apple) dan penggantian prop-prop web-only (`data-icon`, `onclick`, `type`).

### C. Tahap 3: Halaman Beranda (Homepage) & Layout Flexbox
- Perbaikan layout biometrik dari CSS Grid (`grid grid-cols-2`) menjadi `flex-row flex-wrap`.
- Pemecahan masalah progress bar tersembunyi akibat pendaftaran warna di `tailwind.config.js`.
- Penyesuaian nama ikon dari *underscore* (`water_drop`, `local_fire_department`) ke *hyphenated* (`water-drop`, `local-fire-department`).

### D. Tahap 4: Navigasi Tabs & Pemisahan Data Statis
- Pengaturan navigasi bottom bar melalui file-based routing Expo Router `src/app/(tabs)/_layout.tsx`.
- Pemisahan *mock data* statis dan interface TypeScript ke folder khusus (`src/data/`).

---

## 3. Matriks Ringkasan Interaksi

| Sesi / Topik | Masalah / Permintaan | Intervensi & Solusi AI |
| :--- | :--- | :--- |
| **Header Badge** | Konversi badge medis & header awal | Translasi tag web, pengenalan `MaterialIcons` |
| **Expo Metro Error** | `SyntaxError: Adjacent JSX elements` | Pembungkusan elemen sibling dengan parent `<View>` |
| **Auth & Form** | Merah pada `switchAuthMode` & input | Penerapan `useState`, `<TextInput>`, `secureTextEntry` |
| **Chips Kesehatan** | Flaw pada chip multiselect | Koreksi tag `<p>`, perbaikan prop `Name` ➔ `name` |
| **Progress Bar** | Bar tidak tampil di Metro | Pendaftaran skema warna NativeWind di config |
| **Grid Biometrik** | Tampilan error akibat CSS Grid | Konversi ke Flexbox `flex-row flex-wrap` |
| **Expo Router Tabs** | Integrasi Bottom Navigation Bar | Penyusunan struktur layout `(tabs)/_layout.tsx` |
| **Mock Data** | Arsitektur pemisahan data statis | Panduan export interface & static array di `src/data/` |

---

## 4. Bukti Tangkapan Layar Interaksi (Screenshot Evidence)

Berikut adalah seluruh bukti tangkapan layar sesi pengembangan yang tersimpan di dalam folder `./Screenshots/`:

### A. Tahap 1: Inisialisasi & Konversi Auth Screen

![Screenshot 2026-11-10 003619](./Screenshots/Screenshot%202026-11-10%20003619.png)
![Screenshot 2026-11-10 003728](./Screenshots/Screenshot%202026-11-10%20003728.png)
![Screenshot 2026-11-10 003815](./Screenshots/Screenshot%202026-11-10%20003815.png)
![Screenshot 2026-11-10 004312](./Screenshots/Screenshot%202026-11-10%20004312.png)
![Screenshot 2026-11-10 004322](./Screenshots/Screenshot%202026-11-10%20004322.png)
![Screenshot 2026-11-10 004334](./Screenshots/Screenshot%202026-11-10%20004334.png)
![Screenshot 2026-11-10 004349](./Screenshots/Screenshot%202026-11-10%20004349.png)
![Screenshot 2026-11-10 004405](./Screenshots/Screenshot%202026-11-10%20004405.png)
![Screenshot 2026-11-10 004415](./Screenshots/Screenshot%202026-11-10%20004415.png)
![Screenshot 2026-11-10 004514](./Screenshots/Screenshot%202026-11-10%20004514.png)
![Screenshot 2026-11-10 004616](./Screenshots/Screenshot%202026-11-10%20004616.png)
![Screenshot 2026-11-10 004628](./Screenshots/Screenshot%202026-11-10%20004628.png)
![Screenshot 2026-11-10 004640](./Screenshots/Screenshot%202026-11-10%20004640.png)
![Screenshot 2026-11-10 004654](./Screenshots/Screenshot%202026-11-10%20004654.png)
![Screenshot 2026-11-10 004802](./Screenshots/Screenshot%202026-11-10%20004802.png)
![Screenshot 2026-11-10 004816](./Screenshots/Screenshot%202026-11-10%20004816.png)
![Screenshot 2026-11-10 004830](./Screenshots/Screenshot%202026-11-10%20004830.png)
![Screenshot 2026-11-10 004850](./Screenshots/Screenshot%202026-11-10%20004850.png)
![Screenshot 2026-11-10 004909](./Screenshots/Screenshot%202026-11-10%20004909.png)
![Screenshot 2026-11-10 004925](./Screenshots/Screenshot%202026-11-10%20004925.png)
![Screenshot 2026-11-10 004938](./Screenshots/Screenshot%202026-11-10%20004938.png)
![Screenshot 2026-11-10 005309](./Screenshots/Screenshot%202026-11-10%20005309.png)
![Screenshot 2026-11-10 005331](./Screenshots/Screenshot%202026-11-10%20005331.png)
![Screenshot 2026-11-10 005353](./Screenshots/Screenshot%202026-11-10%20005353.png)
![Screenshot 2026-11-10 005415](./Screenshots/Screenshot%202026-11-10%20005415.png)
![Screenshot 2026-11-10 005428](./Screenshots/Screenshot%202026-11-10%20005428.png)
![Screenshot 2026-11-10 005444](./Screenshots/Screenshot%202026-11-10%20005444.png)
![Screenshot 2026-11-10 005456](./Screenshots/Screenshot%202026-11-10%20005456.png)
![Screenshot 2026-11-10 005509](./Screenshots/Screenshot%202026-11-10%20005509.png)
![Screenshot 2026-11-10 005651](./Screenshots/Screenshot%202026-11-10%20005651.png)
![Screenshot 2026-11-10 005701](./Screenshots/Screenshot%202026-11-10%20005701.png)
![Screenshot 2026-11-10 005709](./Screenshots/Screenshot%202026-11-10%20005709.png)
![Screenshot 2026-11-10 005719](./Screenshots/Screenshot%202026-11-10%20005719.png)
![Screenshot 2026-11-10 005731](./Screenshots/Screenshot%202026-11-10%20005731.png)
![Screenshot 2026-11-10 005739](./Screenshots/Screenshot%202026-11-10%20005739.png)

---

### B. Tahap 2: Komponen Interaktif & State Management

![Screenshot 2026-11-10 010543](./Screenshots/Screenshot%202026-11-10%20010543.png)
![Screenshot 2026-11-10 010651](./Screenshots/Screenshot%202026-11-10%20010651.png)
![Screenshot 2026-11-10 010733](./Screenshots/Screenshot%202026-11-10%20010733.png)
![Screenshot 2026-11-10 010810](./Screenshots/Screenshot%202026-11-10%20010810.png)
![Screenshot 2026-11-10 010832](./Screenshots/Screenshot%202026-11-10%20010832.png)
![Screenshot 2026-11-10 010845](./Screenshots/Screenshot%202026-11-10%20010845.png)
![Screenshot 2026-11-10 010855](./Screenshots/Screenshot%202026-11-10%20010855.png)
![Screenshot 2026-11-10 010912](./Screenshots/Screenshot%202026-11-10%20010912.png)
![Screenshot 2026-11-10 010920](./Screenshots/Screenshot%202026-11-10%20010920.png)
![Screenshot 2026-11-10 011011](./Screenshots/Screenshot%202026-11-10%20011011.png)
![Screenshot 2026-11-10 011049](./Screenshots/Screenshot%202026-11-10%20011049.png)
![Screenshot 2026-11-10 011109](./Screenshots/Screenshot%202026-11-10%20011109.png)
![Screenshot 2026-11-10 011128](./Screenshots/Screenshot%202026-11-10%20011128.png)
![Screenshot 2026-11-10 011139](./Screenshots/Screenshot%202026-11-10%20011139.png)
![Screenshot 2026-11-10 011149](./Screenshots/Screenshot%202026-11-10%20011149.png)
![Screenshot 2026-11-10 011220](./Screenshots/Screenshot%202026-11-10%20011220.png)
![Screenshot 2026-11-10 011233](./Screenshots/Screenshot%202026-11-10%20011233.png)
![Screenshot 2026-11-10 011243](./Screenshots/Screenshot%202026-11-10%20011243.png)
![Screenshot 2026-11-10 011340](./Screenshots/Screenshot%202026-11-10%20011340.png)
![Screenshot 2026-11-10 011354](./Screenshots/Screenshot%202026-11-10%20011354.png)
![Screenshot 2026-11-10 011414](./Screenshots/Screenshot%202026-11-10%20011414.png)
![Screenshot 2026-11-10 011432](./Screenshots/Screenshot%202026-11-10%20011432.png)
![Screenshot 2026-11-10 011444](./Screenshots/Screenshot%202026-11-10%20011444.png)
![Screenshot 2026-11-10 011455](./Screenshots/Screenshot%202026-11-10%20011455.png)
![Screenshot 2026-11-10 011509](./Screenshots/Screenshot%202026-11-10%20011509.png)
![Screenshot 2026-11-10 011546](./Screenshots/Screenshot%202026-11-10%20011546.png)
![Screenshot 2026-11-10 011559](./Screenshots/Screenshot%202026-11-10%20011559.png)
![Screenshot 2026-11-10 011609](./Screenshots/Screenshot%202026-11-10%20011609.png)
![Screenshot 2026-11-10 011623](./Screenshots/Screenshot%202026-11-10%20011623.png)
![Screenshot 2026-11-10 011633](./Screenshots/Screenshot%202026-11-10%20011633.png)
![Screenshot 2026-11-10 011643](./Screenshots/Screenshot%202026-11-10%20011643.png)
![Screenshot 2026-11-10 011656](./Screenshots/Screenshot%202026-11-10%20011656.png)
![Screenshot 2026-11-10 011715](./Screenshots/Screenshot%202026-11-10%20011715.png)
![Screenshot 2026-11-10 011723](./Screenshots/Screenshot%202026-11-10%20011723.png)
![Screenshot 2026-11-10 011734](./Screenshots/Screenshot%202026-11-10%20011734.png)
![Screenshot 2026-11-10 011743](./Screenshots/Screenshot%202026-11-10%20011743.png)
![Screenshot 2026-11-10 011753](./Screenshots/Screenshot%202026-11-10%20011753.png)

---

### C. Tahap 3: Konversi Halaman Beranda (Homepage) & Layout Grid

![Screenshot 2026-11-10 011803](./Screenshots/Screenshot%202026-11-10%20011803.png)
![Screenshot 2026-11-10 011821](./Screenshots/Screenshot%202026-11-10%20011821.png)
![Screenshot 2026-11-10 011833](./Screenshots/Screenshot%202026-11-10%20011833.png)
![Screenshot 2026-11-10 011846](./Screenshots/Screenshot%202026-11-10%20011846.png)
![Screenshot 2026-11-10 011901](./Screenshots/Screenshot%202026-11-10%20011901.png)
![Screenshot 2026-11-10 011916](./Screenshots/Screenshot%202026-11-10%20011916.png)
![Screenshot 2026-11-10 011929](./Screenshots/Screenshot%202026-11-10%20011929.png)
![Screenshot 2026-11-10 011937](./Screenshots/Screenshot%202026-11-10%20011937.png)
![Screenshot 2026-11-10 011956](./Screenshots/Screenshot%202026-11-10%20011956.png)
![Screenshot 2026-11-10 012011](./Screenshots/Screenshot%202026-11-10%20012011.png)
![Screenshot 2026-11-10 012022](./Screenshots/Screenshot%202026-11-10%20012022.png)
![Screenshot 2026-11-10 012030](./Screenshots/Screenshot%202026-11-10%20012030.png)
![Screenshot 2026-11-10 012042](./Screenshots/Screenshot%202026-11-10%20012042.png)
![Screenshot 2026-11-10 012056](./Screenshots/Screenshot%202026-11-10%20012056.png)
![Screenshot 2026-11-10 012109](./Screenshots/Screenshot%202026-11-10%20012109.png)
![Screenshot 2026-11-10 012124](./Screenshots/Screenshot%202026-11-10%20012124.png)
![Screenshot 2026-11-10 012138](./Screenshots/Screenshot%202026-11-10%20012138.png)
![Screenshot 2026-11-10 012151](./Screenshots/Screenshot%202026-11-10%20012151.png)
![Screenshot 2026-11-10 012201](./Screenshots/Screenshot%202026-11-10%20012201.png)
![Screenshot 2026-11-10 012210](./Screenshots/Screenshot%202026-11-10%20012210.png)
![Screenshot 2026-11-10 022315](./Screenshots/Screenshot%202026-11-10%20022315.png)
![Screenshot 2026-11-10 022336](./Screenshots/Screenshot%202026-11-10%20022336.png)
![Screenshot 2026-11-10 022344](./Screenshots/Screenshot%202026-11-10%20022344.png)

---

### D. Tahap 4: Navigasi Bottom Bar, Halaman Profil & Static Data

![Screenshot 2026-11-10 122627](./Screenshots/Screenshot%202026-11-10%20122627.png)
![Screenshot 2026-11-10 122637](./Screenshots/Screenshot%202026-11-10%20122637.png)
![Screenshot 2026-11-10 122652](./Screenshots/Screenshot%202026-11-10%20122652.png)

---

## 5. Pernyataan Integritas Pengembang

Seluruh arahan, saran sintaksis, dan perbaikan kode dari AI telah diperiksa, diuji pada bundler Expo Metro, serta disesuaikan secara manual oleh pengembang agar sesuai dengan spesifikasi aplikasi **NutriGuide**.