import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Switch, Button, ScrollView } from 'react-native';

const ProfileScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPasswordEnabled, setIsPasswordEnabled] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(prevState => !prevState);
  const togglePassword = () => setIsPasswordEnabled(previousState => !previousState);

  const handleLogout = () => {
    // Logic for logout
    console.log("User logged out");
  };

  // Dynamic styles based on dark mode
  const containerStyle = isDarkMode ? styles.darkContainer : styles.lightContainer;
  const textStyle = isDarkMode ? styles.darkText : styles.lightText;

  return (
    <ScrollView contentContainerStyle={containerStyle}>
      {/* Profile Section */}
      <View style={styles.section}>
        <Image source={require('../assets/profile.png')} style={styles.profilePic} />
        <Text style={[styles.clientName, textStyle]}>Amy Mee</Text>
      </View>

      {/* User Profile */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, textStyle]}>User Profile</Text>
        <Text style={textStyle}>Name: Amy Mee</Text>
        <Text style={textStyle}>Location: Sarbah Hall, UG</Text>
      </View>

      {/* Connected Accounts */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, textStyle]}>Connected Accounts</Text>
        <Text style={textStyle}>- Bank Account</Text>
        <Text style={textStyle}>- Mobile Money Account</Text>
        <Text style={textStyle}>- Facebook</Text>
      </View>

      {/* App Preferences */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, textStyle]}>App Preferences</Text>
        <View style={styles.preference}>
          <Text style={textStyle}>Dark Mode</Text>
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </View>
        <View style={styles.preference}>
          <Text style={textStyle}>Passwords</Text>
          <Switch value={isPasswordEnabled} onValueChange={togglePassword} />
        </View>
      </View>

      {/* Socials */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, textStyle]}>Socials</Text>
        <Text style={textStyle}>Email: amymee@yahoo.com</Text>
        <Text style={textStyle}>Phone: 0506465106</Text>
      </View>

      {/* Logout Button */}
      <View style={styles.section}>
        <Button title="Logout" onPress={handleLogout} color="red" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  lightContainer: {
    padding: 67,
    maxwidth: '100%',
    backgroundColor: '#f2f2f2',
  },
  darkContainer: {
    width: '100%',
    padding: 67,
    backgroundColor: '#333',
  },
  section: {
    marginBottom: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 10,
  },
  clientName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  darkText: {
    color: '#fff',
  },
  lightText: {
    color: '#000',
  },
});

export default ProfileScreen;
