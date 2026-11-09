import React, {useState} from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, TextInput, ScrollView, SafeAreaView, Alert, Image} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { USER_PROFILE } from '../../data/mockData';

export default function Homepage(){


return(
    <SafeAreaView className = "flex-1 bg-background">

		{/* <!-- TopAppBar Component (from JSON Specification) --> */}
		<View className="flex-row justify-between items-center w-full px-4 py-3 bg-white  border-b border-outline-variant/30 shadow-sm">
			<View className="flex-row items-center gap-3">

				{/* <!-- Leading Avatar & Status --> */}
				<View className="relative">
					<Image className="w-10 h-10 rounded-full border-2 border-primary-container" 
					source={{uri: USER_PROFILE.avatarUrl}}/>
					<Text className="absolute bottom-0 right-0 w-3 h-3 bg-[#096444] rounded-full border-2 border-surface"></Text>
				</View>

				<View>
					<View className="flex-row items-center gap-1.5 mt-0.5">
						<Text className="font-headline-sm text-headline-sm text-[#096444]">NutriGuide</Text>
						<Text className="text-xs px-1.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold">Pro</Text>
					</View>
					<View className="flex-row items-center gap-1">
						<Text className="font-body-sm text-body-sm text-on-surface-variant font-medium">{USER_PROFILE.name}</Text>
						<Text className="w-1 h-1 rounded-full bg-outline-variant"></Text>
						
						<View className="flex-row items-center text-[10px] font-label-sm text-primary font-semibold">
							<MaterialIcons name="verified"  size={12} color="#096444"/> 
							<Text className="text-[12px] mr-0.5 font-semibold">Terpantau</Text>
						</View>
					</View>
				</View>
			</View>
			
			{/* <!-- Trailing Action Icon --> */}
			<TouchableOpacity className="relative p-2 rounded-full"
			onPress={()=>{}}>
				<MaterialIcons name="notifications" size={24} color="#3f4943"/>
				<Text className="absolute top-2 right-2 w-2 h-2 bg-[#ba1a1a] rounded-full ring-2 ring-surface"></Text>
			</TouchableOpacity>
		</View>

      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        <View className="px-4 pt-4 space-y-4">

					{/* <!-- Patient Condition Tag & Reassurance Header --> */}
					<View className="flex-row flex-wrap items-center gap-2 pt-1 mb-1">
						<View className="flex-row items-center gap-1.5 px-3 py-1 rounded-full bg-[#eff4ff] border border-[#bec9c1]/30 shadow-sm">
							<MaterialIcons name="medical-services" size={16} color="#096444"/>
							<Text className="font-label-sm text-label-sm text-on-surface font-semibold tracking-wide">Penderita Maag & Rendah Gula</Text>
						</View>

						<View className="flex-row items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-fixed/50">
							<MaterialIcons name="local-fire-department" size={14} color="#00201d"/>
							<Text className="font-label-sm text-label-sm font-medium text-on-secondary-fixed-variant">Fase Pemulihan</Text>
						</View>
					</View>

					{/* <!-- Daily Health Summary Banner (Empathetic & Clinical Tone) --> */}
					<View className="rounded-xl p-5 bg-[#096444] shadow-sm relative overflow-hidden">
						<View className="absolute -right-6 -bottom-6 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none"/>
						<View className="relative z-10 space-y-2">
							<View className="flex-row items-center justify-between">
								<Text className="font-label-sm text-label-sm uppercase tracking-wider text-[#a4f3ca] opacity-90">Evaluasi Hari Ini • 14:20 WIB</Text>
								<MaterialIcons name="stars" size={28} color="#a4f3ca"/>
							</View>

							<Text className="font-headline-sm text-headline-sm font-semibold leading-tight text-white">
								Halo Budi, pola makan hari ini aman untuk lambungmu! 🌟
							</Text>
							<Text className="font-body-sm text-body-sm text-[#d0ffe3] leading-relaxed pt-1">
								Asam lambung stabil. Asupan gula terkendali di bawah ambang batas glukosa harianmu. Pertahankan jeda makan teratur.
							</Text>
						</View>
					</View>

					{/* <!-- Calorie & Macronutrient Tracker Card (Bento Style Matrix) --> */}
					<View className="bg-white border border-[#bec9c1]/40 rounded-2xl p-4 space-y-4 mb-4">
						
						{/* <!-- Header Metrics --> */}
						<View className="flex-row items-center justify-between border-b border-outline-variant/20 pb-3">
							<View>
								<Text className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Kebutuhan Kalori</Text>
								<View className="flex-row items-baseline gap-1.5 mt-0.5">
									<Text className="font-headline-lg text-headline-lg text-[24px] font-bold text-on-background">1.240</Text>
									<Text className="font-body-md text-body-md text-on-surface-variant font-medium">/ 1.850 kkal</Text>
								</View>
							</View>

							<View className="items-end">
								<View className="flex-row items-center gap-1 px-2 py-0.5 rounded-full bg-primary-fixed/40">
								<MaterialIcons name="check-circle" className="material-symbols-outlined text-xs"/> 
								<Text className="font-label-sm text-label-sm font-semibold text-on-primary-fixed-variant">Sisa 610 kkal</Text>
								</View>
								<Text className="font-body-sm text-body-sm text-on-surface-variant mt-1">67% dari batas harian</Text>
							</View>
						</View>

						{/* <!-- Master Progress Bar --> */}
						<View className="space-y-1 py-1">
							<View className="w-full h-[10px] bg-[#dce9ff] rounded-full overflow-hidden">
								<View className="h-[10px] bg-[#096444] rounded-full" style={{width: '67.02%'}}/>
							</View>

							<View className="flex-row justify-between pt-1">
								<Text className="font-label-sm text-label-sm text-[#6f7a72]">0 kkal</Text>
								<Text className="text-primary text-[#096444] font-semibold">Batas Nyaman Lambung</Text>
								<Text className="font-label-sm text-label-sm text-[#6f7a72]">1.850 kkal</Text>
							</View>
						</View>

						{/* <!-- Specialized Clinical Biometric Tolerance Bars --> */}
						<View className="space-y-3 pt-2">

							<View className="flex-row flex-wrap gap-3">
								
								{/* <!-- Gula (Clinical Strict Alert Metric) --> */}
								<View className="flex-1 min-w-[150px] p-3 rounded-lg bg-[#f8f9ff] border border-[#bec9c1]/30 justify-between">
									<View className="flex-row items-center justify-between mb-1">
										<View className="flex-row items-center gap-1">
											<View className="w-2 h-2 rounded-full bg-[#096444]"/> 
											<Text className="font-label-sm text-label-sm text-[#3f4943] font-semibold">Gula (Rendah)</Text>
										</View>
										<View className="px-1.5 py-0.5 rounded bg-[#eff4ff]">
											<Text className="font-label-sm text-label-sm text-[#096444] font-bold">Aman</Text>
										</View>
									</View>

									<View className="my-2">
										<View className="flex-row items-baseline justify-between mb-1">
											<Text className="font-headline-sm text-headline-sm font-bold text-[#0b1c30]">18g</Text>
											<Text className="font-label-sm text-label-sm text-outline">Batas: 25g</Text>
										</View>

										<View className="w-full bg-[#dce9ff] h-2 rounded-full overflow-hidden">
											<View className="bg-[#096444] h-full rounded-full" style={{width: '72%'}}/>
										</View>
									</View>

									<Text className="font-body-sm text-[11px] text-[#3f4943] leading-tight">Glukosa stabil pasca makan</Text>
								</View>

								{/* <!-- Garam / Natrium (Hypertension & Gastric Wall Safe) --> */}
								<View className="flex-1 min-w-[150px] p-3 rounded-lg bg-[#f8f9ff] border border-[#bec9c1]/30 justify-between">
									<View className="flex-row items-center justify-between mb-1">
										<View className="flex-row items-center gap-1">
											<Text className="w-2 h-2 rounded-full bg-[#006a61]"/> 
											<Text className="font-label-sm text-label-sm text-[#3f4943] font-semibold">Natrium / Garam</Text>
										</View>
										<View className="px-1.5 py-0.5 rounded bg-[#eff4ff]">
											<Text className="font-label-sm text-label-sm text-[#006a61] font-bold">Ideal</Text>
										</View>
									</View>

									<View className="my-2">
										<View className="flex-row items-baseline justify-between mb-1">
											<Text className="font-headline-sm text-headline-sm font-bold text-[#0b1c30]">1.100</Text>
											<Text className="font-label-sm text-label-sm text-outline">Maks: 2.000mg</Text>
										</View>

										<View className="w-full bg-[#dce9ff] h-2 rounded-full overflow-hidden">
											<View className="bg-[#006a61] h-full rounded-full" style={{width: '55%'}}/>
										</View>
									</View>

									<Text className="font-body-sm text-[11px] text-[#3f4943] leading-tight">Cegah iritasi dinding mukosa</Text>
								</View>						
							</View>

							<View className="flex-row flex-wrap gap-3">

								{/* <!-- Karbohidrat Kompleks --> */}
								<View className="flex-1 min-w-[150px] p-3 rounded-lg bg-[#f8f9ff] border border-[#bec9c1]/30 justify-between">
									<View className="flex-row items-center justify-between mb-1">
										<View className="flex-row items-center gap-1">
											<Text className="w-2 h-2 rounded-full bg-[#9d6300]"/> 
											<Text className="font-label-sm text-label-sm text-[#3f4943] font-semibold">Karbohidrat</Text>
										</View>
										<Text className="font-label-sm text-label-sm text-outline">140 / 210g</Text>									
									</View>

									<View className="my-2">
										<View className="w-full bg-[#dce9ff] h-2 rounded-full overflow-hidden">
											<View className="bg-[#9d6300] h-full rounded-full" style={{width: '66%'}}/>
										</View>
									</View>

									<Text className="font-body-sm text-[11px] text-[#3f4943] leading-tight">Prioritas Serat Larut</Text>
								</View>

								{/* <!-- Lemak Sehat --> */}
								<View className="flex-1 min-w-[150px] p-3 rounded-lg bg-[#f8f9ff] border border-[#bec9c1]/30 justify-between">
									<View className="flex-row items-center justify-between mb-1">
										<View className="flex-row items-center gap-1">
											<Text className="w-2 h-2 rounded-full bg-[#6bd8cb]"/> 
											<Text className="font-label-sm text-label-sm text-[#3f4943] font-semibold">Lemak sehat</Text>
										</View>
										<Text className="font-label-sm text-label-sm text-outline">38 / 55g</Text>									
									</View>

									<View className="my-2">
										<View className="w-full bg-[#dce9ff] h-2 rounded-full overflow-hidden">
											<View className="bg-[#6bd8cb] h-full rounded-full" style={{width: '72%'}}/>
										</View>
									</View>	
									
									<Text className="font-body-sm text-[11px] text-[#3f4943] leading-tight">Bebas lemak jenuh tinggi</Text>
								</View>
							</View>
						</View>
					</View>

					{/* <!-- Hydration Tracker Widget (Pola Minum Bertahap untuk Maag) --> */}
					<View className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-4 shadow-sm space-y-3 mb-4">
						<View className="flex-row items-start justify-between">
							<View className="flex-row items-center gap-2.5">
								<View className="w-10 h-10 rounded-xl bg-secondary-fixed/30 flex items-center justify-center text-secondary">
									<MaterialIcons name="water-drop" size={24} color="#006a61"/>
								</View>
								<View>
									<Text className="font-headline-sm text-sm font-semibold text-on-surface">Hidrasi Ramah Lambung</Text>
									<Text className="font-body-sm text-xs text-on-surface-variant">Minum sedikit-sedikit di luar waktu makan</Text>
								</View>
							</View>

							<View className="flex-row items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container">
								<MaterialIcons name="alarm" size={14} color="#006f66"/> 
								<Text className="font-semibold text-[#006f66]">Dalam 35 mnt</Text>
							</View>
						</View>

						<View className="bg-[#f8f9ff] rounded-xl p-3 border border-[#bec9c1]/20 flex-row items-center justify-between">
							<View>
								<View className="flex-row items-baseline gap-1">
									<Text className="font-headline-md text-headline-md font-bold text-secondary">1.600</Text>
									<Text className="font-body-sm text-body-sm text-outline">/ 2.500 ml</Text>
								</View>
								<Text className="font-label-sm text-label-sm text-on-surface-variant font-medium mt-0.5">6 dari 10 gelas terpenuhi</Text>
							</View>

							{/* <!-- Quick Log Hydration Button --> */}
							<TouchableOpacity className="flex-row items-center gap-1.5 px-3 py-2 bg-[#096444] rounded-lg text-xs font-semibold shadow-sm"
							onPress={() => {}}>
								<MaterialIcons name="add" size={20} color="#ffffff"/>
								<Text className="font-semibold text-white">+250 ml</Text>
							</TouchableOpacity>
						</View>

						{/* <!-- Glass Icons Tracker Visualizer --> */}
						<View className="flex-row justify-between items-center px-1 pt-1">

							{/* <!-- Active Glasses --> */}
							<MaterialIcons name="local-drink" size={20} color="#006a61"/>
							<MaterialIcons name="local-drink" size={20} color="#006a61"/>
							<MaterialIcons name="local-drink" size={20} color="#006a61"/>
							<MaterialIcons name="local-drink" size={20} color="#006a61"/>
							<MaterialIcons name="local-drink" size={20} color="#006a61"/>
							<MaterialIcons name="local-drink" size={20} color="#006a61"/>

							{/* <!-- Inactive Remaining Glasses --> */}
							<MaterialIcons name="local-drink" size={20} color="#bec9c1"/>
							<MaterialIcons name="local-drink" size={20} color="#bec9c1"/>
							<MaterialIcons name="local-drink" size={20} color="#bec9c1"/>
							<MaterialIcons name="local-drink" size={20} color="#bec9c1"/>
						</View>
					</View>


        </View>

				

      </ScrollView>
    </SafeAreaView>


    )

}
