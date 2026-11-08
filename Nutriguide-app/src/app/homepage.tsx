import React, {useState} from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, TextInput, ScrollView, SafeAreaView, Alert} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Homepage(){


return(
    <SafeAreaView className = "flex-1 bg-background">
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        <View className="px-margin-mobile pt-space-lg">

					{/* <!-- Patient Condition Tag & Reassurance Header --> */}
					<View className="flex-row flex-wrap items-center gap-2 pt-3 py-3">
						<View className="flex-row items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant/30 shadow-sm">
							<MaterialIcons name="medical-services" size={16} color="#096444"/>
							<Text className="font-label-sm text-label-sm text-on-surface font-semibold tracking-wide">Penderita Maag & Rendah Gula</Text>
						</View>
						<View className="flex-row items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-fixed/50">
							<MaterialIcons name="local-fire-department" size={14} color="#00201d"/>
							<Text className="font-label-sm text-label-sm font-medium text-on-secondary-fixed-variant">Fase Pemulihan</Text>
						</View>
					</View>

					{/* <!-- Daily Health Summary Banner (Empathetic & Clinical Tone) --> */}
					<View className="rounded-xl p-space-md bg-[#096444] shadow-sm relative overflow-hidden">
						<View className="absolute -right-6 -bottom-6 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none"/>
						<View className="relative z-10 space-y-1.5">
							<View className="flex-row items-center justify-between">
								<Text className="font-label-sm text-label-sm uppercase tracking-wider text-[#a4f3ca] opacity-90">Evaluasi Hari Ini • 14:20 WIB</Text>
								<MaterialIcons name="stars" size={16} colors="#a4f3ca"/>
							</View>
							<Text className="font-headline-sm text-headline-sm font-semibold leading-tight text-white">
								Halo Budi, pola makan hari ini aman untuk lambungmu! 🌟
							</Text>
							<Text className="font-body-sm text-body-sm text-[#d0ffe3] leading-relaxed pt-1">
								Asam lambung stabil. Asupan gula terkendali di bawah ambang batas glukosa harianmu. Pertahankan jeda makan teratur.
							</Text>
						</View>
					</View>

					

        </View>
      </ScrollView>
    </SafeAreaView>


    )

}
