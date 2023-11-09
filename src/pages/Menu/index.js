import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useRoute, getFocusedRouteNameFromRoute } from '@react-navigation/native';


import Calculator from './Calculator';
import Bmi from './Bmi';
import Suhu from './Suhu';
import Home from './Home';
import IndeksNilai from './IndeksNilai';

const calculator = "Calculator";
const indeksnilai = "Indeks"
const bmi = "BMI";
const suhu = "suhu";
const home = "home";

const Tab = createBottomTabNavigator();



const Menu = () => {
  const route = useRoute();
  const { username } = route.params;
  return (
    <Tab.Navigator
    initialRouteName={home}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let rn = route.name;

        if (rn === calculator) {
          iconName = focused ? 'calculator' : 'calculator-outline';

        } else if (rn === bmi) {
          iconName = focused ? 'body' : 'body-outline';

        } else if (rn === suhu) {
          iconName = focused ? 'thermometer-outline' : 'thermometer';

        } else if (rn === home) {
          iconName = focused ? 'home' : 'home-outline';

        } else if (rn === indeksnilai) {
          iconName = focused ? 'analytics' : 'analytics-outline';

        }
        
        

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={24} color={color} />;
      },
  
    
      tabBarActiveTintColor: '#16a0ff',
      tabBarInactiveTintColor: 'grey',
      tabBarIconStyle: { fontSize: 15},
      tabBarLabelStyle: { paddingBottom: 10, fontSize: 15 },
      tabBarStyle: { height: 75 , backgroundColor: '#202126',   borderTopWidth: 2,  borderTopColor: route.state ? (route.state.index === route.key ? 'blue' : 'transparent') : 'transparent'}

    })}>

    <Tab.Screen name={home} component={Home} options={{ headerShown: false }} initialParams={{ username }} />
    <Tab.Screen name={calculator} options={{ headerShown: false }} component={Calculator} />
    <Tab.Screen name={bmi} options={{ headerShown: false }} component={Bmi} />
    <Tab.Screen name={suhu} options={{ headerShown: false }} component={Suhu} />
    <Tab.Screen name={indeksnilai} options={{ headerShown: false, tabBarHideOnKeyboard: true }} component={IndeksNilai} />
    
  </Tab.Navigator>
);
}


export default Menu;
