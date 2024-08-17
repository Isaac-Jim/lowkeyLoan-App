import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from './screens/HomeScreen';
import ApplicationScreen from './screens/ApplicationScreen'; 
import ProfileScreen from './screens/ProfileScreen'; 
import HomeSupport from './screens/HomeSupport';
import ScheduleAppointmentScreen from './screens/ScheduleAppointmentScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Hides the header for all screens
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ApplicationScreen" component={ApplicationScreen} />
        <Stack.Screen name="ScheduleAppointmentScreen" component={ScheduleAppointmentScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="HomeSupport" component={HomeSupport} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
