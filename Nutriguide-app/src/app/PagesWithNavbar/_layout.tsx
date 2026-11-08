import { Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import "../../../global.css";

export default function RootLayout() {
  return(
    <Tabs screenOptions={{
      headerShown: false,
        tabBarActiveTintColor: '#006a61',
        tabBarInactiveTintColor: '#6f7a72',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopColor: 'rgba(190, 201, 193, 0.3)',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
    }}>
      <Tabs.Screen name="homepage"
      options={{
          title: 'Beranda',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}/>
      <Tabs.Screen name="scan"
      options={{
          title: 'Pindai',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="qr-code-scanner" size={size} color={color} />
          ),
        }}/>
      <Tabs.Screen name="food"
      options={{
          title: 'Makanan',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="restaurant" size={size} color={color} />
          ),
        }}/>
      <Tabs.Screen name="schedule"
      options={{
          title: 'Jadwal',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="calendar-today" size={size} color={color} />
          ),
        }}/>
      <Tabs.Screen name="profile"
      options={{
          title: 'Profil',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}/>

    </Tabs>
  )
}
