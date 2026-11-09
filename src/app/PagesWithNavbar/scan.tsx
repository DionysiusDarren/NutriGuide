import React, {useState} from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, TextInput, ScrollView, SafeAreaView, Alert, Image} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function scan(){

    return(
        <SafeAreaView className = "flex-1 bg-background">
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
                <View className="px-4 pt-4 space-y-4">

                    {/* <!-- 1. Mode Switcher (2 opsi utama: Barcode & Foto) --> */}
                    <View className="flex-row bg-[#dce9ff] p-1 rounded-lg border border-[#bec9c1]/30">
                        <TouchableOpacity className="flex-1 py-1.5 rounded-md bg-white shadow-sm flex-row items-center justify-center gap-1.5">
                            <MaterialIcons name="qr-code-scanner" size={16}/>
                            <Text className="text-xs font-medium ">Barcode</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-1 py-1.5 rounded-md flex-row items-center justify-center gap-1.5">
                            <MaterialIcons name="photo-camera" size={16}/>
                            <Text className="text-xs font-medium ">Foto Makanan</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <!-- 2. Viewfinder Kamera Bersih & Rapi --> */}
                    <View className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-outline-variant/30 flex items-center justify-center">
                        <Image className="w-full h-full object-cover opacity-80" 
                        source={{uri:"https://lh3.googleusercontent.com/aida-public/AB6AXuCF5G10H7O1hnZAe4MPmC1e27mwzRSxmPFvTakC3i7PSevQ8mucFmUpdNcj1OuQN-bcueJ6GvCNapuP1QUqLA5SMHcvFabnX1xFCBJms9irGHRLEJM08DBGc5H31_IpIyJK8GME5c1QQYMwaTl6oJkG030BtdtixdkCH63Oa7yRuZ8TSEyUVVKAtqKwK9RKygA8iGNdzdF0xHTCJejqfYyAhMqRuDTTpdtd94aC-6Crgv42pZHbHtc"}}/>
                        
                        {/* <!-- Framing Target Sederhana --> */}
                        <View className="absolute w-48 h-36 border-2 border-dashed border-white/60 rounded-xl pointer-events-none flex-row items-center justify-center">
                            <View className=" bg-black/50 px-2 py-0.5 rounded">
                                <Text className="text-[11px] text-white/90">Arahkan barcode ke sini</Text>
                            </View>
                        </View>

                        {/* <!-- Tombol Flash & Galeri Sederhana --> */}
                        <View className="absolute bottom-3 right-3 flex gap-2">
                            <TouchableOpacity className="w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center">
                                <MaterialIcons name="flash-on" size={18}/>
                            </TouchableOpacity>
                            <TouchableOpacity className="w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center">
                                <MaterialIcons name="photo" size={18}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* <!-- 3. Kartu Hasil Terdeteksi (Simpel & Langsung pada Inti) --> */}
                    <View className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/40 shadow-sm space-y-3">
                        <View className="flex-row items-start justify-between">
                            <View>
                                <Text className="text-[10px] font-bold text-primary uppercase tracking-wider">Hasil Deteksi</Text>
                                <Text className="text-sm font-bold text-on-surface">Biskuit Gandum Cokelat 120g</Text>
                                <Text className="text-xs text-on-surface-variant">OatVital Organik</Text>
                            </View>
                            
                            {/* <!-- Skor Kecocokan Ringkas --> */}
                            <View className="px-2 py-1 bg-emerald-50 border border-emerald-200 rounded-lg text-right">
                                <Text className="text-xs font-bold text-primary">Kecocokan: 88%</Text>
                            </View>
                        </View>

                        {/* <!-- Tag Ringkas Peringatan & Kebaikan --> */}
                        <View className="flex-row flex-wrap gap-1.5 text-xs">
                            <View className="flex-row items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100">
                                <MaterialIcons name="check" size={14}/> 
                                <Text className="text-primary font-semibold">Gula Rendah (4g)</Text>
                            </View>
                            <View className="flex-row items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100">
                                <MaterialIcons name="check" size={14}/> 
                                <Text className="text-primary font-semibold">Bebas Kacang</Text>
                            </View>
                            <View className="flex-row items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-100">
                                <MaterialIcons name="warning" size={14}/> 
                                <Text className="text-primary font-semibold">Ada Gluten</Text>
                            </View>
                        </View>

                        {/* <!-- Tombol Aksi Langsung --> */}
                        <View className="pt-1 flex-row gap-2">
                            <TouchableOpacity className="flex-1 h-10 rounded-lg bg-[#096444] flex-row items-center justify-center gap-1"
                            onPress={()=>{}}>
                                <Text className="text-white text-xs font-semibold">Lihat Detail Makanan</Text>
                                <MaterialIcons name="arrow-forward" size={16} color="#ffffff"/>
                            </TouchableOpacity>
                            <TouchableOpacity className="h-10 px-3 rounded-lg border border-outline-variant flex-row items-center justify-center gap-1"
                            onPress={()=>{}}>
                                <MaterialIcons name="bookmark-add" size={16}/>
                                <Text className="text-on-surface text-xs font-medium">Catat</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}