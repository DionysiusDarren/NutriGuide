import { Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Alert, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import '../../global.css';

export default function app(){
  // Menggunakan state untuk menyimpan input email dan password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemembered, setIsRemembered] = useState(true);

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
    <SafeAreaView className="flex-1 bg-[#F5F9F6]">
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        
        {/* Top Bar: Badge & Language */}
        <View className="flex-row justify-between items-center w-full px-5 pt-8">
          <View className="flex-row items-center bg-[#E6F3EB] px-3 py-1.5 rounded-full">
            <Feather name="shield" size={14} color="#2E7D32" />
            <Text className="text-[10px] text-[#2E7D32] font-bold ml-1 tracking-widest">
              TERAKREDITASI MEDIS & AMAN
            </Text>
          </View>
          <View className="flex-row items-center">
            <Feather name="globe" size={16} color="#666" />
            <Text className="text-sm font-bold ml-1 text-gray-600">ID</Text>
          </View>
        </View>

        {/* Logo & Header */}
        <View className="items-center mt-10 px-5">
          <View className="bg-[#2E7D32] w-16 h-16 rounded-2xl items-center justify-center mb-4">
             <FontAwesome5 name="leaf" size={32} color="white" />
          </View>
          <Text className="text-[28px] font-bold text-[#1A4D2E] mb-2">NutriGuide</Text>
          <Text className="text-sm text-center text-gray-500 px-4">
            Pantau nutrisi harian yang aman untuk kondisi tubuhmu
          </Text>
        </View>

        {/* Main Card Container */}
        <View className="bg-white mx-5 mt-8 p-5 rounded-3xl shadow-sm border border-gray-100">
          
          {/* Tabs: Masuk & Daftar Akun[cite: 5] */}
          <View className="flex-row bg-[#F5F7F9] rounded-xl p-1 mb-6">
            <TouchableOpacity className="flex-1 bg-white py-3 rounded-lg shadow-sm items-center">
              <Text className="font-bold text-[#1A4D2E] text-base">Masuk</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 py-3 rounded-lg items-center justify-center">
              <Text className="font-semibold text-gray-400 text-base">Daftar Akun</Text>
            </TouchableOpacity>
          </View>

          {/* Form Input Email[cite: 5] */}
          <View className="mb-4">
            <Text className="text-sm text-[#333] mb-2 font-semibold">Email atau No. Handphone</Text>
            <View className="flex-row items-center border border-gray-300 rounded-xl px-4 py-3 bg-white">
              <Feather name="at-sign" size={18} color="#9CA3AF" />
              <TextInput
                className="flex-1 ml-3 text-base text-gray-800"
                placeholder="nama@email.com atau 0812..."
                placeholderTextColor="#9CA3AF"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>

          {/* Form Input Password[cite: 5] */}
          <View className="mb-4">
            <Text className="text-sm text-[#333] mb-2 font-semibold">Kata Sandi</Text>
            <View className="flex-row items-center border border-gray-300 rounded-xl px-4 py-3 bg-white">
              <Feather name="lock" size={18} color="#9CA3AF" />
              <TextInput
                className="flex-1 ml-3 text-base text-gray-800"
                placeholder="Masukkan kata sandi"
                placeholderTextColor="#9CA3AF"
                secureTextEntry // Menyamarkan teks untuk password[cite: 6]
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity>
                <Feather name="eye" size={18} color="#9CA3AF" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Options: Ingat Saya & Lupa Kata Sandi[cite: 5] */}
          <View className="flex-row justify-between items-center mb-6">
            <TouchableOpacity 
              className="flex-row items-center"
              onPress={() => setIsRemembered(!isRemembered)}
            >
              <MaterialIcons 
                name={isRemembered ? "check-box" : "check-box-outline-blank"} 
                size={20} 
                color={isRemembered ? "#2E7D32" : "#9CA3AF"} 
              />
              <Text className="text-sm text-gray-600 ml-2">Ingat Saya</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-sm text-[#2E7D32] font-semibold">Lupa Kata Sandi?</Text>
            </TouchableOpacity>
          </View>

          {/* Tombol Login Utama[cite: 5] */}
          <TouchableOpacity 
            className="bg-[#2E7D32] py-4 w-full rounded-xl flex-row justify-center items-center mb-6" 
            onPress={handleLogin}
          >
            <Text className="text-white text-base font-bold mr-2">Masuk ke NutriGuide</Text>
            <Feather name="arrow-right" size={18} color="white" />
          </TouchableOpacity>

          {/* Divider[cite: 5] */}
          <View className="flex-row items-center mb-6">
            <View className="flex-1 h-[1px] bg-gray-200" />
            <Text className="mx-4 text-gray-400 text-sm">atau masuk dengan</Text>
            <View className="flex-1 h-[1px] bg-gray-200" />
          </View>

          {/* Social Login Buttons[cite: 5] */}
          <View className="flex-row justify-between">
            <TouchableOpacity className="flex-1 flex-row items-center justify-center bg-[#F5F7F9] py-3 rounded-xl mr-2">
              <FontAwesome5 name="google" size={16} color="#DB4437" />
              <Text className="ml-2 font-semibold text-gray-700">Google</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 flex-row items-center justify-center bg-[#F5F7F9] py-3 rounded-xl ml-2">
              <FontAwesome5 name="apple" size={18} color="black" />
              <Text className="ml-2 font-semibold text-gray-700">Apple</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer: Privacy Notice[cite: 5] */}
        <View className="bg-[#EEF2FF] mx-5 mt-6 p-4 rounded-2xl flex-row border border-indigo-50">
          <Feather name="lock" size={20} color="#2E7D32" className="mt-1" />
          <View className="flex-1 ml-3">
            <Text className="text-xs text-gray-600 leading-5">
              <Text className="font-bold text-gray-800">Privasi Data Medis Terjamin: </Text>
              Informasi riwayat penyakit dan alergi Anda dienkripsi end-to-end sesuai standar HIPAA & UU PDP.
            </Text>
          </View>
        </View>

        {/* Bottom Links[cite: 5] */}
        <View className="flex-row justify-center mt-6">
          <Text className="text-xs text-gray-400">
            Kebijakan Privasi  •  Syarat Layanan  •  Bantuan Medis
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
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