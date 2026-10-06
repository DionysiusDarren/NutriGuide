import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import '../global.css'

export default function app(){
  // Menggunakan state untuk menyimpan input email dan password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Logika sederhana untuk pengecekan login
    if (email === '' || password === '') {
      Alert.alert('Error', 'Email dan Password tidak boleh kosong!');
    } else {
      Alert.alert('Sukses', `Selamat datang, ${email}!`);
      // Di sini kamu bisa menambahkan logika integrasi ke backend/API nantinya
    }
  };

  return(
    <View className="flex-1 bg-[#F5F9F6] items-center justify-center p-5">
      {/* Header / Judul Aplikasi */}
      <Text className="text-[32px] font-bold text-[#2E7D32] mb-[5px]">NutriGuide</Text>
      <Text className="text-base text-[#777] mb-10">Asisten Nutrisi Pribadimu</Text>

      {/* Form Input Container */}
      <View className="w-full mb-5">
        <Text className="text-sm text-[#333] mb-[5px] ml-[5px] font-semibold">Email:</Text>
        <TextInput
          className="bg-white border border-[#CCC] rounded-lg p-[15px] mb-[15px] text-base"
          placeholder="Masukkan email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)} // Update state saat teks berubah[cite: 1]
        />

        <Text className="text-sm text-[#333] mb-[5px] ml-[5px] font-semibold">Password:</Text>
        <TextInput
          className="bg-white border border-[#CCC] rounded-lg p-[15px] mb-[15px] text-base"
          placeholder="Masukkan password"
          secureTextEntry // Menyamarkan teks untuk password[cite: 1]
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      {/* Tombol Login */}
      <TouchableOpacity className="bg-[#4CAF50] p-[15px] w-full rounded-lg items-center" onPress={handleLogin}>
        <Text className="text-white text-[18px] font-bold">Masuk</Text>
      </TouchableOpacity>
    </View>
  );
}





// export default function App() {
//   // Menggunakan state untuk menyimpan input email dan password
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Logika sederhana untuk pengecekan login
//     if (email === '' || password === '') {
//       Alert.alert('Error', 'Email dan Password tidak boleh kosong!');
//     } else {
//       Alert.alert('Sukses', `Selamat datang, ${email}!`);
//       // Di sini kamu bisa menambahkan logika integrasi ke backend/API nantinya
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header / Judul Aplikasi */}
//       <Text style={styles.title}>NutriGuide</Text>
//       <Text style={styles.subtitle}>Asisten Nutrisi Pribadimu</Text>

//       {/* Form Input Container */}
//       <View style={styles.inputContainer}>
//         <Text style={styles.inputLabel}>Email:</Text>
//         <TextInput
//           style={styles.textInput}
//           placeholder="Masukkan email"
//           keyboardType="email-address"
//           value={email}
//           onChangeText={(text) => setEmail(text)} // Update state saat teks berubah
//         />

//         <Text style={styles.inputLabel}>Password:</Text>
//         <TextInput
//           style={styles.textInput}
//           placeholder="Masukkan password"
//           secureTextEntry // Menyamarkan teks untuk password
//           value={password}
//           onChangeText={(text) => setPassword(text)}
//         />
//       </View>

//       {/* Tombol Login */}
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Masuk</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// // Styling menggunakan StyleSheet bawaan React Native
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F9F6', // Warna latar belakang yang segar (tema kesehatan)
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#2E7D32', // Hijau tua
//     marginBottom: 5,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#777',
//     marginBottom: 40,
//   },
//   inputContainer: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   inputLabel: {
//     fontSize: 14,
//     color: '#333',
//     marginBottom: 5,
//     marginLeft: 5,
//     fontWeight: '600',
//   },
//   textInput: {
//     backgroundColor: '#FFF',
//     borderWidth: 1,
//     borderColor: '#CCC',
//     borderRadius: 8,
//     padding: 15,
//     marginBottom: 15,
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: '#4CAF50', // Hijau tombol
//     padding: 15,
//     width: '100%',
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#FFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });