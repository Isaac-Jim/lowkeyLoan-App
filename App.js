import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import SplashScreen from "./sreens/SplashScreen";
import HomeSupport from "./screens/HomeSupport";
import ProfileScreen from "./screens/ProfileScreen";
import ApplicationScreen from "./screens/ApplicationScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Support" component={HomeSupport} />
        <Stack.Screen name="Splash" componenent={SplashScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LoanApplication" component={ApplicationScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default AppNavigator;