# NutriGuide App

NutriGuide adalah aplikasi seluler berbasis **React Native** dan **Expo Router** yang dirancang untuk membantu penderita kondisi kesehatan khusus (seperti Maag/GERD, Diabetes Melitus, Hipertensi, dan Alergi Makanan) dalam memantau serta menyesuaikan pola nutrisi dan hidrasi harian secara aman dan terstruktur.

---

## Penjelasan Konsep

React Native adalah kerangka kerja (*framework*) open-source berbasis JavaScript dan React yang dikembangkan oleh Meta untuk membangun aplikasi seluler lintas platform (iOS dan Android) menggunakan basis kode tunggal (*single codebase*). Berbeda dengan kerangka aplikasi hybrid berbasis WebView yang pada dasarnya merender situs web di dalam pembungkus seluler, React Native beroperasi dengan memetakan komponen JavaScript langsung ke elemen antarmuka pengguna asli (*native UI components*) dari sistem operasi target. Proses ini terjadi melalui *Native Bridge* atau arsitektur modern *JavaScript Interface* (JSI), sehingga eksekusi elemen antarmuka dan interaksi pengguna terasa sangat responsif serta memiliki karakteristik performa khas aplikasi native.

### 3 Keunggulan React Native untuk Aplikasi Hybrid

1. **Efisiensi Pengembangan (*Single Codebase*):** Pengembang cukup menuliskan logika bisnis dan desain antarmuka satu kali menggunakan JavaScript atau TypeScript. Kode tersebut dapat langsung diselaraskan untuk berjalan secara konsisten di perangkat Android maupun iOS, yang secara signifikan memangkas biaya, waktu, dan sumber daya pengembangan.
2. **Performa Mendekati Aplikasi Native:** Karena tidak bergantung pada pencerminan halaman web di dalam WebView, React Native memanfaatkan komponen UI native sesungguhnya (seperti `View`, `Text`, dan `ScrollView`). Hal ini menghasilkan animasi, transisi halaman, dan penanganan input pengguna yang mulus dan bebas dari *lag*.
3. **Ekosistem Tangguh dan Iterasi Cepat (*Fast Refresh & Expo*):** Didukung oleh ekosistem Expo, pengembang dapat memanfaatkan fitur *Fast Refresh* untuk melihat perubahan kode secara instan tanpa melakukan kompilasi ulang (*rebuild*) dari awal. Selain itu, pustaka seperti Expo Router dan Expo Vector Icons mempermudah integrasi fitur kompleks secara efisien.

---

### Komponen, Props, State, dan Navigasi

Berikut adalah penjelasan beserta contoh kode yang diimplementasikan dalam struktur proyek NutriGuide:

#### 1. Komponen & Props
Komponen merupakan unit independen yang membentuk tampilan UI. **Props** (*properties*) adalah data atau parameter yang dikirimkan dari komponen induk (*parent*) ke komponen anak (*child*) dan bersifat read-only.

```tsx
import React from 'react';
import { View, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// Komponen HealthBadge menerima prop 'label' dan 'iconName'
interface HealthBadgeProps {
  label: string;
  iconName: React.ComponentProps<typeof MaterialIcons>['name'];
}

export function HealthBadge({ label, iconName }: HealthBadgeProps) {
  return (
    <View className="flex-row items-center gap-1.5 px-3 py-1 rounded-full bg-[#eff4ff] border border-[#bec9c1]/30">
      <MaterialIcons name={iconName} size={16} color="#096444" />
      <Text className="text-xs font-semibold text-on-surface">{label}</Text>
    </View>
  );
}
```

#### 2. State
**State** adalah variabel data internal yang dikelola di dalam komponen. Ketika nilai state diperbarui melalui fungsi pembaru (`setState`), React Native secara otomatis akan memicu pembaruan (*re-render*) antarmuka sesuai data terbaru.

```tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export function AuthModeSwitch() {
  // State untuk melacak tab aktif: 'login' atau 'register'
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  return (
    <View className="flex-row p-1 bg-surface-container-low rounded-lg">
      <TouchableOpacity 
        onPress={() => setAuthMode('login')}
        className={`flex-1 py-2 rounded-md ${authMode === 'login' ? 'bg-white shadow-sm' : ''}`}
      >
        <Text className="text-center font-bold">Masuk</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => setAuthMode('register')}
        className={`flex-1 py-2 rounded-md ${authMode === 'register' ? 'bg-white shadow-sm' : ''}`}
      >
        <Text className="text-center font-bold">Daftar Akun</Text>
      </TouchableOpacity>
    </View>
  );
}
```

#### 3. Navigasi (Expo Router)
NutriGuide menggunakan **Expo Router** yang menerapkan navigasi berbasis struktur direktori berkas (*file-based routing*):
- **Stack Navigation (`_layout1.tsx`):** Menangani tumpukan halaman utama, seperti pengalihan dari layar Autentikasi (`index.tsx`) ke grup halaman ber-navbar (`PagesWithNavbar`).
- **Tab Navigation (`PagesWithNavbar/_layout.tsx`):** Mengatur navigasi bilah bawah (*bottom tab bar*) untuk menghubungkan layar `homepage`, `scan`, `food`, `schedule`, dan `profile`.

```tsx
// Navigasi perpindahan dari Halaman Autentikasi ke Homepage
import { useRouter } from 'expo-router';

export default function LoginSubmit() {
  const router = useRouter();

  const handleLogin = () => {
    // Berpindah ke antarmuka utama (grup tab) dan menggantikan stack sejarah
    router.replace('/PagesWithNavbar/homepage');
  };

  return (
    <TouchableOpacity onPress={handleLogin}>
      <Text>Masuk ke NutriGuide</Text>
    </TouchableOpacity>
  );
}
```

---

## Analisis Kebutuhan

### Masalah
Penderita penyakit kronis atau gangguan pencernaan (seperti Maag/GERD, Diabetes, dan Hipertensi) sering menghadapi kesulitan dalam memilah makanan harian yang aman bagi kondisi fisik mereka. Sebagian besar aplikasi pemantau kalori komersial hanya berfokus pada penurunan berat badan tanpa mempertimbangkan batasan medis penting, seperti kadar natrium, indeks glikemik, atau bahan pemicu iritasi asam lambung dan alergen.

### Target Pengguna
1. **Penderita Maag & Asam Lambung (GERD):** Membutuhkan pengingat pola makan serta hidrasi bertahap yang ramah terhadap mukosa lambung.
2. **Penderita Diabetes Melitus & Hipertensi:** Membutuhkan pengawasan ketat terhadap batas harian konsumsi gula sederhana dan kadar natrium (garam).
3. **Individu dengan Alergi & Intoleransi Makanan:** Membutuhkan peringatan cepat saat memindai atau mencatat produk makanan yang mengandung gluten, kacang, maupun *seafood*.

---

### 5 Kebutuhan Pengguna
1. **Personalisasi Profil Kesehatan:** Pengguna dapat mendaftar dan memilih fokus kondisi medis serta jenis alergi makanan yang dimiliki pada saat registrasi.
2. **Dashboard Visualisasi Nutrisi Klinis:** Pengguna memerlukan pemantauan batas harian kalori, gula, dan natrium dengan penanda ambang batas aman (ideal/peringatan).
3. **Pindaian & Peringatan Produk Makanan:** Pengguna dapat memindai barcode atau foto produk untuk mengevaluasi tingkat kecocokan nutrisi dan kandungan pemicu iritasi/alergi.
4. **Pelacak Hidrasi Ramah Lambung:** Pengguna dapat mencatat asupan air minum harian secara berkala beserta indikator pencapaian target volume (ml).
5. **Manajemen Profil & Jadwal Makan:** Pengguna dapat memantau indikator fisik (IMT), mengatur jadwal makan teratur, serta mengelola preferensi batasan medis.

---

### Tabel Pemetaan Kebutuhan ke Layar dan Komponen

| No | Kebutuhan Pengguna | Layar Target | Komponen Utama |
| :--- | :--- | :--- | :--- |
| **1** | Personalisasi Profil & Autentikasi | `src/app/index.tsx` | `SafeAreaView`, `ScrollView`, `TextInput`, `TouchableOpacity`, `MaterialIcons`, `Alert` |
| **2** | Dashboard Visual & Evaluasi Nutrisi | `src/app/PagesWithNavbar/homepage.tsx` | `SafeAreaView`, `ScrollView`, `View` (Bento Progress Bar), `Image`, `MaterialIcons` |
| **3** | Pindaian Barcode / Makanan | `src/app/PagesWithNavbar/scan.tsx` | `View` (Framing Target Viewfinder), `TouchableOpacity` (Mode Switcher), `Image`, `MaterialIcons` |
| **4** | Pelacak Hidrasi Bertahap | `homepage.tsx` & `profile.tsx` | `View` (Hydration Card), `MaterialIcons` (`local-drink`, `water-drop`), `TouchableOpacity` |
| **5** | Kelola Profil & Jadwal Makan | `src/app/PagesWithNavbar/profile.tsx` | `Image` (Avatar), `View` (Schedule List & Condition Badges), `TouchableOpacity` (`router.replace`) |

---

### Alasan Keputusan Desain

- **Warna Klinis Nyaman (*Emerald Green & Medical Palette*):** Penggunaan warna hijau `#096444` dan variasi gradasi hijau-biru lembut memberikan penekanan kesan medis terakreditasi, bersih, ramah, dan menenangkan bagi pengguna yang membutuhkan reassurance atas kondisi kesehatan mereka.
- **Tata Letak Kartu Bento (*Bento Box Grid Layout*):** Dipilih pada `homepage.tsx` untuk mengelompokkan variabel klinis yang rumit (gula, natrium, karbohidrat kompleks, dan lemak sehat) ke dalam blok visual yang teratur sehingga mudah dipahami secara cepat.
- **Navigasi Berjenjang (*Nested Routing Architecture*):** Pemisahan berkas antara `_layout1.tsx` (Stack utama) dan `PagesWithNavbar/_layout.tsx` (Bottom Tab) menjaga alur aplikasi tetap rapi, mencegah pengguna kembali ke layar autentikasi secara tidak sengaja setelah masuk.

---

### Rencana Pengembangan (Roadmap)

- **Fase 1 (Integrasi Backend & Autentikasi):** Menghubungkan form `index.tsx` dan preferensi profil kesehatan pengguna dengan layanan backend (Firebase/Supabase API).
- **Fase 2 (Fungsionalitas Kamera & Barcode Scanner API):** Mengintegrasikan modul `scan.tsx` dengan pustaka `expo-camera` serta database nutrisi terbuka (*Open Food Facts API* / *Vision AI*) untuk deteksi otomatis bahan makanan.
- **Fase 3 (Sistem Notifikasi Pengingat Lokal):** Mengembangkan fitur *push notification* otomatis untuk mengingatkan pengguna mengenai jam minum air dan jadwal makan teratur guna mencegah kekambuhan Maag/GERD.