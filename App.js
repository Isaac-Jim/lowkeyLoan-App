import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ApplicationScreen from './screens/ApplicationScreen'; 
import ProfileScreen from './screens/ProfileScreen'; 
import HomeSupport from './screens/HomeSupport';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Hides the header for all screens
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ApplicationScreen" component={ApplicationScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="HomeSupport" component={HomeSupport} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
