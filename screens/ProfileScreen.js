import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Switch, Button, ScrollView } from 'react-native';

const ProfileScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPasswordEnabled, setIsPasswordEnabled] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);
  const togglePassword = () => setIsPasswordEnabled(previousState => !previousState);

  const handleLogout = () => {
    // Logic for logout
    console.log("User logged out");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Section */}
      <View style={styles.section}>
        <Image source={require('../assets/profile.png')} style={styles.profilePic} />
        <Text style={styles.clientName}>Amy Mee</Text>
      </View>

      {/* User Profile */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>User Profile</Text>
        <Text>Name: Amy Mee</Text>
        <Text>Location: Sarbah Hall, UG</Text>
      </View>

      {/* Connected Accounts */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Connected Accounts</Text>
        <Text>Financial Accounts</Text>
        <Text>- Bank Account</Text>
        <Text>- Mobile Money Account</Text>
        <Text>Social Accounts</Text>
        <Text>- Facebook</Text>
      </View>

      {/* App Preferences */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Preferences</Text>
        <View style={styles.preference}>
          <Text>Dark Mode</Text>
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </View>
        <View style={styles.preference}>
          <Text>Passwords</Text>
          <Switch value={isPasswordEnabled} onValueChange={togglePassword} />
        </View>
      </View>

      {/* Socials */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Socials</Text>
        <Text>Email: amymee@yahoo.com</Text>
        <Text>Phone: 0506465106</Text>
      </View>

      {/* Logout Button */}
      <View style={styles.section}>
        <Button title="Logout" onPress={handleLogout} color="red" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
  userPhoto: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginTop: 10,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default ProfileScreen;
