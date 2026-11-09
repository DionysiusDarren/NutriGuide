import React, {useState} from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, TextInput, ScrollView, SafeAreaView, Alert, Image} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function profile(){

	const router = useRouter();

    return(
        <SafeAreaView className = "flex-1 bg-background">
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
                <View className="px-4 pt-4 space-y-4">

                    {/* <!-- 1. Ringkasan Pengguna --> */}
                    <View className="bg-white rounded-xl p-4 border border-[#bec9c1]/40 shadow-sm flex-row items-center gap-3">
                        <Image className="w-14 h-14 rounded-full border-2 border-[#2e7d5b]" 
                        source={{uri:"https://lh3.googleusercontent.com/aida-public/AB6AXuDffIXMsW0-2H9wYw_k0fb5ZhiizVGV1n2OsHdqliwmhzqLIBURc7WiO9GV0YEW9YFyGAReERgmgFArPbpMv8auqcfg_p1A2J7369aZ_jr3eouI7bqVNCrFPuvJF_lcJ5xin_5L5RAuxJz-CJkeYAS-dK3vCCm1y3KhzVSOezVt6xkm05B1nveQDgzUM4Oltvyhi70Ro8djFFLoNCmyFQcsoPSdmE3lDNz2OwP8-AA-YkFMi9N4aPk"}}/>

                        <View className="flex-1">
                            <View className="flex-row items-center gap-1.5">
                                <Text className="text-base font-bold text-[#0b1c30]">Budi Santoso</Text>
                                <MaterialIcons name='verified' size={18} color="#096444"/>
                            </View>

                            <Text className="text-xs text-on-surface-variant">34 thn • 68 kg • 172 cm (IMT: 23.0 - Ideal)</Text>
                        </View>

                        <TouchableOpacity className="px-3 py-1.5  rounded-lg border border-outline-variant"
                        onPress={()=>{}}>
                            <Text className="font-semibold text-on-surface text-xs font-medium">Ubah</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <!-- 2. Kondisi Medis & Pantangan (Inti App) --> */}
                    <View className="bg-white rounded-xl p-4 border border-[#bec9c1]/40 shadow-sm space-y-3">
                        <View className="flex-row items-center justify-between">
							<View className="flex-row items-center gap-1.5">
								<MaterialIcons name="favorite" size={18} color="#096444"/>
								<Text className="text-sm font-bold text-[#0b1c30]">Kondisi & Pantangan</Text>
							</View>
							
							<TouchableOpacity onPress={()=>{}}>
								<Text className="text-xs text-[#096444] font-semibold">Kelola</Text>
							</TouchableOpacity>
                        </View>

                        <View className="flex-row flex-wrap gap-2">
							<View className="flex-row items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200">
								<View className="w-1.5 h-1.5 rounded-full bg-amber-500"/>
								<Text className="text-xs font-medium text-amber-900">Diabetes Melitus (Rendah Gula)</Text>
							</View>

							<View className="flex-row items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
								<View className="w-1.5 h-1.5 rounded-full bg-[#096444]"/>
								<Text className="text-xs font-medium text-[#096444]">Maag & Asam Lambung</Text>
								
							</View>

							<View className="flex-row items-center gap-1 px-3 py-1.5 rounded-full bg-red-50 border border-red-200 ">
								<MaterialIcons name="warning" size={14} color="#ba1a1a"/>
								<Text className="text-xs font-semibold text-[#ba1a1a]">Alergi: Udang & Kerang</Text>
							</View>
                        </View>
                    </View>

					{/* <!-- 3. Pengingat Minum Air (Sederhana & Mudah Dibuat) --> */}
					<View className="bg-white rounded-xl p-4 border border-[#bec9c1]/40 shadow-sm space-y-2.5">
						<View className="flex-row items-center justify-between">
							<View className="flex-row items-center gap-2">
								<MaterialIcons name="water-drop" size={20} color="#006a61"/>
								<Text className="text-sm font-bold text-on-surface">Target Air Minum</Text>
							</View>
							<Text className="text-xs text-[#096444] font-bold">1.500 / 2.500 ml</Text>
						</View>
						<View className="w-full bg-[#dce9ff] h-2 rounded-full overflow-hidden">
							<View className="h-[8px] bg-[#096444] rounded-full" style={{width: '60%'}}/>
						</View>
						<View className="flex-row items-center justify-between pt-1">
							<Text className="text-xs text-on-surface-variant">Pengingat tiap 2 jam (Aktif)</Text>
							<TouchableOpacity className="px-2.5 py-1 rounded-lg bg-surface-container"
							onPress={()=>{}}>
								<Text className="text-xs text-[#096444] font-semibold">+ Tambah 250ml</Text>
							</TouchableOpacity>
						</View>
					</View>

					{/* <!-- 4. Pengingat Makan Ringkas --> */}
					<View className="bg-white rounded-xl p-4 border border-[#bec9c1]/40 shadow-sm space-y-2.5">
						<View className="flex-row items-center gap-1.5">
							<MaterialIcons className="material-symbols-outlined text-primary text-[18px]"/>
							<Text className="text-sm font-bold text-on-surface">Jadwal Makan Hari Ini</Text>
						</View>
						<View className="space-y-1.5 text-xs">
							<View className="flex-row justify-between items-center p-2 rounded-lg bg-[#dce9ff] border border-[#bec9c1]/20">
								<Text className="font-medium text-on-surface">Sarapan</Text>
								<Text className="text-on-surface-variant font-mono">07:00</Text>
							</View>
							<View className="flex-row justify-between items-center p-2 rounded-lg bg-[#dce9ff] border border-[#bec9c1]/20">
								<Text className="font-medium text-on-surface">Makan Siang</Text>
								<Text className="text-on-surface-variant font-mono">12:30</Text>
							</View>
							<View className="flex-row justify-between items-center p-2 rounded-lg bg-[#dce9ff] border border-[#bec9c1]/20">
								<Text className="font-medium text-on-surface">Makan Malam</Text>
								<Text className="text-on-surface-variant font-mono">19:00</Text>
							</View>
						</View>
					</View>

					{/* <!-- Keluar / Akun --> */}
					<View className="pt-3 items-center">
						<TouchableOpacity className="flex-row items-center gap-1 py-2 px-4"
						onPress={()=> router.replace('/')}>
							<MaterialIcons name="logout" size={16} color="#ba1a1a"/>
							<Text className="text-xs font-semibold text-[#ba1a1a]">Keluar dari Akun</Text>
						</TouchableOpacity>
					</View>


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}