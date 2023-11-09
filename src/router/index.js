import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, AboutUs, Profile, Login, Register, Menu} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          opacity: 1, // Opacity awal
        },
        cardStyleInterpolator: ({ current }) => ({
          cardStyle: {
            opacity: current.progress, // Mengatur opacity berdasarkan progress
          },
        }),
      }}
    >
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile}options={{headerShown: false}} />
      <Stack.Screen name="AboutUs" component={AboutUs}options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default Router;
