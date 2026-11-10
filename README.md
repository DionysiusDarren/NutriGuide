# NutriGuide App 🥗📱

NutriGuide adalah aplikasi mobile berbasis React Native yang dirancang untuk membantu penderita kondisi kesehatan khusus (seperti Maag, GERD, Diabetes Melitus, dan Hipertensi) dalam memantau nutrisi harian, batas konsumsi gula/natrium, pola hidrasi bertahap, serta mendeteksi kecocokan bahan makanan.

---

## 1. Penjelasan Konsep React Native

### Cara Kerja React Native
React Native adalah kerangka kerja (*framework*) lintas platform (*cross-platform*) yang memungkinkan pengembang membangun aplikasi seluler native menggunakan JavaScript atau TypeScript. Tidak seperti kerangka berbasis WebView, React Native mengeksekusi kode JavaScript pada *JavaScript Engine* (seperti Hermes) dan berkomunikasi dengan komponen native platform (Android/iOS) melalui arsitektur bridge atau *JavaScript Interface* (JSI). Komponen UI abstrak seperti `<View>` dan `<Text>` diterjemahkan secara langsung menjadi elemen native asli seperti `android.view.View` di Android dan `UIView` di iOS. Hal ini menghasilkan performa grafis dan respon antarmuka yang setara dengan aplikasi native murni.

### 3 Keunggulan Utama untuk Aplikasi Hybrid
1. **Satu Basis Kode Lintas Platform (*Single Codebase*)**: Pengembang cukup menulis satu set logika aplikasi dan UI untuk dipublikasikan ke iOS dan Android secara bersamaan, sehingga menghemat efisiensi waktu dan biaya pengembangan.
2. **Performa Native Murni**: Karena merender komponen UI asli milik sistem operasi dan bukan sekadar *web container*, transisi antarmuka, animasi, dan manipulasi data terasa sangat responsif dan alami.
3. **Ekosistem dan Produktivitas Tinggi (*Fast Refresh*)**: Dukungan Expo Router, Tailwind CSS (via NativeWind), serta pustaka ikon native mempercepat iterasi visual dan mempermudah pengelolaan navigasi berbasis struktur berkas (*file-based routing*).

### Konsep Inti Framework dengan Contoh Kode NutriGuide

#### a. Komponen (Component)
Komponen adalah blok pembangun UI modular yang mengembalikan struktur elemen visual. 
*Contoh pada `app/index.tsx`:*
```tsx
export default function AuthHeader() {
  return (
    <View className="items-center mb-space-lg">
      <View className="w-14 h-14 rounded-2xl bg-[#2e7d5b] justify-center items-center">
        <MaterialIcons color="#ffffff" name="eco" size="{30}"/>
      </View>
      <Text className="font-headline-lg text-primary">NutriGuide</Text>
    </View>
  );
}
```

#### b. Props (Properties)
Props adalah argumen data imutabel (*read-only*) yang dikirim dari komponen induk ke komponen anak untuk mengkustomisasi tampilan.
*Contoh pada `app/PagesWithNavbar/homepage.tsx`:*
```tsx
<Image USER_PROFILE.avatarUrl className="w-10 h-10 rounded-full border-2 border-primary-container" source="{{" uri: }}/>
<MaterialIcons color="#096444" name="verified" size="{12}"/>
```

#### c. State
State adalah data internal komponen yang bersifat dinamis dan dapat berubah sesuai interaksi pengguna, memicu pembaruan ulang tampilan (*re-render*) secara otomatis.
*Contoh pada `app/index.tsx`:*
```tsx
const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
const [showPassword, setShowPassword] = useState<boolean>(false);

const switchAuthMode = (mode: 'login' | 'register') => {
  setAuthMode(mode);
};
```

#### d. Navigasi
Navigasi diatur menggunakan Expo Router secara hierarkis via Stack Navigator dan Bottom Tabs Navigator.
*Contoh pemanggilan navigasi pada `app/index.tsx`:*
```tsx
import { useRouter } from 'expo-router';
const router = useRouter();

// Berpindah ke grup halaman berdasar tab bar pasca autentikasi
router.replace('/PagesWithNavbar/homepage');
```

---

## 2. Analisis Kebutuhan

### Masalah (Problem Statement)
Penderita kondisi kesehatan kronis seperti asam lambung (GERD), diabetes, dan hipertensi sering kesulitan mengontrol asupan harian. Kesalahan dalam memilih makanan tinggi gula, bergaram tinggi, atau mengandung alergen dapat langsung memicu masalah kesehatan. Selain itu, belum banyak aplikasi nutrisi yang secara spesifik mempertimbangkan batas nyaman lambung dan jadwal hidrasi bertahap bagi penderita Maag.

### Target Pengguna
* Penderita penyakit lambung (Maag & GERD) yang memerlukan pengawasan asupan secara berkala.
* Penderita Diabetes Melitus dan Hipertensi yang perlu membatasi kadar gula dan natrium harian.
* Individu dengan alergi makanan spesifik (seperti gluten, udang, kerang, atau kacang-kacangan).

### Kebutuhan Pengguna (User Requirements)
1. Pengguna dapat memilih fokus kondisi kesehatan khusus saat pendaftaran untuk mempersonalisasi sistem peringatan nutrisi.
2. Pengguna dapat memantau akumulasi kalori harian beserta rincian indikator keamanan mikronutrisi (gula, natrium, karbohidrat, lemak) secara visual.
3. Pengguna dapat mengonsumsi air minum sesuai rekomendasi ramah lambung dan mencatat asupan hidrasi dengan cepat.
4. Pengguna dapat memindai barcode produk atau mengambil foto makanan untuk memeriksa tingkat kecocokan dan potensi bahaya alergen.
5. Pengguna dapat melihat dan mengelola profil kesehatan pribadi serta jadwal makan teratur.

### Tabel Pemetaan Kebutuhan ke Layar dan Komponen

| ID | Deskripsi Kebutuhan | Layar (*Screen*) | Komponen UI & State / Data |
| :--- | :--- | :--- | :--- |
| **REQ-01** | Otentikasi & Seleksi Profil Kesehatan Multiselect | `app/index.tsx` | `useState(authMode)`, `TouchableOpacity` chip fokus kesehatan (Diabetes, Maag, Hipertensi, Alergi) |
| **REQ-02** | Dashboard Ringkasan Nutrisi & Evaluasi Medis Harian | `app/PagesWithNavbar/homepage.tsx` | Custom Bento Card, Progress Bar Kalori & Biometrik (Gula/Natrium), `USER_PROFILE` |
| **REQ-03** | Tracker Hidrasi Ramah Lambung (+250ml quick log) | `app/PagesWithNavbar/homepage.tsx` & `profile.tsx` | Visualizer Ikon Gelas, Dynamic Progress Width, `MaterialIcons` `water-drop` |
| **REQ-04** | Pemindai Barcode & Foto Makanan dengan Deteksi Alergen | `app/PagesWithNavbar/scan.tsx` | Mode Switcher Tab, Frame Viewfinder Kamera, Skor Kecocokan & Chip Peringatan |
| **REQ-05** | Manajemen Profil Pengguna, Pantangan & Jadwal Makan | `app/PagesWithNavbar/profile.tsx` | Summary Profile Card, Badge Pantangan Medis, List Timeline Jadwal Makan |

### Alasan Keputusan Desain & Rencana Pengembangan

#### Keputusan Desain
* **Palet Warna Hijau Klinis (`#096444` & `#2e7d5b`)**: Dipilih untuk memberikan kesan aman, tenang, terakreditasi medis, serta ramah kesehatan.
* **Matriks Antarmuka Bento (Bento Grid Layout)**: Mengelompokkan data kompleks (seperti kadar gula dan natrium) ke dalam kartu-kartu ringkas agar mudah dipahami pengguna dalam sekali lihat.
* **Penggunaan NativeWind/Tailwind CSS**: Mempercepat konsistensi *styling* antarmuka serta mempermudah adaptasi *layout* responsif di berbagai ukuran layar.

#### Rencana Pengembangan Kedepan
* **Pengabstrakan Komponen (`src/components`)**: Memindahkan elemen UI berulang (seperti *Card Nutrisi*, *Header TopAppBar*, dan *Button*) dari berkas halaman di `src/app/` ke dalam folder `src/components` agar lebih kustom dan reusabel.
* **Integrasi AI Scanner Real-time**: Menghubungkan modul pemindai di `scan.tsx` dengan API pengenalan citra berbasis Gemini AI untuk mendeteksi komposisi makanan mentah.
* **Skalabilitas Data Mock (`src/data/mockData.ts`)**: Mengembangkan struktur data lokal menjadi penyimpanan persistent berbasis SQLite atau integrasi API backend Firebase.

---

## 3. Tangkapan Layar Aplikasi (Documentation)

Berikut adalah dokumentasi tampilan antarmuka antarlayar NutriGuide App yang diambil dari folder `Documentation/Screenshot App/`:

### 1. Halaman Masuk Akun (Auth Login)
![Login Screen](./Documentation/Screenshot%20App/Screenshot%202026-11-10%20131251.png)

### 2. Halaman Registrasi & Pilih Profil Kesehatan
![Register Screen](./Documentation/Screenshot%20App/Screenshot%202026-11-10%20131505.png)

### 3. Halaman Beranda (Nutritional Dashboard)
![Homepage Screen](./Documentation/Screenshot%20App/Screenshot%202026-11-10%20131900.png)

### 4. Halaman Pindai Barcode & Produk Makanan
![Scan Screen](./Documentation/Screenshot%20App/Screenshot%202026-11-10%20131929.png)

### 5. Halaman Profil Pengguna & Pantangan Medis
![Profile Screen](./Documentation/Screenshot%20App/Screenshot%202026-11-10%20131954.png)

### 6. Demo Video
https://drive.google.com/file/d/1x25olUAKNT-F6N0zOjfYJLDPbwhqZjPx/view?usp=drive_link

---

## 4. Struktur Folder Proyek

```text
Nutriguide/
├── Documentation/
│   └── Screenshot App/
│       ├── Screenshot 2026-11-10 131251.png
│       ├── Screenshot 2026-11-10 131505.png
│       ├── Screenshot 2026-11-10 131900.png
│       ├── Screenshot 2026-11-10 131929.png
│       └── Screenshot 2026-11-10 131954.png
├── src/
│   ├── app/
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   └── PagesWithNavbar/
│   │       ├── _layout.tsx
│   │       ├── homepage.tsx
│   │       ├── scan.tsx
│   │       ├── food.tsx
│   │       ├── schedule.tsx
│   │       └── profile.tsx
│   ├── components/         # Modul komponen reusabel (dalam tahap persiapan)
│   └── data/
│       └── mockData.ts     # Data profil & nutrisi simulasi
├── global.css
├── tailwind.config.js
├── package.json
└── README.md
```