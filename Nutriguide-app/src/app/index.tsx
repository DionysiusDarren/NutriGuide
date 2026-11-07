import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, SafeAreaView} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function HomeScreen() {
  //  Switching Tabs
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const switchAuthMode = (mode: 'login' | 'register') => {setAuthMode(mode);};
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [IsRemembered, setIsRemembered] = useState<boolean>(false)

  return (

    <SafeAreaView className="flex-1 bg-background">
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }} 
        showsVerticalScrollIndicator={false}>
          
        <View className="px-margin-mobile pt-space-lg">
          {/* <!-- Top Security / Medical Standard Badge --> */}
          <View className="flex-row items-center justify-between mb-space-md">
            <View className="flex-row items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-low border border-outline-variant/30 text-secondary">
              <MaterialIcons name="verified-user" size={15} className="text-secondary"/>
              <Text className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                Terakreditasi Medis & Aman
              </Text>
            </View>
            <View className="flex-row items-center gap-1 text-outline">
              <MaterialIcons name="language" size={18} className="text-outline"/>
              <Text className="font-label-md text-label-md">ID</Text>
            </View>
          </View>

          {/* <!-- Brand Header --> */}
          <View className="items-center text-center mb-space-lg">
            <View className="items-center items-center justify-center w-14 h-14 rounded-2xl bg-[#2e7d5b] text-on-primary shadow-sm mb-space-sm shadow-primary-container/20">
              <MaterialIcons name="eco" color='#ffffff' size={30} className="text-on-primary" />
            </View>
            <Text className="font-headline-lg text-headline-lg tracking-tight text-primary">NutriGuide</Text>
            <Text className="font-body-md text-body-md text-on-surface-variant mt-1 max-w-[280px] mx-auto leading-relaxed">
              Pantau nutrisi harian yang aman untuk kondisi tubuhmu
            </Text>
          </View>

          {/* <!-- Elevated Auth Module Card (Level 1 Surface) --> */}
          <View className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-space-md shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)]">

            {/* <!-- Segmented Tab Navigation: Masuk vs Daftar Akun --> */}
            <View className="flex-row p-1 bg-surface-container-low rounded-lg mb-space-md">
              <TouchableOpacity onPress={() => switchAuthMode('login')} className="flex-1 py-2 rounded-md bg-surface-container-lowest shadow-sm">
                <Text className={`text-center font-headline-sm ${authMode === 'login' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>
                  Masuk
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => switchAuthMode('register')} className="flex-1 py-2 rounded-md">
                <Text className={`text-center font-headline-sm ${authMode === 'register' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>
                  Daftar Akun
                </Text>
              </TouchableOpacity>
            </View>


            {/* <!-- Auth Form --> */}
            <View className="space-y-space-md">
              {/* <!-- Registration Only Field: Nama Lengkap --> */}
              {authMode === 'register' && (
                <View className="space-y-1 mt-3">
                  <Text className="font-label-md text-label-md text-on-surface-variant">Nama Lengkap</Text>
                  <View className="relative flex-row items-center">
                    <MaterialIcons name="person" size={20} className="absolute left-3 text-outline z-10"/>
                    <TextInput className="w-full h-12 pl-10 pr-3 bg-surface-container-lowest border border-outline-variant rounded-lg text-body-md text-on-surface" 
                    placeholder="Contoh: dr. Amanda Pratama" 
                    placeholderTextColor="#6f7a72"/>
                  </View>
                </View>
              )}

              {/* <!-- Email / No. Handphone --> */}
              <View className="space-y-1">
                <Text className="font-label-md text-label-md text-on-surface-variant">Email atau No. Handphone</Text>
                <View className="relative flex items-center">
                  <MaterialIcons name="alternate-email" size={20} className="material-symbols-outlined absolute left-3 text-outline z-10"/>
                  <TextInput className="w-full h-12 pl-10 pr-3 bg-surface-container-lowest border border-outline-variant rounded-lg text-body-md text-on-surface" 
                  placeholder="nama@email.com atau 0812..." 
                  placeholderTextColor="#6f7a72" 
                  keyboardType='email-address'/>
                </View>
              </View>

              {/* <!-- Kata Sandi --> */}
              <View className="space-y-1">
                <View className="flex-row items-center justify-between">
                  <Text className="font-label-md text-label-md text-on-surface-variant">Kata Sandi</Text>
                  {authMode === 'register' && (
                    <Text className="text-body-sm font-body-sm text-outline">Min. 8 karakter</Text>
                  )}
                </View>
                <View className="relative flex-row items-center">
                  <MaterialIcons name="lock" size={20} className="material-symbols-outlined absolute left-3 text-outline z-10"/>
                  <TextInput className="w-full h-12 pl-10 pr-11 bg-surface-container-lowest border border-outline-variant rounded-lg text-body-md text-on-surface" 
                  placeholder="Masukkan kata sandi" 
                  placeholderTextColor="#6f7a72" 
                  secureTextEntry={!showPassword}/>
                  <TouchableOpacity className="absolute right-3 p-1 text-outline hover:text-on-surface focus:outline-none" onPress={() => setShowPassword(!showPassword)}>
                    <MaterialIcons name={showPassword ? "visibility-off" : "visibility"} size={20} className="material-symbols-outlined"/>
                  </TouchableOpacity>
                </View>
              </View>

              {/* <!-- Personal Health Profile Quick Selector (Contextual to Sign Up, expandable on Login) --> */}
              {authMode === 'register' && (
                <View className="pt-1 mt-3 border-t border-outline-variant/20">
                  <View className="flex-row items-center justify-between mb-2">
                    <Text className="font-headline-sm text-[15px] leading-5 text-on-surface">Pilih Fokus Kondisi Kesehatan</Text>
                    <Text className="font-label-sm text-label-sm text-secondary bg-secondary-container/30 px-2 py-0.5 rounded-full">Bisa multiselect</Text>
                  </View>
                  <Text className="font-body-sm text-body-sm text-on-surface-variant mb-3 leading-snug">
                    Sistem kami akan memfilter peringatan natrium, indeks glikemik, dan alergen sesuai profil ini.
                  </Text>
                  <View className="flex-row flex-wrap gap-2">
                    {/* <!-- Diabetes Melitus --> */}
                    <TouchableOpacity className="flex-row items-center gap-1.5 px-3 py-1.5 rounded-full border border-outline-variant bg-surface" 
                    onPress={() => {}}>
                      <MaterialIcons name="bloodtype" size={14} color="#7c4d00"/>
                      <Text className="font-label-sm text-label-sm text-on-surface-variant">Diabetes Melitus</Text>
                    </TouchableOpacity>

                    {/* <!-- Maag & Asam Lambung (GERD) --> */}
                    <TouchableOpacity className="flex-row items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary-container bg-primary-fixed/30" 
                    onPress={() => {}}>
                      <MaterialIcons name="shield" size={14} color="#096444"/>
                      <Text className="font-label-sm text-label-sm text-on-primary-fixed-variant font-semibold">Maag & Asam Lambung (GERD)</Text>
                    </TouchableOpacity>

                    {/* <!-- Hipertensi --> */}
                    <TouchableOpacity className="flex-row items-center gap-1.5 px-3 py-1.5 rounded-full border border-outline-variant bg-surface" 
                    onPress={() => {}}>
                      <MaterialIcons name="favorite" size={14} color="#006a61"/>
                      <Text className="font-label-sm text-label-sm text-on-surface-variant">Hipertensi</Text>
                    </TouchableOpacity>

                    {/* <!-- Kolesterol --> */}
                    <TouchableOpacity className="flex-row items-center gap-1.5 px-3 py-1.5 rounded-full border border-outline-variant bg-surface" 
                    onPress={() => {}}>
                      <MaterialIcons name="monitor-heart" size={14} color="#6f7a72"/>
                      <Text className="font-label-sm text-label-sm text-on-surface-variant">Kolesterol</Text>
                    </TouchableOpacity>

                    {/* <!-- Alergi Gluten --> */}
                    <TouchableOpacity className="flex-row items-center gap-1.5 px-3 py-1.5 rounded-full border border-outline-variant bg-surface" 
                    onPress={() => {}}>
                      <MaterialIcons name="grain" size={14} color="#ffb95f"/>
                      <Text className="font-label-sm text-label-sm text-on-surface-variant">Alergi Gluten</Text>
                    </TouchableOpacity>

                    {/* <!-- Alergi Kacang --> */}
                    <TouchableOpacity className="flex-row items-center gap-1.5 px-3 py-1.5 rounded-full border border-outline-variant bg-surface" 
                    onPress={() => {}}>
                      <MaterialIcons name="warning" size={14} color="#ba1a1a"/>
                      <Text className="font-label-sm text-label-sm text-on-surface-variant">Alergi Kacang</Text>
                    </TouchableOpacity>

                    {/* <!-- Diet Rendah Garam --> */}
                    <TouchableOpacity className="flex-row items-center gap-1.5 px-3 py-1.5 rounded-full border border-outline-variant bg-surface" 
                    onPress={() => {}}>
                      <MaterialIcons name="water-drop" size={14} color="#096444"/>
                      <Text className="font-label-sm text-label-sm text-on-surface-variant">Diet Rendah Garam</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}

              {/* <!-- Remember Me Checkbox & Forgot Password Link --> */}
              {authMode === 'login' && (
                <View className="flex-row items-center justify-between pt-2"> 
                  <TouchableOpacity className="flex-row items-center gap-2" 
                  onPress={() => setIsRemembered(!IsRemembered)}>
                    <MaterialIcons name={IsRemembered ? "check-box" : "check-box-outline-blank"} size={20} color={IsRemembered ? "#096444" : "#6f7a72"}/>
                    <Text className="font-body-sm text-body-sm text-on-surface-variant">Ingat Saya</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text className="font-body-sm text-body-sm text-primary font-medium">Lupa Kata Sandi?</Text>
                  </TouchableOpacity>
                </View>
              )}

              {/* <!-- Primary Call to Action Button --> */}
              <TouchableOpacity className="w-full h-12 bg-[#2e7d5b] rounded-lg shadow-sm flex-row items-center justify-center gap-2 mt-2"
              onPress={()=>{}}>
                <Text className="font-headline-sm text-headline-sm text-white font-semibold">
                  {authMode === 'login' ? 'Masuk ke NutriGuide' : 'Daftar Sekarang & Personalisasi'}
                  </Text>
                <MaterialIcons name="arrow-forward" size={20} color='#ffffff'/>
              </TouchableOpacity>
            </View>

            {/* <!-- Social Authentication Divider --> */}
            <View className="relative my-6 text-center">
              <View className="absolute inset-0 flex items-center">
                <View className="w-full border-t border-outline-variant/30"></View>
              </View>
              <View className="relative flex justify-center items-center text-xs">
                <Text className="bg-surface-container-lowest px-3 font-body-sm text-body-sm text-outline">atau masuk dengan</Text>
              </View>
            </View>

            {/* <!-- Quick Social Buttons --> */}
            <View className="grid grid-cols-2 gap-3">

              {/* <!-- Google Button --> */}
              <TouchableOpacity className="flex-1 h-11 flex-row items-center justify-center gap-2 bg-surface-container-low border border-outline-variant/30 rounded-lg"
              onPress={()=>{}}>
                <MaterialIcons name="g-mobiledata" size={24} color="#DB4437"/>
                <Text className="font-medium text-body-sm text-on-surface">Google</Text>
              </TouchableOpacity>

              {/* <!-- Apple Button --> */}
              <TouchableOpacity className="flex-1 h-11 flex-row items-center justify-center gap-2 bg-surface-container-low border border-outline-variant/30 rounded-lg">
                <MaterialIcons name="apple" size={20} color="#000000"/>
                <span className="font-medium text-body-sm text-on-surface">Apple</span>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

    
  );
}

